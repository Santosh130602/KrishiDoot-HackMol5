# # from flask import Flask, request, jsonify
# # # from sklearn.externals import joblib
# # import joblib
# # import pickle


# # app = Flask(__name__)

# # # Load the trained machine learning model
# # model = joblib.load('crop_recommendation_model.pkl')
# # with open('crop_recommendation_model.pkl', 'wb') as file:
# #     pickle.dump(model, file)

# # # Define the predict endpoint
# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     try:
# #         # Get the input data from the request
# #         data = request.json
        
# #         # Extract features from the input data
# #         N = float(data['N'])
# #         P = float(data['P'])
# #         K = float(data['K'])
# #         temperature = float(data['temperature'])
# #         humidity = float(data['humidity'])
# #         ph = float(data['ph'])
# #         rainfall = float(data['rainfall'])
        
# #         # Make prediction using the loaded model
# #         prediction = model.predict([[N, P, K, temperature, humidity, ph, rainfall]])
        
# #         # Return the predicted crop as a JSON response
# #         return jsonify({'predicted_crop': prediction[0]})
# #     except Exception as e:
# #         # Handle any errors and return an error response
# #         return jsonify({'error': str(e)}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True)




from flask import Flask, request, jsonify
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

app = Flask(__name__)

# Load data
data = pd.read_csv('/Users/santosh/Desktop/krishi/ML/Crop_recommendation.csv')

# Preprocess your data, perform feature engineering, etc.

# Split data into train and test sets
X = data[['Temperature', 'Humidity', 'Moisture', 'Soil Type', 'Crop Type', 'Nitrogen', 'Potassium', 'Phosphorous']]
y = data['Fertilizer Name']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Predict route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = data['features']
    prediction = model.predict([features])
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)



# from flask import Flask, request, jsonify
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier

# app = Flask(__name__)

# # Load data
# data = pd.read_csv('/Users/santosh/Desktop/krishi/ML/Fertilizer Prediction.csv')

# # Preprocess your data, perform feature engineering, etc.

# # Split data into train and test sets
# X = data[['Temperature', 'Humidity', 'Moisture', 'Soil Type', 'Crop Type', 'Nitrogen', 'Potassium', 'Phosphorous']]
# y = data['Fertilizer Name']
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Train model
# model = RandomForestClassifier()
# model.fit(X_train, y_train)

# # Predict route
# @app.route('/predictFertilizer', methods=['POST'])
# def predict():
#     data = request.get_json()
#     features = data['features']
#     prediction = model.predict([features])
#     return jsonify({'prediction': prediction[0]})

# if __name__ == '__main__':
#     app.run(debug=True)
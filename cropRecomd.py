# **************************************************************************************************************************************************
                                                        # Crop Recommendation
# **************************************************************************************************************************************************

import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score



# Step 1: Data Preparation
crop_data = pd.read_csv("/Users/santosh/Desktop/Farmer-Call-Center-master/ML/Crop_recommendation.csv")

# Splitting the dataset into features (X) and target labels (y)
X = crop_data[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
y = crop_data['label']

# Step 2: Model Selection (Random Forest Classifier)
model = RandomForestClassifier()

# Step 3: Model Training
model.fit(X, y)

# Step 4: Model Evaluation (Optional)
# You can evaluate the model's performance using cross-validation or on a holdout test set if available.

# Step 5: Prediction
def predict_crop(N, P, K, temperature, humidity, ph, rainfall):
    input_data = [[N, P, K, temperature, humidity, ph, rainfall]]
    crop_prediction = model.predict(input_data)
    return crop_prediction[0]

# Example usage
N = 30
P = 65
K = 82
temperature = 20
humidity = 15
ph = 7
rainfall = 76

predicted_crop = predict_crop(N, P, K, temperature, humidity, ph, rainfall)
print("Predicted crop:", predicted_crop)
joblib.dump(model, 'crop_recommendation_model.pkl')









// import React, { useState } from 'react';
// import PreHeader from "../components/preheader/preheader";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/footer";
// import axios from 'axios';

// const CropRecommendationForm = () => {
//   const [formData, setFormData] = useState({
//     N: '',
//     P: '',
//     K: '',
//     temperature: '',
//     humidity: '',
//     ph: '',
//     rainfall: ''
//   });

//   const [predictedCrop, setPredictedCrop] = useState('');
//   const [load, setLoad] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSearchSubmit = async () => {
//     setLoad(true);
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/predict', formData);
//       setPredictedCrop(response.data.predicted_crop);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setLoad(false);
//   };

//   return (
//     <>
//       <PreHeader />
//       <Header />
//       <section className="">
//         <div className="grid place-items-center my-14  ">
//           <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
//             <p className="text-2xl font-medium text-green-600 my-12">
//               Predict the best crop to plant
//               <br />
//             </p>
//             {/* Language selection buttons */}
//             <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="N"
//               value={formData.N}
//               placeholder="Enter the value of nitrogen"
//             />
//             <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="P"
//               value={formData.P}
//               placeholder="Enter the value of nitrogen"
//             />

// <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="K"
//               value={formData.K}
//               placeholder="Enter the value of nitrogen"
//             />

// <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="temperature"
//               value={formData.temperature}
//               placeholder="Enter the value of nitrogen"
//             />

// <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="humidity"
//               value={formData.humidity}
//               placeholder="Enter the value of nitrogen"
//             />

// <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="ph"
//               value={formData.ph}
//               placeholder="Enter the value of nitrogen"
//             />

// <input
//               onChange={handleChange}
//               className="w-3/5 my-2 required"
//               type="text"
//               name="rainfall"
//               value={formData.rainfall}
//               placeholder="Enter the value of nitrogen"
//             />
//             {/* Input fields for N, P, K, temperature, humidity, ph, rainfall */}
//             <button
//               onClick={onSearchSubmit}
//               type="button"
//               className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//             >
//               Get Crop Recommendation
//             </button>
//           </div>
//         </div>





//          <div>
//           {load ? (
//             <div className="grid place-items-center my-14  ">loading </div>
//           ) : (
//             <div></div>
//           )}
//           {predictedCrop !== "" ? (
//             <div className="grid place-items-center my-14 text-center ">
//               <p className="font-bold my-3">Crop Predicted: </p>
//               {predictedCrop}
//             </div>
//           ) : (
//             <div></div>
//           )}
//         </div> 




        
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default CropRecommendationForm;



import React, { useState } from 'react';
import axios from 'axios';
import PreHeader from "../components/preheader/preheader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const CropRecommendationForm = () => {
  const [formData, setFormData] = useState({
    N: '12',
    P: '23',
    K: '34',
    temperature: '34',
    humidity: '54',
    ph: '6',
    rainfall: '67'
  });

  const [predictedCrop, setPredictedCrop] = useState('');
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSearchSubmit = async () => {
    setLoad(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData);
       setPredictedCrop(response.data.predictedCrop);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoad(false);
  };

  return (
    <>
      <PreHeader />
      <Header />
      <section className="">
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the best crop to plant
              <br />
            </p>
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="N"
              value={formData.N}
              placeholder="Enter the value of nitrogen"
            />
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="P"
              value={formData.P}
              placeholder="Enter the value of phosphorus"
            />
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="K"
              value={formData.K}
              placeholder="Enter the value of potassium"
            />
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="temperature"
              value={formData.temperature}
              placeholder="Enter the temperature"
            />
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="humidity"
              value={formData.humidity}
              placeholder="Enter the humidity"
            />
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="ph"
              value={formData.ph}
              placeholder="Enter the pH level"
            />
            <input
              onChange={handleChange}
              className="w-3/5 my-2 required"
              type="text"
              name="rainfall"
              value={formData.rainfall}
              placeholder="Enter the rainfall"
            />
            <button
              onClick={onSearchSubmit}
              type="button"
              className="inline-block px-6 py-2.5 bg-[#213c96] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Crop Recommendation
            </button>
          </div>
        </div>
        <div>
          {load ? (
            <div className="grid place-items-center my-14  ">loading </div>
          ) : (
            <div></div>
          )}
          {predictedCrop !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3">Crop Predicted: </p>
              {predictedCrop}
            </div>
          ) : (
            <div></div>
          )}
        </div> 
      </section>
      <Footer />
    </>
  );
};

export default CropRecommendationForm;
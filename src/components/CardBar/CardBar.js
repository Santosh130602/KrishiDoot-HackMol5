import { Component } from "react";
import React from "react";
import MarketPrice from "../img/MarketPrice.jpeg";
import Fertilizer from "../img/Fertilizer.jpeg";
import CropRecom from "../img/CropRecom.png";
// import { withRouter } from "react-router-dom"; // Import withRouter if needed
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// const navigate = useNavigate();


class CardBar extends Component {

  // handleCropRecommendationClick = () => {
  //   // Navigate to the crop recommendation page
  //   this.props.history.push("./pages/"); // Assuming the path is "/crop-recommendation"
  // };
  
 
  render() {
    return (
      <section className="body__section py-10">
        <div className="grid place-items-center mt-5">
          <p className="text-3xl font-bold text-center text-gray-900 uppercase mb-2">
            Features Section
          </p>
          <p className="text-xl font-medium text-center text-gray-500 ">
            Our Experties Are . . .
          </p>
        </div>
        <div className="grid place-items-center mt-14 mb-20 mr-9">
          <div className="inline-flex space-x-36 items-center justify-end">
            <div className="w-1/4 h-full "
            //  onClick={() => navigate("/crop")}
            // onClick={this.handleCropRecommendationClick}
             >
              <div className="inline-flex flex-col space-y-6 items-center justify-end flex-1 h-full pl-9 pr-8 pt-8 pb-11 bg-white border rounded border-black border-opacity-10"  >
                <img className="bg-cover rounded-lg" src={CropRecom} alt="Crop Recommendation" />
                <p className="w-56 h-7 text-lg font-semibold text-gray-900 text-center">
                Crop Recommendation
                </p>
                <p className="opacity-70 w-56 h-1/5 text-base text-center">
                  {/* Providing solutions through calls */}
                  Find the best suggetion on behalf of your soil
                </p>
              </div>
            </div>
            <div className="w-1/4 h-full">
              <div className=" Fertilizer inline-flex flex-col space-y-6 items-center justify-end flex-1 h-full pl-9 pr-8 pt-8 pb-11 bg-white border rounded border-black border-opacity-10">
                <img className="bg-cover rounded-lg" src={Fertilizer} alt="Fertilize"/>
                <p className="w-56 h-7 text-lg  font-semibold text-gray-900 text-center">
                Fertilizer Recommendation
                </p>
                <p className="opacity-70 w-56 h-1/5  text-base text-center">
                  What is the best fertilizer for your Crop 
                </p>
              </div>
            </div>

            <div className="w-1/4 h-full">
              <div className="inline-flex flex-col space-y-6 items-center justify-end flex-1 h-full pl-9 pr-8 pt-8 pb-11 bg-white border rounded border-black border-opacity-10">
                <img
                  src={MarketPrice}
                  className="bg-cover rounded-lg"
                  alt="Market Price"
                />
                <p className="w-56 h-7 text-lg font-semibold text-gray-900 text-center">
                Market Price
                </p>
                <p className="opacity-70 w-56 h-1/5 text-base text-center">
                  Know the market Price for tour Crop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardBar;

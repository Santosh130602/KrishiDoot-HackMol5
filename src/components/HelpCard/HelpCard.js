import { Component } from "react";
import SMS from "../img/sms.png";
import Help from "../img/help-desk.png";
import Call from "../img/phone-call.png";

class HelpCard extends Component {
  render() {
    return (
      <section className="bg-gray-100 py-10">
        <div className="grid place-items-center mt-14 ">
          <p className="text-3xl font-bold text-center text-gray-900 uppercase mb-2">
            HELP DESK
          </p>
          <p className="text-xl font-medium text-center text-gray-500 ">
          Unlock access to a global network of farmers and find instant solutions to your inquiries. Whether you're seeking advice or solutions, our platform offers two efficient methods to meet your needs.
          </p>
        </div>
        <div className="grid place-items-center mt-14 mb-20">
          <div className="flex space-x-20">
            <div className="flex flex-row m-2">
              <img
                className="w-14 h-14 rounded-lg mr-4"
                src={Call}
                alt="call"
              />
              <div className="flex flex-column flex-wrap w-40">
                <p className="">Give krashak a call </p>
                <p className="text-green-600 cursor-pointer">7317208534</p>
              </div>
            </div>
            <div className="flex flex-row m-2">
              <img className="w-14 h-14 rounded-lg mr-4" src={SMS} alt="SMS" />
              <div className="flex flex-column flex-wrap w-40">
                <p className="">Drop your query </p>
                <p
                  className="text-green-600 cursor-pointer"
                  onClick={() => {
                    window.location.href = "/sms";
                  }}
                >
                  Drop SMS here
                </p>
              </div>
            </div>
            <div className="flex flex-row m-2">
              <img
                className="w-14 h-14 rounded-lg mr-4"
                src={Help}
                alt="help"
              />
              <div className="flex flex-column flex-wrap w-40">
                <p className="">Use the voice bot</p>
                <p
                  className="text-green-600 cursor-pointer"
                  onClick={() => {
                    window.location.href = "/voice";
                  }}
                >
                  click here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HelpCard;

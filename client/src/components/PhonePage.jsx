import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function PhonePage() {
  const { model } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone; // received from navigate()

  // ✅ State to track selected EMI plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (!phone) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        No phone data found for "{model}" 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-4 text-blue-600 text-sm hover:underline"
      >
        ← Back
      </button>

      {/* ✅ Two-column layout */}
      <div className="bg-white shadow-md rounded-xl flex flex-col md:flex-row max-w-3xl w-full overflow-hidden">
        {/* 📱 LEFT SIDE — Phone details */}
        <div className="md:w-1/2 p-6 border-r border-gray-100 text-center flex flex-col items-center justify-center">
          <span className="text-xs uppercase text-red-500 font-semibold mb-1">
            New
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {phone.model}
          </h2>
          <p className="text-gray-500 text-xs mb-3">256GB</p>

          <img
            src={phone.image}
            alt={phone.model}
            className="w-52 h-52 object-cover rounded-lg mb-4"
          />

          {/* ✅ Finishes Section */}
          <div className="text-center">
            <p className="text-gray-500 text-xs mb-2">
              Available in 3 finishes
            </p>
            <div className="flex justify-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-gray-300 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-blue-900 inline-block"></span>
            </div>
          </div>
        </div>

        {/* 💰 RIGHT SIDE — Price and EMI Plans */}
        <div className="md:w-1/2 p-6">
          {/* ✅ Price Section */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-900">
              ₹{phone.mrp.toLocaleString("en-IN")}
            </p>
            <p className="text-gray-400 line-through text-xs">
              ₹{(phone.mrp * 1.06).toLocaleString("en-IN")}
            </p>
          </div>

          {/* ✅ EMI Plans Section */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-700">
              EMI plans backed by mutual funds
            </h3>

            <div className="space-y-2">
              {phone.emiPlans && phone.emiPlans.length > 0 ? (
                phone.emiPlans.map((plan, index) => {
                  const isSelected = selectedPlan === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedPlan(index)}
                      className={`cursor-pointer flex justify-between items-center rounded-lg p-3 shadow-sm transition duration-200 ${
                        isSelected
                          ? "border-2 border-green-600 bg-green-50"
                          : "bg-gray-100 border border-transparent hover:border-green-300"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          ₹{plan.amount.toLocaleString("en-IN")} × {plan.months} months
                        </p>
                        <p className="text-green-600 text-xs">
                          Additional cashback of ₹7,500
                        </p>
                      </div>
                      <p className="text-gray-700 text-xs font-semibold">
                        {plan.interest}% interest
                      </p>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 text-xs">No EMI plans available</p>
              )}
            </div>
          </div>

          {/* ✅ Buy Button */}
          <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-md text-sm hover:bg-green-700 transition duration-300">
            {selectedPlan !== null
              ? `Buy with ${phone.emiPlans[selectedPlan].months}-month EMI`
              : "Proceed to Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

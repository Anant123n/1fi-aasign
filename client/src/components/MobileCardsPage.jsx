import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileCardsPage() {
  const [mobiles, setMobiles] = useState([]);
  const navigate = useNavigate();

  const fetchMobiles = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/mobiles");
      if (!response.ok) throw new Error("Failed to fetch mobile data");
      const data = await response.json();
      setMobiles(data);
    } catch (error) {
      console.error("Error fetching mobiles:", error);
    }
  };

  useEffect(() => {
    fetchMobiles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Mobile Phones
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mobiles.map((phone) => (
          <div
            key={phone._id}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <img
              src={phone.image}
              alt={phone.model}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{phone.model}</h2>
            <p className="text-gray-500 text-sm mb-1">{phone.company}</p>
            <p className="text-green-600 font-bold text-lg mb-3">
              ₹{phone.mrp}
            </p>

            {/* ✅ Buy Now button */}
            <button
              onClick={() =>
                navigate(`/phone/${encodeURIComponent(phone.model)}`, {
                  state: { phone }, // pass phone object as prop
                })
              }
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

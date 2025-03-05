import React, { useState } from "react";

const TroopProductionCalculator = () => {
  const [percentage, setPercentage] = useState("");
  const [currentProduction, setCurrentProduction] = useState("");
  const [currentProductionUnit, setCurrentProductionUnit] = useState("K");
  const [multiplier, setMultiplier] = useState(10);

  const formatNumber = (value) => {
    const units = ['K', 'M', 'G', 'T', 'P'];
    let unitIndex = -1;
    while (value >= 1000 && unitIndex < units.length - 1) {
      value /= 1000;
      unitIndex++;
    }
    return unitIndex === -1 ? value.toFixed(2) : value.toFixed(2) + units[unitIndex];
  };

  const updateProduction = () => {
    if (currentProduction === "" || percentage === "") return { baseProduction: 0, finalProduction: 0 };

    const units = { 'K': 1e3, 'M': 1e6, 'G': 1e9, 'T': 1e12, 'P': 1e15 };
    let currentProdNum = currentProduction * (units[currentProductionUnit] || 1);
    let decimalFactor = (100 + parseFloat(percentage)) / 100;
    let baseProduction = currentProdNum / decimalFactor;
    let finalProduction = baseProduction * multiplier;

    return { baseProduction, finalProduction };
  };

  const { baseProduction, finalProduction } = updateProduction();

  return (
    
     
        <div className="w-full h-full p-8 sm:p-2 md:p-5 bg-gray-900/60 text-white shadow-2xl rounded-t-lg border border-blue-500">
          <div className="flex items-center"></div>
          <h2 className="text-xl font-bold text-blue-400 text-center mb-4">⚔️ Troop Production Calculator ⚔️</h2>

          <div className="mt-4">
            <label className="block text-blue-300 font-semibold">Troop Production Percentage (%):</label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="w-full p-3 sm:p-2 md:p-5 mt-1 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-blue-300 font-semibold">Current Troop Production:</label>
            <div className="flex gap-2 mt-1">
              <input
                type="number"
                value={currentProduction}
                onChange={(e) => setCurrentProduction(e.target.value)}
                className="w-3/4 p-3 sm:p-2 md:p-5 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
              />
              <select
                value={currentProductionUnit}
                onChange={(e) => setCurrentProductionUnit(e.target.value)}
                className="w-1/4 p-3 sm:p-2 md:p-5 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
              >
                <option value="K">K</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="T">T</option>
                <option value="P">P</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-blue-300 font-semibold">Multiplier:</label>
            <input
              type="number"
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
              className="w-full p-3 sm:p-2 md:p-5 mt-1 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
            />
          </div>

          <div className="mt-6 text-lg font-bold bg-gray-900 p-6 sm:p-2 md:p-5 rounded-lg text-blue-300 shadow-md text-center border-l-4 border-blue-500">
            Base Troop Production: {formatNumber(baseProduction)} <br />
            Final Troop Production: {formatNumber(finalProduction)}
          </div>
        </div>
    
  
  );
};

export default TroopProductionCalculator;

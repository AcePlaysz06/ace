import React, { useState, useEffect } from "react";

const AttackPowerCalculator = () => {
  const [troopBonus, setTroopBonus] = useState(localStorage.getItem("striker") || "");
  const [totalTroops, setTotalTroops] = useState("");
  const [unit, setUnit] = useState(1);

  const cityDefensePower = [];
  let basePower = 70;
  for (let level = 1; level <= 500; level++) {
    cityDefensePower.push({ level, power: basePower });
    basePower *= 1.2;
  }

  const formatNumber = (num) => {
    if (num >= 1e15) return (num / 1e15).toFixed(2) + " P";
    if (num >= 1e12) return (num / 1e12).toFixed(2) + " T";
    if (num >= 1e9) return (num / 1e9).toFixed(2) + " G";
    if (num >= 1e6) return (num / 1e6).toFixed(2) + " M";
    if (num >= 1e3) return (num / 1e3).toFixed(2) + " K";
    return num.toLocaleString();
  };

  const calculateAP = () => {
    if (troopBonus === "" || totalTroops === "") return { attackPower: 0, highestCity: "-" };

    let totalBonus = 100 + parseFloat(troopBonus);
    let attackPower = (totalBonus * parseFloat(totalTroops) * unit) / 100;
    let highestCity = "-";

    if (attackPower > 1e21) {
      return { attackPower: "You can't gain that much troops", highestCity: "-" };
    }

    for (let i = cityDefensePower.length - 1; i >= 0; i--) {
      if (attackPower >= cityDefensePower[i].power) {
        highestCity = cityDefensePower[i].level;
        break;
      }
    }

    return { attackPower, highestCity };
  };

  useEffect(() => {
    if (totalTroops) {
      localStorage.setItem("striker", troopBonus);
    }
  }, [troopBonus, totalTroops]);

  const handleTroopBonusChange = (e) => {
    setTroopBonus(e.target.value);
  };

  const handleTotalTroopsChange = (e) => {
    setTotalTroops(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(Number(e.target.value));
  };

  const { attackPower, highestCity } = calculateAP();

  return (
    
      
      
        <div className="w-full h-full p-8 sm:p-2 md:p-5 bg-gray-900/60 text-white shadow-2xl rounded-t-lg border border-blue-500">
        




          <div className="flex flex-col justify-center h-full w-full ">
          <h2 className="text-xl font-bold text-blue-400 text-center mb-4">⚔️ Attack Power Calculator ⚔️</h2>

          <div className="mt-4">
            <label className="block text-blue-300 font-semibold">Your Striker (%):</label>
            <input
              type="number"
              value={troopBonus}
              onChange={handleTroopBonusChange}
              className="w-full p-3 mt-1 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-blue-300 font-semibold">Total Troops:</label>
            <div className=" gap-2 mt-1">
              <input
                type="number"
                value={totalTroops}
                onChange={handleTotalTroopsChange}
                className="w-full p-3 mt-1 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
              />
              </div>
              <select
                value={unit}
                onChange={handleUnitChange}
                className="w-full p-3 mt-1 bg-gray-700 border border-blue-500 rounded-lg focus:outline-none shadow-md text-white"
              >
                <option value={1}><span className="text-xs">Select</span></option>
                <option value={1e6}>M</option>
                <option value={1e9}>G</option>
                <option value={1e12}>T</option>
                <option value={1e15}>P</option>
              </select>
            </div>
          

          <div className="mt-6 text-lg font-bold bg-gray-900 p-6 rounded-lg text-blue-300 shadow-md text-center border-l-4 border-blue-500">
            Attack Power: {typeof attackPower === "string" ? attackPower : formatNumber(attackPower)} <br />
            Highest Attackable City Level: {highestCity}
          </div>
        </div>
        </div>
  );
};



export default AttackPowerCalculator;

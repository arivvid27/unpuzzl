import React from 'react';
import { behaviorData } from '../../data';
import BehaviorPieChart from '../BehaviorPieChart/BehaviorPieChart';
const BehaviorLog = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src="./logo.png" alt="logo" className="h-8 mr-2" />
        <h2 className="text-xl font-bold">Logged Behaviors</h2>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <span className="block text-gray-700">Total Logged Behaviors</span>
        <span className="text-lg font-bold">{behaviorData.reduce((acc, behavior) => acc + behavior.items, 0)}</span>
      </div>

      <div className="space-y-4 mb-4">
        {behaviorData.map((behavior, index) => (
          <div key={index} className="flex justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <span className="block font-semibold">{behavior.name}</span>
              <span className="text-gray-600">Change: {behavior.change}</span>
            </div>
            <div>
              <span className="block text-gray-700">{behavior.type}</span>
              <span className="text-gray-600">Count: {behavior.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">Behavior Distribution</h3>
        <BehaviorPieChart /> {/* Updated to reflect new pie chart component */}
      </div>
    </div>
  );
};

export default BehaviorLog;

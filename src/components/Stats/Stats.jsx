import { BsArrowUpShort } from 'react-icons/bs';
import { groupNumber } from '../../data';
import StatisticsChart from '../StatsChart/StatsChart';

const Statistics = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Overview Statistics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg shadow-inner">
        
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="mr-2 text-green-600">
            <BsArrowUpShort size={24} />
          </div>
          <div>
            <span className="block text-gray-700">Top Behavior This Month</span>
            <span className="font-semibold">Compliance</span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
          <span className="text-gray-700">Entries</span>
          <span className="text-lg font-bold">{groupNumber(57)}</span>
        </div>

        <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
          <span className="text-gray-700">Minutes Spent</span>
          <span className="text-lg font-bold">{groupNumber(45)} Min.</span>
        </div>

        <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
          <span className="text-gray-700">Daily Average</span>
          <span className="text-lg font-bold">{groupNumber(20)} Min.</span>
        </div>
      </div>

      <StatisticsChart />
    </div>
  );
};

export default Statistics;

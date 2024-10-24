import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Stats/Stats';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import your Sidebar
import { groupNumber } from '../../data';

const cardsData = [
  {
    title: "Total Logged Behaviors",
    change: 5,
    amount: 30,
  },
  {
    title: "Learning Milestones Achieved",
    change: 3,
    amount: 12,
  },
  {
    title: "Average Daily Engagement",
    change: 1,
    amount: 45,
  },
  {
    title: "Pending Observations",
    change: -2,
    amount: 8,
  },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Learning & Behavior Dashboard</h1>
            <div>
              <select className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300">
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
                  <span className={`font-medium ${card.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {card.change >= 0 ? `+${card.change}` : card.change}
                  </span>
                </div>

                <div className="text-3xl font-bold text-gray-900">
                  <span className="text-gray-600">{card.amount}</span>
                  <span>{card.title.includes("Average") ? " min" : ""}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col space-y-6">
          <Statistics />
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

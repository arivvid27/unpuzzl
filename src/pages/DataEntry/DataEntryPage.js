import React from 'react';
import DataEntry from '../../components/DataEntry/DataEntry';
import Sidebar from '../../components/Sidebar/Sidebar';

const DataEntryPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
      <div className="bg-gray-100 min-h-screen p-6">
        <DataEntry />
      </div>
    </div>
    </div>
    
  );
};

export default DataEntryPage;

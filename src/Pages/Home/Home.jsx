

import React, { useState } from 'react';
import InfoClient from '../../components/InfoClient/InfoClient';
import Footer from '../../components/Footer/Footer';
import MiddleBar from '../../components/MiddleBar/MiddleBar';
import DataTable from '../../components/DataTable/dataTable';
import Category from '../../components/Category/Category';
import Data from '../../Data'

const Home = () => {

  const [tableData, setTableData] = useState([]);
  const [tableId, setTableId] = useState(1);

  const handleNameClick = (name) => {
    const existingRow = tableData.find((row) => row.name === name);

    if (existingRow) {
      const updatedTableData = tableData.map((row) =>
        row.name === name ? { ...row, qty: row.qty + 1, total: (row.price || 1) * (row.qty + 1) } : row
      );
      setTableData(updatedTableData);
    } else {
  
      const selectedItem = Data.find((item) => item.name === name);

      if (selectedItem) {
        setTableData([
          ...tableData,
          {
            id: tableId,
            name,
            qty: 1,
            price: selectedItem.price || 0,
            total: selectedItem.price || 0,
          },
        ]);
        setTableId(tableId + 1);
      }
    }
  };


    

  const handleRemoveRow = (updatedTableData) => {
    setTableData(updatedTableData);
  };

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const handleSort = (column) => {
    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = tableData.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setTableData(sortedData);
    setSortConfig({ key: column, direction });
  };


  

  return (


    <div className='flex flex-row w-full gap-1'>

    <div className='flex flex-col h-screen w-1/3'>
     <div className='flex-grow'>
    <InfoClient/>


    <div className=''>
       <DataTable data={tableData} onRemoveRow={handleRemoveRow} handleSort={handleSort} />
      </div>


  </div>
  <Footer/>
</div>



        <div className='w-auto flex flex-col justify-center items-center'>
          <MiddleBar/>
        </div>
      

     
        <div className='w-4/6 h-3/5'>
        <Category onNameClick={handleNameClick}/>
      </div>


        </div>



  );
};

export default Home;

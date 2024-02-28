
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const DataTable = ({ data, onRemoveRow }) => {

  const [nextId, setNextId] = useState(1);
  const [columns, setColumns] = useState([
 
    { key: 'total', name: 'المجموع', width: 50, isVisible: true },
    { key: 'qty', name: 'العدد', width: 50, isVisible: true },
    { key: 'price', name: 'السعر', width: 50, isVisible: true },
    { key: 'type', name: 'التعبئة', width: 80, isVisible: true },
    { key: 'name', name: 'الماده', width: 150, isVisible: true },
    { key: 'id', name: 'ت', width: 50, isVisible: true },
  ]);

  // Sorting
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const handleSort = (column) => {
    let direction = 'asc';
    if (sortConfig.key === column && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: column, direction });
  };

  const sortedData = () => {
    let sortedData = [...data];
    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  };

    ////// editing 
  const handleCellEdit = (rowIndex, column, newValue) => {
    const updatedData = [...data];
    updatedData[rowIndex] = { ...updatedData[rowIndex], [column]: newValue };
    onRemoveRow(updatedData);
  };

  const handleToggleColumn = (index) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[index] = { ...newColumns[index], isVisible: !newColumns[index].isVisible };
      return newColumns;
    });
  };

  const [resizingColumn, setResizingColumn] = useState(null);
  const [initialResizeX, setInitialResizeX] = useState(null);

  const handleMouseDown = (index, e) => {
    setResizingColumn(index);
    setInitialResizeX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (resizingColumn !== null) {
      const newWidth = columns[resizingColumn].width + e.clientX - initialResizeX;
      if (newWidth > 20) {
        setColumns((prevColumns) => {
          const newColumns = [...prevColumns];
          newColumns[resizingColumn] = { ...newColumns[resizingColumn], width: newWidth };
          return newColumns;
        });
        setInitialResizeX(e.clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setResizingColumn(null);
  };

 useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizingColumn]);

  const handleRemoveRow = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
  
    const updatedDataWithNewIds = updatedData.map((row, index) => ({ ...row, id: index + 1 }));
    onRemoveRow(updatedDataWithNewIds);
  };

  // Calculate total
  const calculateTotal = () => {
    return data.reduce((total, row) => total + parseFloat(row.total || 0), 0);
  };

  const calculateDiscount = () => {
    const total = calculateTotal();
    const discount = total * 0.05;
    return Math.round(discount); 
  };


  return (

    <>
    <div className="container flex justify-end bg-gradient-to-r from-blue-300 to-purple-300 ml-1 h-96 overflow-auto rounded-xl">
    <div className="w-fit p-1">
      <table className=" bg-slate-100 border border-black w-full">
        <thead className="border border-black bg-blue-300">
          <tr>
            {columns.map(
              (column, index) =>
                column.isVisible && (
                  <th
                    key={column.key}
                    onClick={() => handleSort(column.key)}
                    className="p-2 border border-black cursor-pointer hover:bg-purple-300"
                    style={{ width: column.width }}
                  >
                    <div style={{ cursor: 'col-resize' }}
                      onMouseDown={(e) => handleMouseDown(index, e)}
                    >
                      {column.name}
                    </div>
                  </th>
                )
            )}
          </tr>
        </thead>


        <tbody>


          {sortedData().map((row, rowIndex) => (
             

            <tr key={row.id}>
                

              {columns.map(
                (column) =>
                  column.isVisible && (
                    <td key={column.key} className="p-2 border border-black text-center">
                      <div
                        contentEditable
                        onBlur={(e) =>
                          handleCellEdit(rowIndex, column.key, e.currentTarget.innerText)
                        }
                        dangerouslySetInnerHTML={{ __html: row[column.key] }}
                      />
                    </td>
                  )
              )}


              <td
                key="x"
                className="p-2 cursor-pointer text-center"
                onClick={() => handleRemoveRow(row.id)}
              >
                <RiDeleteBin6Line className='text-red-500'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-2">
        {columns.map(
          (column, index) =>
            index !== columns.length - 1 && (
              <div key={column.key} className="mr-2">
                <label>
                  <input
                    type="checkbox"
                    checked={column.isVisible}
                    onChange={() => handleToggleColumn(index)}
                  />
                  {column.name}
                </label>
              </div>
            )
        )}
      </div>
    </div>
    </div>

    <div className='flex items-center justify-center gap-4 p-1 m-1 bg-slate-100 rounded-xl'>
    <div className='flex flex-col justify-center items-center bg-blue-300 p-1 rounded-xl'>
        <p>مجموع بعد الخصم</p>
        <p>{calculateDiscount()}</p>
    </div>
    <div className='flex flex-col justify-center items-center bg-purple-300 p-1 rounded-xl'>
        <p>مجموع القائمة</p>
        <p>{calculateTotal()}</p>
    </div>
    
    </div>
    </>
  );
};

export default DataTable;

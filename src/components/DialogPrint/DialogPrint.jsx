import React, { useState } from 'react';

const DialogPrint = ({ openModal, setOpenModal }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={`dialog ${openModal ? 'flex' : 'hidden'} justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50`}>
      <div className='flex flex-col items-center w-96 bg-white p-6 rounded-md'>
        <div className='flex mb-4'>
          <select className='border p-2'>
            <option value='Type 1'>Type 1</option>
            <option value='Type 2'>Type 2</option>
          </select>
          <p className='mr-2'>نوع الورقة</p>
        </div>

        <div className='flex items-center mb-4'>
          <button onClick={handleIncrement} className='bg-gray-700 w-8 font-bold text-white p-2 rounded-md'>
            +
          </button>
          <button onClick={handleDecrement} className='bg-gray-700 w-8 font-bold text-white p-2 mx-2 rounded-md'>
            -
          </button>
          <p className='mr-2'>{count} عدد النسخ</p>
        </div>

        <div className='flex items-center mb-4'>
          <input type="checkbox" className='mr-2' />
          <p>طباعة</p>
        </div>

        <div className='flex justify-center w-full'>
          <button onClick={() => setOpenModal(false)} className='bg-red-500 text-white p-2 rounded-md mx-2'>
            خروج
          </button>
          <button onClick={() => setOpenModal(false)} className='bg-green-500 text-white p-2 rounded-md mx-2'>
            موافق
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogPrint;

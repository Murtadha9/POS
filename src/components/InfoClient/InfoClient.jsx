import React, { useEffect, useState } from 'react';
import { FaWarehouse } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { FaBarcode } from 'react-icons/fa6';
import { MdQuestionMark } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { PiNotebookBold } from 'react-icons/pi';
import QuastionMark from '../QuastionMark/QuastionMark';


const InfoClient = () => {




  const [currentTime, setCurrentTime] = useState(new Date());
  const [openModalQuastion , setOpenModalQuastion ]=useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US');
  const formattedDate = currentTime.toLocaleDateString('en-US');

  return (
    <div className='flex items-center justify-between w-full'>

      <div className='w-full '>

      <div className='flex items-center justify-evenly mt-2'>
          <button className='p-1 bg-red-500 text-white rounded-xl text-center'>خروج</button>
          <button onClick={() => {setOpenModalQuastion(true);}}>
            <MdQuestionMark size={30} className='bg-black text-white rounded-xl' />
            </button>
            {openModalQuastion && <QuastionMark openModal={openModalQuastion} setOpenModal={setOpenModalQuastion} />}
          <h1 className='p-1 bg-purple-400 text-white rounded-xl'>{formattedTime}</h1>
        </div>

        <div className='flex justify-around items-center p-2 m-2 rounded-xl bg-slate-100'>
          <p>{formattedDate}</p>
          <SlCalender  />
        </div>

        <div className='flex items-center justify-evenly m-2 p-1'>
          <div className='flex justify-around items-center w-1/2 p-2 mx-1 rounded-xl bg-slate-100'>
            <select className=' text-center bg-slate-100'>
              <option>دينار</option>
              <option>دولار</option>
            </select>
            <FaMoneyBill1Wave  />
          </div>

          <div className='flex justify-between items-center w-1/2 p-2 mx-1 rounded-xl bg-slate-100'>
            <p>12224</p>
            <PiNotebookBold />
          </div>
        </div>



        <div className='flex justify-around items-center p-2 m-2 rounded-xl bg-slate-100'>
          <h1>العام</h1>
          <FaMoneyBill1Wave  />
        </div>

      </div>

      <div className='w-full'>
        <div className='flex justify-around items-center rounded-xl p-2 m-2 bg-slate-100'>
          <h2 className='text-center pl-3 pr-3'>مخزن</h2>
          <FaWarehouse  />
        </div>
        <div className='flex justify-around items-center p-2 m-2 rounded-xl bg-slate-100'>
          <select className='text-center bg-slate-100'>
            <option>mr one</option>
            <option>mr two</option>
            <option>mr three</option>
          </select>
          <IoPersonSharp  />
        </div>
        <div className='flex justify-around items-center p-2 m-2 rounded-xl bg-slate-100'>
          <input className='text-center border rounded-md ' placeholder='رقم الهاتف' />
          <FaPhone  />
        </div>
        <div className='flex justify-around items-center p-2 m-2 rounded-xl bg-slate-100'>
          <input className='text-center border rounded-md ' placeholder='رمز الباركود' />
          <FaBarcode  />
        </div>
      </div>

    </div>
  );
};

export default InfoClient;

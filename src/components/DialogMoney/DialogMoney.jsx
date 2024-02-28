import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

import img250 from '../../assets/250.jpg';
import img500 from '../../assets/500.jpg';
import img1000 from '../../assets/1000.jpg';
import img5000 from '../../assets/5000.png';
import img10 from '../../assets/10.jpg';
import img25 from '../../assets/25.jpg';
import img50 from '../../assets/50.jpg';

import img1d from '../../assets/1d.jpg';
import img5d from '../../assets/5d.jpg';
import img10d from '../../assets/10d.jpg';
import img20d from '../../assets/20d.jpg';
import img50d from '../../assets/50d.jpg';
import img100d from '../../assets/100d.jpg';


const imgIQ=[
    {
        id:1,
        img:img250,
        value:250
    },
    {
        id:2,
        img:img500,
        value:500
    },
    {
        id:3,
        img:img1000,
        value:1000
    },
    {
        id:4,
        img:img5000,
        value:5000
    },
    {
        id:5,
        img:img10,
        value:10000
    },
    {
        id:6,
        img:img25,
        value:25000
    },
    {
        id:7,
        img:img50,
        value:50000
    },
]


const imgDollar=[
    {
        id:1,
        img:img1d,
        value:1
    },
    {
        id:2,
        img:img5d,
        value:5
    },
    {
        id:3,
        img:img10d,
        value:10
    },
    {
        id:4,
        img:img20d,
        value:20
    },
    {
        id:5,
        img:img50d,
        value:50
    },
    {
        id:6,
        img:img100d,
        value:100
    },
    
]



const DialogMoney = ({ openModal, setOpenModal }) => {
    const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }
  return (
    <div className={`dialog ${openModal ? 'flex' : 'hidden'} justify-center items-center`}>

    <div className='flex flex-col justify-center items-center w-2/4 h-4/5 bg-white pb-6 pl-6 pr-6 gap-4 rounded-md'>



    <div className='flex w-full items-center justify-center pb-4 '>
          <button
            className={`w-full h-10 ${activeTab === 'tab1' ? 'bg-gradient-to-r from-blue-300 to-purple-300 font-bold' : 'bg-slate-100'}`}
            onClick={() => handleTabChange('tab1')}
          >
            الدولار الامريكي 
          </button>
          <button
            className={`w-full h-10 ${activeTab === 'tab2' ? 'bg-gradient-to-r from-blue-300 to-purple-300 font-bold' : 'bg-slate-100'}`}
            onClick={() => handleTabChange('tab2')}
          >
             الدينار العراقي
          </button>
        </div>
           

        {activeTab === 'tab1' && (
            <>
            <div className="flex flex-wrap items-center justify-center h-1/3">
              {imgDollar.map((button) => (
             <button key={button.id} className='w-40 p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300'>
               <img src={button.img} alt="" className="w-full h-auto" />
            </button>
                 ))}
            </div>


                  <div className='flex gap-1 justify-center items-center pt-4'>
                          <button>
                              <MdCancel size={30} />
                          </button>
                          <input className='border' />
                          <p>المبلغ</p>
                      </div>

                      <hr />

                      <div className='flex items-center justify-between gap-4 bg-slate-100 rounded-xl p-2'>


                          <div className='flex gap-4 items-end justify-center bg-blue-300  rounded-xl w-64 pt-2 pb-2'>
                              <div>
                                  <p>دينار عراقي</p>
                              </div>


                              <div className='flex flex-col items-end'>
                                  <p> الباقي</p>
                                  <p>0</p>
                              </div>

                          </div>

                          <div className='flex gap-4 items-end justify-center bg-purple-300 rounded-xl w-64 pt-2 pb-2'>
                              <div>
                                  <p>دينار عراقي</p>
                              </div>


                              <div className='flex flex-col items-end'>
                                  <p>مجموع القائمة</p>
                                  <p>0</p>
                              </div>


                          </div>


                          <button className='w-40 bg-red-400 pt-2 pb-2 rounded-xl'  onClick={() => setOpenModal(false)}>خروج</button>
                      </div>
            </>
            )}


        {activeTab === 'tab2' && (
            
    <>
      <div className="flex flex-wrap items-center justify-center h-1/3">
        {imgIQ.map((button) => (
        <button key={button.id} className='w-40 p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300'>
            <img src={button.img} alt="" className="w-full h-auto" />
        </button>
              ))}
             </div>

                  <div className='flex gap-1 justify-center items-center pt-4'>
                          <button>
                              <MdCancel size={30} />
                          </button>
                          <input className='border' />
                          <p>المبلغ</p>
                      </div>

                      <hr />

                      <div className='flex items-center justify-between gap-4 bg-slate-100 rounded-xl p-2'>


                          <div className='flex gap-4 items-end justify-center bg-blue-300  rounded-xl w-64 pt-2 pb-2'>
                              <div>
                                  <p>دينار عراقي</p>
                              </div>


                              <div className='flex flex-col items-end'>
                                  <p> الباقي</p>
                                  <p>0</p>
                              </div>

                          </div>

                          <div className='flex gap-4 items-end justify-center bg-purple-300  rounded-xl w-64 pt-2 pb-2'>
                              <div>
                                  <p>دينار عراقي</p>
                              </div>


                              <div className='flex flex-col items-end'>
                                  <p>مجموع القائمة</p>
                                  <p>0</p>
                              </div>


                          </div>


                          <button className='w-40 bg-red-400 pt-2 pb-2 rounded-xl'  onClick={() => setOpenModal(false)}>خروج</button>
                      </div></>
      
      
        )}

    </div>
  </div>
  )
}

export default DialogMoney;

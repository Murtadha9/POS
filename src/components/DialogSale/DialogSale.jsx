


import React, { useState } from 'react'
import EnteryNo from '../EnteryNo/EnteryNo';


const DialogSale = ({ openModal, setOpenModal }) => {
    const [activeTab, setActiveTab] = useState('tab2');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
      }

  return (
    <div className={`dialog ${openModal ? 'flex' : 'hidden'} justify-center items-center`}>
      <div className='flex flex-col w-4/6 h-4/5 bg-white p-6 rounded-md'>


      <div className='flex w-full items-center justify-center pb-4 '>
          <button
            className={`w-full h-10 ${activeTab === 'tab1' ? 'bg-gradient-to-r from-blue-300 to-purple-300 font-bold' : 'bg-slate-100 '}`}
            onClick={() => handleTabChange('tab1')}
          >
           ارجاع البيع
          </button>
          <button
            className={`w-full h-10 ${activeTab === 'tab2' ? 'bg-gradient-to-r from-blue-300 to-purple-300 font-bold' : 'bg-slate-100 '}`}
            onClick={() => handleTabChange('tab2')}
          >
             بيع
          </button>
        </div>

        {activeTab === 'tab2' && (
            <>
            <div className='flex flex-row justify-evenly'>

<div>

    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>المجموع</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>نوع الخصم</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>%الخصم 5</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>المجموع بعد الخصم</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>الواصل</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>الباقي</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>الرصيد السابق</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>الرصيد الحالي</p>
    </div>
    <div className='flex gap-2 items-baseline'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>الملاحظة</p>
    </div>

   </div>


   <div className='flex flex-col w-4/12 items-center justify-center gap-2'>
    <EnteryNo/>
    <div className='flex gap-2'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>الهاتف</p>
    </div>
    <div className='flex gap-2'>
        <input type="text" className='p-2 bg-slate-300 rounded-xl mb-4' />
        <p>العنوان</p>
    </div>

    <div className='flex gap-1'>
        <button onClick={() => setOpenModal(false)} className='p-2 w-32 rounded-xl bg-black text-white'>خروج</button>
        <button className='p-2 w-32 rounded-xl bg-orange-500 text-white'>بطاقة دفع</button>
        <button className='p-2 w-32 rounded-xl bg-green-500 text-white'> حفظ</button>
    </div>
   </div>

   </div>
            </>
        )}

        

      </div>
    </div>
  )
}

export default DialogSale

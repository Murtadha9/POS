import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import DialogPrint from '../DialogPrint/DialogPrint';
import DialogSale from '../DialogSale/DialogSale';
import PayofMethod from '../PayofMethod/PayofMethod';





const Footer = () => {
    const [openModalprint , setOpenModalprint ]=useState(false);
    const [openModalsale , setOpenModalsale ]=useState(false);
    const [openModalMethod , setOpenModalMethod ]=useState(false);
  return (
    <div className='flex items-center justify-center gap-2 w-full mb-2'>
      
      
        <button className='text-center bg-red-500 size-20 rounded-bl-2xl '>
           <div className='flex flex-col items-center'>
            <MdCancel size={30} />
            <p className='text-white font-bold'>الغاء</p>
            </div>
        </button>

      

     
        <button className='text-center bg-slate-100 size-20 hover:bg-gradient-to-r from-blue-300 to-purple-300' onClick={() => {setOpenModalprint(true);}}>
            <div className='flex flex-col items-center'>
            <FiPrinter size={30} />
            <p className='font-bold'>طباعة</p>
            </div>
        </button>
        {openModalprint && <DialogPrint openModal={openModalprint} setOpenModal={setOpenModalprint} />}
     

      
        <button className='text-center  bg-slate-100 size-20 hover:bg-gradient-to-r from-blue-300 to-purple-300' onClick={() => {setOpenModalMethod(true);}}>
        <div className='flex flex-col items-center'>
        <FaCreditCard size={30} />
        <p className='font-bold'> طريقة الدفع</p>
        </div>
        </button>
        {openModalMethod && <PayofMethod openModal={openModalMethod} setOpenModal={setOpenModalMethod} />}
      

      
        <button className='text-center  bg-slate-100 size-20 hover:bg-gradient-to-r from-blue-300 to-purple-300 ' onClick={() => {setOpenModalsale(true);}}>
        <div className='flex flex-col items-center'>
        <IoReturnDownBackOutline  size={30}/>
        <p className='font-bold'>ارجاع بيع</p>
        </div>
        </button>
        {openModalsale && <DialogSale openModal={openModalsale} setOpenModal={setOpenModalsale} />}
        
      

    
        <button className='text-center bg-slate-100 size-20 rounded-br-2xl hover:bg-gradient-to-r from-blue-300 to-purple-300' onClick={() => {setOpenModalsale(true);}}>
        <div className='flex flex-col items-center'>
        <FaShoppingCart  size={30}/>
        <p className='font-bold'>بيع</p>
        </div>
        </button>
        {openModalsale && <DialogSale openModal={openModalsale} setOpenModal={setOpenModalsale} />}
     


    </div>

  )
}

export default Footer

import React, { useState } from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import DialogMoney from '../DialogMoney/DialogMoney';

const MiddleBar = () => {
    const [openModalMoney , setOpenModalMoney ]=useState(false);
  return (
    <div className='flex flex-col p-1 gap-3'>


        <button onClick={() => {setOpenModalMoney(true);}}>
              <FaMoneyBillWave className='w-10 h-10 text-green-500' />
          </button>
          {openModalMoney && <DialogMoney openModal={openModalMoney} setOpenModal={setOpenModalMoney} />}


          <button>
              <FaPercentage className='w-10 h-10 text-purple-400' />
          </button>

          <button>
              <FiRefreshCw className='w-10 h-10 text-blue-400' />
          </button>
      
    </div>
  )
}

export default MiddleBar

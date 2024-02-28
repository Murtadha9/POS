import React from 'react'

const PayofMethod = ({ openModal, setOpenModal }) => {
  return (
    <div className={`dialog ${openModal ? 'flex' : 'hidden'} justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50`}>
      <div className='flex flex-col items-center w-96 h-96 bg-white p-6 rounded-md'>
        

        <h1> Pay of Method</h1>
        
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
  )
}

export default PayofMethod

import React, { useState } from 'react';

const buttonData = [
  { id: 1, label: '7' },
  { id: 2, label: '8' },
  { id: 3, label: '9' },
  { id: 4, label: '0.75' },
  { id: 5, label: '4' },
  { id: 6, label: '5' },
  { id: 7, label: '6' },
  { id: 8, label: '0.5' },
  { id: 9, label: '1' },
  { id: 10, label: '2' },
  { id: 11, label: '3' },
  { id: 12, label: '0.25' },
  { id: 13, label: '.' },
  { id: 14, label: '0' },
  { id: 15, label: 'DEL' },
  { id: 16, label: 'ENT' },
];

const EnteryNo = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'DEL') {
      setInputValue(inputValue.slice(0, -1));
    } else if (label === 'ENT') {
      console.log('Entered value:', inputValue);
    } else {
      setInputValue(inputValue + label);
    }
  };

  return (
    <div className='flex flex-col justify-center'>
      <input
        type="text"
        className='p-2 bg-slate-300 rounded-xl mb-4'
        value={inputValue}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {buttonData.map((button) => (
          <button
            key={button.id}
            className="w-12 h-12 font-bold bg-slate-300 rounded-full"
            onClick={() => handleButtonClick(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnteryNo;

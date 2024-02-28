
import React, { useState } from 'react';
import Data from '../../Data'
import { FaHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Category = ({ onNameClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dataByCategory = Data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleNameClick = (name) => {
    onNameClick(name);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">

    <div className='flex items-center justify-center gap-2 p-1'>
         <IoMdAdd className='text-3xl font-extrabold bg-white rounded-md ' />
        <button className='bg-white p-2 w-32 rounded-xl'>قائمة زبون 1</button>
    </div>

    <div className='flex justify-end pb-6'>
    <button className='flex items-center justify-center gap-6 p-2 rounded-xl bg-blue-300 hover:bg-gradient-to-r from-blue-300 to-purple-300'>المفضلة <FaHeart className='text-red-500'/></button>
    </div>
  
  <div className='flex justify-end gap-2'>
    {Object.keys(dataByCategory).map((category) => (
      <button
        key={category}
        onClick={() => handleCategoryClick(category)}
        className={`cursor-pointer p-2 rounded-md ${selectedCategory === category ? 'bg-purple-400 text-white' : 'bg-gray-100'}`}
      >
        {category}
      </button>
    ))}
  </div>
  <hr className=' m-2 font-bold' />
  <hr className='font-bold' />

  <div >
  {selectedCategory && (
    <div className="flex flex-wrap items-start justify-end gap-4 mt-4">
        {dataByCategory[selectedCategory].map((name) => (
          <button
            key={name}
            onClick={() => handleNameClick(name)}
            className="cursor-pointer bg-gradient-to-r from-blue-400 to-purple-400 text-white py-2 px-4 rounded-md mb-2 shadow-md shadow-slate-100"
          >
            {name}
          </button>
        ))}
     
    </div>
  )}
  </div>
</div>

  );
};

export default Category;

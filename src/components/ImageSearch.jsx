import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();  
    searchText(text)
  }

  return (
    <div className='max-w-sm overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input type="text" placeholder='Search Image Term...' onChange={e => setText(e.target.value)} className='appearance-none bg-transparent w-full border-none text-gray-700 outline-none mr-3 py-1 px-2 leading-tight focus:outline-none' />
          <button className='flex bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded cursor-pointer' type='submit'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch
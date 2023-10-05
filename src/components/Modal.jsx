import React from 'react';
import { tabAction } from '../app/slices/currentTabSlice';
import { useDispatch, useSelector } from "react-redux"; 

const Modal = () => {

    const modal = useSelector((state) => state.currentTabSlice.modal);
    const dispatch = useDispatch();

  return (
    <div className={modal === false ? 'text-white hidden lg:hidden h-screen bg-black min-w-full top-0 fixed left-0' : 'text-white lg:hidden h-screen bg-black min-w-full top-0 fixed left-0'}>
        <h1 className='text-white'>Kashif</h1>
    </div>
  )
}

export default Modal;
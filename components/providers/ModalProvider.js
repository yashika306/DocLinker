"use client";
import React, { useEffect, useState } from 'react'
import SettingsModel from '../modals/SettingsModel';

const ModalProvider = () => {
    const [isMounted , setIsMounted] = useState(false); 
    useEffect(() =>{
        setIsMounted(true);
    }, []);
    
    if (!isMounted){
        return null;
    } 
    return (
    <>
    <SettingsModel/>
    </>
  )
}

export default ModalProvider
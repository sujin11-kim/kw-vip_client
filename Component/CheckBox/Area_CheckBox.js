import React,{useEffect,useRef,useState} from 'react';
import SearchBar from '../Search/Search.js';
import './CheckBox.css'


function Area_CheckBox(){
    const onBusiness=async()=>{

    }
    return(
        
        <div className='window'>
            <div className='title'>상권분석</div>
            <SearchBar></SearchBar>
        </div>

        
    )
}

export default Area_CheckBox;
import React, { useEffect } from 'react';
import './displayList.css'
import {useDispatch, useSelector} from 'react-redux'
import { displayList } from './redux/displaylist/action';


const DisplayList = () =>{
    const dispatch = useDispatch()
    const listData =  useSelector((state) => state.displayList.successData)
    useEffect(() => {
        dispatch(displayList())
    },[])
    return(
        <div className='app'>
            <h1 className='Header'>{listData}</h1>
        </div>
    )

}

export default DisplayList
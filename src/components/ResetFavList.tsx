import { resetFavList } from '@/store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const ResetList = () => {
    const dispatch = useDispatch()
    const handleResetCart = () => { 
        const confirmreset = window.confirm('Are you sure you want to reset ?')
        if(confirmreset){
            dispatch(resetFavList())
        }
    }
  return (
    <button onClick={handleResetCart} className='w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-amazon_yellow duration-300
    '>Reset Favorite List</button>
  )
}

export default ResetList


import { resetCart } from '@/store/nextSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const SuccessPage = () => {
    const disptach =useDispatch()
    
  return (
    <div className='flex flex-col gap-2 items-center justify-center py-20'>
        <h1 className='text-2xl font-semibold'>Thank You for Shopping</h1>
        <Link href={'/'} onClick={()=>disptach(resetCart())}>
            <p className='underline  hover:text-blue-600 duration-100'>Countibue Shopping</p>
        </Link>
    </div>
  )
}

export default SuccessPage
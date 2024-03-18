import React, { ReactElement } from 'react'
import Header from './header/Header'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'

interface Props {
    children: ReactElement;
}

const RootsLayout = ({children}:Props) => {
  return (
    <>
    <Header/>
    <BottomHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default RootsLayout
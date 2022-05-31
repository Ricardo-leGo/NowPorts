import React, { FC } from 'react'
import HomeComponent from '../../Components/HomeComponent/index';
import HomeProvider from '../../Context/Home';

type Props = {}

const HomePage:FC = (props: Props) => {
  return (
    <>
    <HomeProvider >
        <HomeComponent/>
    </HomeProvider>


    </>
  )
}

export default HomePage
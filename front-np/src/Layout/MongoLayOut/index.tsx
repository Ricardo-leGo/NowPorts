import { Space } from 'antd'
import Column from 'antd/lib/table/Column'
import React, { PropsWithChildren } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

type Props = {}

const LayoutMongo = ({children}: PropsWithChildren<{}>) => {
  return (
    <Space direction="vertical" size="middle" style={
        { 
            display: 'flex',
            flexFlow:'column wrap'

        }}
        >
    <Header/>
          {children}
    <Footer/>
      </Space>
  )
}

export default LayoutMongo
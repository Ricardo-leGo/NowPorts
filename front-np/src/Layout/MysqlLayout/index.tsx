import { Space } from 'antd'
import React, { PropsWithChildren } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

type Props = {}

function LayoutMysql({children}:PropsWithChildren<{}>)  {
  return (
    <Space direction="vertical" size="middle" style={
        { 
            display: 'flex',

        }}
        >    <Header/>
      {children}
    <Footer/>
    </Space>  )
}

export default LayoutMysql
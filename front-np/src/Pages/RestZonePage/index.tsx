import React from 'react'
import MysqlHomeComponent from '../../Components/MysqlComponent'
import MysqlProvider from '../../Context/Mysql'
import LayoutMysql from '../../Layout/MysqlLayout'

type Props = {}

const RestPage = (props: Props) => {
  return (

    <MysqlProvider>
        <LayoutMysql>
            <MysqlHomeComponent/>
        </LayoutMysql>
  </MysqlProvider>

  )
}

export default RestPage
import { Slider, Space } from 'antd';
import React, { useContext, useState } from 'react'
import { MysqlContext } from '../../../Context/Mysql';
import LayoutMysql from '../../../Layout/MysqlLayout';
import Details from '../DetailsUser/indes';
import EachUser from '../EachUser';
import styles from './../styles.module.css';
import { SliderMarks } from "antd/lib/slider";

type Props = {}

interface ctx{
    marks:SliderMarks,
    Abc:{[key:number]:string}
}
const AddUserToDiary = (props: Props) => {

    const ctx  =  useContext(MysqlContext);
    
    const {marks, Abc} = ctx as ctx;    
    const formatter = (value: number) => `${Abc[value]}`;
    
    

   return (
        <>
        
            <h1>Agenda</h1>
    
    
            <Space direction="vertical" className={styles.containerDirary}>
                <div className={styles.containerDetails}>
                    <Details/>
                </div>
                <div className={styles.ContainerUsers}>

                    <div className={styles.contentEachUser}>
                    <EachUser/>
                    </div>

                    <div className={styles.containerSlide}>
                    <Slider 
                    vertical 
                    range  
                    min={1}
                    dots
                    reverse
                    max={26}
                    marks={marks} 
                    tipFormatter={formatter}
                    defaultValue={[1, 26]}  

                    />
                    </div>
    
                </div>

            </Space>
    
        </>
    
      )
    
}


export default AddUserToDiary
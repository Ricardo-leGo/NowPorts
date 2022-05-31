import React, { useContext, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles  from './styles.module.css';
import RegistroComponent from './Registro/index';
import { HomeContext } from '../../Context/Home/index';
import Login from './Login/index';
import { Switch } from 'antd';



type Props = {}

const HomeComponent = (props: Props) => {

        const ctx:any = useContext(HomeContext);
        const {
          isLoginPage,
          setIsLoginPageFunc,
        } = ctx;
        const [base, setbase] = useState('Registro');

        const onChange = (checked: boolean) => {
          console.log(`switch to ${checked? "Login":'Regisro' }`);

          setbase(!checked? "Login":'Regisro') 
          setIsLoginPageFunc(!checked);
        };
  return (
    <>
    <Header/>
        <>
            <div className={styles.containerRegistros}>

                    <h1 className={styles.titleHome} style={{display:"flex", textAlign:"center", justifyContent:"center"}}> 
                    Agenda cool {base}
                    <div style={{width:"5rem", marginLeft:"1rem"}}>
                    <Switch checkedChildren="Registro" unCheckedChildren="Login" size='small' className={styles.switchcontroll} defaultChecked onChange={onChange} />
                    </div>
                     </h1>

                <div className={styles.contentForm}>
                  
                {
                    !isLoginPage ?
                <RegistroComponent/>:
                <Login/>
                }
                  </div>

            </div>
        </>
    <Footer/>
    </>
  )
}

export default HomeComponent
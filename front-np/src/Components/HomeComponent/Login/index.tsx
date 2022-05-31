import React, { useContext, useState } from 'react';
import styles from './../styles.module.css';
import { Form, Input, Button, Switch} from 'antd';
import { HomeContext } from '../../../Context/Home';

type Props = {}
const msg = "*Campo requerido!";

function Login({}: Props) {
    const ctx:any = useContext( HomeContext );

    const {LoginSelect} = ctx;

    const [base, setbase] = useState('Mysql');
    const onFinish = (values: any) => LoginSelect(base, values  )
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      const onChange = (checked: boolean) => {
        console.log(`switch to ${checked? 'Mysql':"mongodb" }`);
        setbase(checked? 'Mysql':"mongodb") 
      };
  return (

    <>
        <div className={styles.Sw}>
            <h1 style={{  textAlign:"center"}}> Login {base}</h1>

        <div className={styles.swcontainer} >
        <Switch checkedChildren="Mysql" unCheckedChildren="Mongodb" defaultChecked onChange={onChange} />       
         </div>


        </div>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Correo"
      name="Correo"
      rules={[{ required: true, message: msg }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Contraseña"
      name="Pass"
      rules={[{ required: true, message: msg }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form.Item>

    </Form>  
    </>

    )
}

export default Login
import React, { FC, useContext, useState } from 'react'
import { Form, Input, Button, Switch} from 'antd';
import styles from './../styles.module.css';
import { HomeContext } from '../../../Context/Home/index';
type Props = {}


const msg = "*Campo requerido!";
const minchar:number= 4;
const RegistroComponent= (props: Props) => {

  const ctx:any = useContext( HomeContext );
  const {RegistroSelect} = ctx;
  const [base, setbase] = useState('Mysql');

    const onFinish = (values: any) => RegistroSelect( base, values  )

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
            <h1 style={{  textAlign:"center"}}> Registro con {base}</h1>

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
      label="Nombre"
      name="username"
      rules={[{ required: true, message: msg }]}
    >
      <Input />
    </Form.Item>
<br/>
<br/>
    <Form.Item
      label="Apellidos"
      name="Lastname"
      rules={[{ required: true, message: msg }]}
    >
      <Input />
    </Form.Item>
<br/>
<br/>

<Form.Item
      label="Correo"
      name="Correo"
      rules={[{ required: true, message: msg }]}
    >
      <Input />
    </Form.Item>
<br/>
<br/>

    <Form.Item
      label="Area"
      name="CodeArea"
      rules={[{ required: true, message: msg }]}
    >
      <Input />
    </Form.Item>
<br/>
<br/>

<Form.Item
      label="Teléfono"
      name="Phone"
      rules={[{ required: true, message:msg }]}
    >
      <Input />
    </Form.Item>
<br/>
<br/>

<Form.Item
      label="Cp"
      name="CP"
      rules={[{ required: true, message:msg }]}
    >
      <Input />
    </Form.Item>
<br/>
<br/>


    <Form.Item
      label="Password"
      name="Pass"
      rules={[{ required: true, message:msg }]}
    >
      <Input.Password />
    </Form.Item>

    <br/>
<br/>

    <Form.Item
      label="Confirma tu password"
      name="ConfirmPass"
      rules={[{ required: true, message:msg }]}
    >
      <Input.Password />
    </Form.Item>
    <br/>
<br/>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form.Item>
  </Form>  
      </>

  )
}

export default RegistroComponent
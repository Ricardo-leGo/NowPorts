import React, { useState } from 'react';
import { Collapse, Select, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import type { ExpandIconPosition } from 'antd/lib/collapse/Collapse';


const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
type Props = {}


const EachHeader:React.FC = () => <h1>1</h1>

const EachUser = (props: Props) => {

    const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('left');

    const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
      setExpandIconPosition(newExpandIconPosition);
    };
  
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    const genExtra = () => (
        <SettingOutlined
          onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
          }}
        />
      );


  const StyleHeader = {
    width:"100%",
    backgroundColor:"red"
  }


  return (
      <Space style={{height:'100%', width:'100%' ,border:'solid olive', display:'flex', justifyContent:"center"}}>
            <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        ghost
        accordion
        expandIconPosition={expandIconPosition}
      >
        <Panel header="This is panel header 1" key={1} extra={genExtra()} style={StyleHeader}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" key={2} extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" key={3} extra={genExtra()}>
          <div>{text}</div>
        </Panel>
      </Collapse>
      </Space>
  )
}

export default EachUser
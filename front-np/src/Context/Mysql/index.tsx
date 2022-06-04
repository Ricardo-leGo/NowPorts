import { SliderMarks } from "antd/lib/slider";
import React, { createContext, PropsWithChildren, useEffect } from "react";


    export const MysqlContext = createContext({});


    const MysqlProvider = ({children}:PropsWithChildren<{}>) =>{

        const sayhelloMysql = () => {}
        const Abc = { 1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"I",10:"J",11:"K",12:"L",13:"M",14:"N",15:"O",16:"P",17:"Q",18:"R",19:"S",20:"T",21:"U",22:"V",23:"W",24:"X",25:"Y",26:"Z"};
        const marks: SliderMarks = {
            1:{label: <strong>A</strong>  },
            2:{label: <strong>B</strong>  },
            3:{label: <strong>C</strong>  },
            4:{label: <strong>D</strong>  },
            5:{label: <strong>E</strong>  },
            6:{label: <strong>F</strong>  },
            7:{label: <strong>G</strong>  },
            8:{label: <strong>H</strong>  },
            9:{label: <strong>I</strong>  },
            10:{label:<strong>J</strong> },
            11:{label:<strong>K</strong> },
            12:{label:<strong>L</strong> },
            13:{label:<strong>M</strong> },
            14:{label:<strong>N</strong> },
            15:{label:<strong>O</strong> },
            16:{label:<strong>P</strong> },
            17:{label:<strong>Q</strong> },
            18:{label:<strong>R</strong> },
            19:{label:<strong>S</strong> },
            20:{label:<strong>T</strong> },
            21:{label:<strong>U</strong> },
            22:{label:<strong>V</strong> },
            23:{label:<strong>W</strong> },
            24:{label:<strong>X</strong> },
            25:{label:<strong>Y</strong> },
            26:{label:<strong>Z</strong> },
          };

        const state= {
            sayhelloMysql,
            marks,
            Abc
        };



        

        return (
        <MysqlContext.Provider value={state}>
            {children}
        </MysqlContext.Provider>
        )
    }

export default MysqlProvider;
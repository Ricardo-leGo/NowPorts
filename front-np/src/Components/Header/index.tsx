import React from 'react'
import { Space } from 'antd'
import { Link } from 'react-router-dom'
import { EachLink, HeaderStyled } from '../Commons'
import { NavBar } from '../HomeComponent/constants'

type Props = {}


const Header = (props: Props) => {
  return (
      <HeaderStyled>
          {

                NavBar && NavBar.map( (el,i) =>(
                <EachLink key={i} href={el.path}>{el.name}</EachLink>

                ))
            }
      
      </HeaderStyled>
  )
}

export default Header
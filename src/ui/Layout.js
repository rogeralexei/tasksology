import React from 'react'
import { SideBar } from './components/Sidebar'
import styled from 'styled-components'

export const Layout=({children})=>{
  return (
    <Container>
      <SideBar/>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background: hsla(0, 0%, 100%, 1);
  background: linear-gradient(135deg, hsla(0, 0%, 100%, 1) 51%, hsla(211, 100%, 90%, 1) 100%);
  background: -moz-linear-gradient(135deg, hsla(0, 0%, 100%, 1) 51%, hsla(211, 100%, 90%, 1) 100%);
  background: -webkit-linear-gradient(135deg, hsla(0, 0%, 100%, 1) 51%, hsla(211, 100%, 90%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffffff", endColorstr="#cce5ff", GradientType=1 );
`;


const Content=styled.div`
  margin-left: 300px;
  padding: 20px 40px;
  height: 100vh;
  box-sizing: border-box;
`

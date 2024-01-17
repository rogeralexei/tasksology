import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';

const links=[
  {
    icon: HomeIcon,
    label: "Home",
    route: routes.home
  },
  {
    icon: AssignmentIcon,
    label: "Tasks",
    route: routes.tasks
  }
]

export const SideBar=()=>{
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>Tasksology</Logo>
      <Links>
      {links.map((link, index) => (
          <LinkWrapper key={index} onClick={() => navigate(link.route)}>
            <link.icon/>
            <Link>{link.label}</Link>
          </LinkWrapper>
        ))}
      </Links>
    </Container>
  )
}

const Container=styled.div`
  background-color: #f8fcfb;
  width: 260px;
  padding: 25px 20px;
  border-right: 1px solid #EBEBEB;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Logo=styled.div`
  font-size: 45px;
  font-family: "Poppins";
  letter-spacing: -3px;
  font-weight: 600;
`

const Links=styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 300;
`

const LinkWrapper=styled.div`
display: flex;
gap: 20px;
align-items: center;
padding: 10px;
border-radius: 10px;

&:hover{
    cursor: pointer;
    background-color: #EBEBEB;
  }
`

const Link=styled.div`
  font-family: "Poppins";
  font-size: 22px;
`
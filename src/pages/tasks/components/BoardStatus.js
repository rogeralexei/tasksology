import React from 'react'
import styled from 'styled-components'
import { textStyles } from '../../../ui'

export const BoardStatus=({color,title,children})=>{
  return (
    <BoardContainer color={color}>
        <Title >{title}</Title>
        <Content>
        {children}
        </Content>
    </BoardContainer>
  )
}

const BoardContainer=styled.div`
    background-color: ${(props)=>props.color};
    height: auto;
    padding: 20px;
    border-radius: 8px;
    overflow-y: scroll;
`

const Title=styled.div`
    ${textStyles.title.h3}
    color: ${(props)=>props.color};
`

const Content=styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
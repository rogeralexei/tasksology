import React, { useState } from 'react'
import { Button, Layout, colors } from '../../ui'
import styled from 'styled-components'
import { BoardStatus } from './components/BoardStatus';
import { BoardCard } from './components/BoardCard';
import { TaskModal } from './components/TaskModal';
import { TaskForm } from './components/TaskForm';
import { useSelector } from 'react-redux';

export const Tasks=()=>{
    const currentDate = new Date().toDateString();
    const [openModal, setOpenModal]=useState(false)
    const tasks = useSelector((state) => state.tasks.tasks);
    
    const handleClose=()=>{
        setOpenModal(false)
    }

  return (
    <Layout>
        <Header>
            <BoardName>Control Risks</BoardName>
            <TodaysDate>{currentDate}</TodaysDate>
            <Button variant="green" onClick={()=>setOpenModal(true)}>Create Task</Button>
        </Header>
        <Board>
            <BoardStatus color={colors.pending} title={"Pending"}>
                {tasks?.filter(task=>task.status==="Pending")?.map((task)=>{
                    return <BoardCard key={task._id} task={task}
                    />
                })}
            </BoardStatus>
            <BoardStatus color={colors.inProcess} title={"In Process"}>
                 {tasks?.filter(task=>task.status==="In process")?.map((task)=>{
                    return <BoardCard key={task._id} 
                    task={task}
                    />
                })}
            </BoardStatus>
            <BoardStatus color={colors.success} title={"Completed"}>
                {tasks?.filter(task=>task.status==="Completed")?.map((task)=>{
                    return <BoardCard key={task._id} 
                    task={task}
                    />
                })}
            </BoardStatus>
        </Board>
        <TaskModal open={openModal} handleClose={handleClose}>
            <TaskForm handleClose={handleClose}/>
        </TaskModal>
    </Layout>
  )
}

const Header=styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

const BoardName=styled.div`
    font-size: 24px;
    font-family: "Poppins";
`

const TodaysDate=styled.div`
    font-size: 16px;
    color: ${colors.blue};
`

const Board=styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 60px;
    height: 80vh;
`


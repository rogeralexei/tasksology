import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../ui'
import { TaskModal } from './TaskModal'
import { TaskForm } from './TaskForm'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask, getAllTasks } from '../../../api/tasks'
import { toast } from 'react-toastify'
import { CircularProgress } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setTasks } from '../../../redux/actions/tasksActions'

const assignColor=(priority=>{
    switch(priority){
        case "Low":
            return colors.success
        case "Medium":
            return colors.inProcess
        case "High":
            return colors.pending
        default:
            return colors.blue
    }
})


export const BoardCard=({task})=>{
    const dispatch=useDispatch()
    const [openModal, setOpenModal]=useState(false)
    const [isDeletionLoading,setIsDeletionLoading]=useState(false)

    const handleClose=()=>{
        setOpenModal(false)
    }

    const handleDelete=async (e)=>{
        e.stopPropagation();
        try{
            setIsDeletionLoading(true)
            await deleteTask(task?._id)
            toast.success("Task deleted successfully.")
            const updatedTasks = await getAllTasks();
            dispatch(setTasks(updatedTasks));
        }catch(error){
            toast.error("There was a problem deleting the task.")
        }finally{
            setIsDeletionLoading(false)
        }
    }

  return (
    <>
    <BoardCardContainer onClick={()=>setOpenModal(true)}>
        <CardTitle>{task?.title}</CardTitle>
        <CardDescription>{task?.description}</CardDescription>
        <CardBottom>
        <CardPriority color={assignColor(task?.priority)}>{task?.priority}</CardPriority>
        <DeleteButton onClick={handleDelete}>
            {isDeletionLoading? <CircularProgress size={20} style={{'color': 'white'}}/>:<DeleteIcon fontSize='small'/>}
        </DeleteButton>
        </CardBottom>
    </BoardCardContainer>
    <TaskModal open={openModal} handleClose={handleClose}>
        <TaskForm task={task} handleClose={handleClose}/>
    </TaskModal>
    </>
  )
}

const BoardCardContainer=styled.div`
    background-color: ${colors.white};
    padding: 15px;
    border-radius: 10px;
    min-width: 200px;

    &:hover{
        cursor: pointer;
    }
`

const CardTitle=styled.div`
    font-size: 20px;
    font-family: "Poppins";
    font-weight: 600;
`

const CardDescription=styled.div`
    font-size: 14px;
    font-family: "Poppins";
    font-weight: 400;
`

const CardPriority=styled.div`
    font-size: 12px;
    font-family: "Poppins";
    font-weight: 400;
    background-color: ${(props)=>props.color};
    display: inline-block;
    padding: 10px;
    margin-top: 20px;
    border-radius: 8px;
    color: ${colors.black}
`

const CardBottom=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const DeleteButton=styled.div`
    background-color: ${colors.pending};
    color: ${colors.white};
    padding: 5px;
    border-radius: 10px;
`
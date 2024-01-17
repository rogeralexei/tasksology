import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../../ui';
import { createATask, editTask, getAllTasks } from '../../../api/tasks';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../../redux/actions/tasksActions';

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    priority: Yup.string().required('Priority is required'),
    status: Yup.string().required('Status is required'),
  });

export const TaskForm = ({task, handleClose}) => {
    const dispatch=useDispatch()
    const [isLoading, setIsLoading]=useState(false)

    const handleTask = async (values) => {
        try {
          setIsLoading(true)
          if (task) {
            await editTask(task._id, values);
            toast.success("Task edited successfully.");
          } else {
            await createATask(values);
            toast.success("Task created successfully.");
          }

          const updatedTasks = await getAllTasks();
          dispatch(setTasks(updatedTasks));

        } catch (error) {
          console.error("Error handling task:", error);
          toast.error("An error occurred while handling the task.");
        }finally{
          setIsLoading(false)
        }
      };

    const onSubmit = async (values) => {
        await handleTask(values)
        handleClose?.()
    };   

  console.log(task)

  const initialValues = task
    ? {
        title: task.title || '',
        description: task.description || '',
        priority: task.priority || '',
        status: task.status || '',
      }
    : {
        title: '',
        description: '',
        priority: '',
        status: '',
    };

  const priorityOptions = ['High', 'Medium', 'Low'];
  const statusOptions = ['Pending', 'In process', 'Completed'];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <StyledForm>
          <FormGroup>
            <InputLabel htmlFor="title">Title:</InputLabel>
            <Field
              as={TextField}
              type="text"
              id="title"
              name="title"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="title" component="span" />
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="description">Description:</InputLabel>
            <Field
              as={TextField}
              id="description"
              name="description"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              InputProps={{ classes: { inputMultiline: 'MuiInputBase-inputMultiline' } }}
            />
            <ErrorMessage name="description" component="span" />
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="priority">Priority:</InputLabel>
            <Field
              as={Select}
              id="priority"
              name="priority"
              variant="outlined"
              fullWidth
            >
              <MenuItem value="" disabled>
                Select Priority
              </MenuItem>
              {priorityOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Field>
            <ErrorMessage name="priority" component="span" />
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="status">Status:</InputLabel>
            <Field
              as={Select}
              id="status"
              name="status"
              variant="outlined"
              fullWidth
            >
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Field>
            <ErrorMessage name="status" component="span" />
          </FormGroup>


              <Button variant="green" type="submit">
                {isLoading? <CircularProgress size={16} style={{color: "white"}}/> : task ? "Edit" : "Create"}
              </Button>
        </StyledForm>
      )}
    </Formik>
  );
}

const StyledForm = styled(Form)`
  max-width: 400px;
  margin: auto;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .MuiFormControl-root {
    width: 100%;
  }

  div {
    color: black;
    font-size: 14px;
    margin-top: 5px;
  }

  span {
    color: red;
    font-size: 14px;
  }
`;

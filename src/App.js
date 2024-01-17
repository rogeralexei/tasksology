import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { routes } from "./routes";
import { Tasks } from "./pages/tasks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTasks } from "./api/tasks";
import { setTasks } from "./redux/actions/tasksActions";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const App=()=>{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTasks = await getAllTasks();
        dispatch(setTasks(allTasks));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      {loading ? (
        <LoaderContainer>
          <CircularProgress/>
        </LoaderContainer>
      ) : (
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.tasks} element={<Tasks />} />
        </Routes>
      )}
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}

const LoaderContainer=styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;

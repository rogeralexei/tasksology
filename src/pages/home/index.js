import React, { useEffect, useState } from 'react'
import { Layout, textStyles } from '../../ui'
import styled from 'styled-components'
import { BoardCard } from '../tasks/components/BoardCard'
import { CircularProgressWithLabel } from '../../ui/components/CircularProgressWithLabel'
import { useSelector } from 'react-redux'

export const Home=()=>{
  const [pendingTasks, setPendingTasks] = useState([]);
  const [percentagePending, setPercentagePending] = useState(0);
  const [percentageInProcess, setPercentageInProcess] = useState(0);
  const [percentageCompleted, setPercentageCompleted] = useState(0);
  const tasks = useSelector((state) => state.tasks.tasks);
  

  useEffect(()=>{
    
    const pendingTasks = tasks?.filter(task => task.status === "Pending");
    const inProcessTasks = tasks?.filter(task => task.status === "In process");
    const completedTasks = tasks?.filter(task => task.status === "Completed");
  
    const totalTasks = tasks?.length;
  
    setPendingTasks(pendingTasks);
  
    setPercentagePending((pendingTasks.length / totalTasks) * 100);
    setPercentageInProcess((inProcessTasks.length / totalTasks) * 100);
    setPercentageCompleted((completedTasks.length / totalTasks) * 100);

  },[tasks])
  
  return (
    <Layout>
        <WelcomeMessage>
          <Header>Welcome,</Header>
          <SubText>John Doe</SubText>
        </WelcomeMessage>
        <PendingTasks>
          <Title>Pending Tasks</Title>
          <PendingCardsWrapper>
          {pendingTasks?.map((task)=>{
              return <BoardCard key={task._id} task={task}/>
          })}
          </PendingCardsWrapper>
        </PendingTasks>
        <OverviewWrapper>
          <Title>Overview</Title>
          <StatCardsWrapper>
            <StatCard>
              <StatCardTitle>Pending Tasks</StatCardTitle>
              <CircularProgressWithLabel value={percentagePending || 0} />
            </StatCard>
            <StatCard>
              <StatCardTitle>
                In Process Tasks
              </StatCardTitle>
              <CircularProgressWithLabel value={percentageInProcess || 0} />
            </StatCard>
            <StatCard>
              <StatCardTitle>
                Completed Tasks
              </StatCardTitle>
              <CircularProgressWithLabel value={percentageCompleted || 0} />
            </StatCard>
          </StatCardsWrapper>
        </OverviewWrapper>
    </Layout>
  )
}

const WelcomeMessage=styled.div`
`

const Header=styled.div`
  font-size: 60px;
  font-family: "Poppins";
  font-weight: 600;
`

const SubText=styled.div`
    font-size: 40px;
    font-family: "Inter";
    font-weight: 200;
`

const OverviewWrapper=styled.div`
  margin-top: 40px;
`

const Title=styled.div`
    font-size: 24px;
    font-family: "Inter";
    font-weight: 600;
    margin-bottom: 16px;
`

const StatCardsWrapper=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`

const StatCard=styled.div`
  background: rgba( 3, 72, 185, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
  backdrop-filter: blur( 6.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 20px 40px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PendingTasks=styled.div`
  margin-top: 40px;
`

const PendingCardsWrapper=styled.div`
  background: rgba( 3, 72, 185, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
  backdrop-filter: blur( 6.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 20px;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  min-height: 140px;
`

const StatCardTitle=styled.div`
  ${textStyles.title.h3}
`
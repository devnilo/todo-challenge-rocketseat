import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { useState } from "react";

import './styles/global.css'

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function createTask(taskTitle: string) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    }])
  }

  return (
    <>
      <Header onAddTask={createTask} />
      <Tasks tasks={tasks} />
    </>
  )
}


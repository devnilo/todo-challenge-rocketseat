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

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks);
  }

  function toggleTask(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task;
    })

    setTasks(newTasks);
  }

  return (
    <>
      <Header
        onAddTask={createTask}
      />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleTask}
      />
    </>
  )
}


import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface typeUseTodo {
  tasks: string[];
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
}

const useTodo = create<typeUseTodo>()(
  persist(
    (set) => ({
      tasks:[],
      addTask: (task) => 
      set((state) => ({
        tasks:[...state.tasks , task]
      })),
      deleteTask: (index) => 
      set((state) => ({
          tasks:state.tasks.filter((_,id) => id !== index)
      }))
    }),
    {
      name:"date-todo"
    } 
  )
)

export default useTodo

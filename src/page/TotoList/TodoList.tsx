import { useState } from "react";
import useTodo from "../../store/useTodoStore";
import Contener from "./Styled/Contener";
import Box from "./Styled/Box";
import Title from "./Styled/Title";
import Items from "./Styled/Items";
import Input from "./Styled/Input";
import ButtonAdd from "./Styled/ButtonAdd";
import Tasks from "./Styled/Tasks";
import Task from "./Styled/Task";
import Bill from "./Styled/Bill";
import Delete from "./Styled/Delete";

const TodoList = () => {
  const [task, setTask] = useState("");
  //   const [items, setItems] = useState<string[]>([]);
  const { addTask, deleteTask, tasks } = useTodo();

  const handeleTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };
  //   const deleteTask = (index: number) => {
  //     const newtask = items.filter((_, id) => id !== index);
  //     setItems(newtask);
  //   };

  return (
    <div>
      <Contener>
        <Box>
          <Title>TodoList</Title>
          <Items>
            <Input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <ButtonAdd onClick={handeleTask}>Add to</ButtonAdd>
          </Items>
        </Box>
        <Tasks>
          {tasks.map((item, index) => (
            <Task>
              <Bill className="bill">{item}</Bill>
              <Delete onClick={() => deleteTask(index)} className="btn-delete">
                Delete
              </Delete>
            </Task>
          ))}
        </Tasks>
      </Contener>
    </div>
  );
};

export default TodoList;

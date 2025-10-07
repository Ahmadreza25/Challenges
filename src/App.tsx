import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from "./page/TotoList/TodoList";
import CharacterGenerator from "./page/CharacterGenerator/CharacterGenerator";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<TodoList />}/>
          <Route path="/" element={<CharacterGenerator />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

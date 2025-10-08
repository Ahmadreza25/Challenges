import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./page/Timer/Timer";
import TodoList from "./page/TotoList/TodoList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<TodoList />}/>
          <Route path="/Timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

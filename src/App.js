import "./App.css";
import TodoDisplay from "./pages/TodoDisplay";
import FormControl from "./pages/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
function App() {
  const [accept, setAccept] = useState([]);
  const getData = (data) => {
    setAccept([...accept, { id: uuidv4(), task: data }]);
  };
  const deleteTask = (id) => {
    setAccept(accept.filter((filter) => filter.id !== id));
  };
  return (
    <div className="App">
      <FormControl addTo={getData} />
      {accept.map((data, index) => {
        return <TodoDisplay task={data} key={index} onDelete={deleteTask} />;
      })}
    </div>
  );
}

export default App;

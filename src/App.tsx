import "./App.css";
import Todo from "./pages/Todo";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-purple-300 ">
      <div className=" max-w-7xl min-h-screen bg-white mx-auto">
        <h1 className="text-center border-b-lime-400 border">
          Branch todortk: Todo with rtk query
        </h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;

import { Separator } from "@radix-ui/react-separator";
import AddTodo from "./AddTodo";

const TodoContainer = () => {
  return (
    <div className="p-2">
      <AddTodo />
      <Separator className="border-b-black border-b-2 my-4" />
      <div className="grid  grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1 border-2 p-2 rounded-2xl">
          <h2 className="text-center text-xl text-purple-600">Pending todo</h2>
        </div>
        <div className="col-span-2 md:col-span-1 border-2 p-2 rounded-2xl">
          <h2 className="text-center text-xl text-purple-600">
            Completed todo
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;

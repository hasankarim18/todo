import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AddTodo = () => {
  return (
    <div>
      <div className="flex justify-center">
        <form action="" className="w-full md:w-[80%] lg:w-[60%]">
          <div className="grid grid-cols-12 items-center mb-4 ">
            <label className="col-span-12 md:col-span-12" htmlFor="todotitle">
              Task Name:
            </label>
            <Input
              type="text"
              id="todotitle"
              className="border-2 col-span-12 md:col-span-12 p-4 border-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-0 "
            />
          </div>
          <div className="grid gap-2 grid-cols-12 items-center ">
            <label
              className="col-span-12 md:col-span-12"
              htmlFor="tododescription"
            >
              Description:
            </label>
            <Textarea
              id="tododescription"
              className="border-2 col-span-12 md:col-span-12 p-4 border-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-0 "
            />
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;

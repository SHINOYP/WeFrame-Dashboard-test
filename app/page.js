import Statusbar from "./Components/Statusbar";
import ToDoListContainer from "./Components/Drag&Drop/TodoListContainer";

const lists = ["Todo", "Inprogress", "Done", "Revised"];

const initialTasks = [
  { id: 1, name: "Learning JS", flag: "Important", type: "Todo" },
  { id: 2, name: "Learning React.js", flag: "Database", type: "Done" },
  { id: 3, name: "Learning Express.js", flag: "Video", type: "Todo" },
  { id: 4, name: "Dont ghost me please", flag: "Bug fix", type: "Done" },
  {
    id: 5,
    name: "Becoming a fullstack developer",
    flag: "important",
    type: "Todo",
  },
  {
    id: 6,
    name: "Get the assigment done",
    flag: "important",
    type: "Inprogress",
  },
];

export default function Home() {
  return (
    <div className="w-full p-4 md:p-10 md:overflow-auto h-fit bg-bg-color mx-auto xl:max-w-[1600px] ">
      <Statusbar />
      <div className="overflow-auto ">
        <ToDoListContainer lists={lists} initialTasks={initialTasks} />
      </div>
    </div>
  );
}

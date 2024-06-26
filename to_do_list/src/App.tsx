import React, { ChangeEvent, useState } from "react";
import "./App.css";
import ToDoModal from "./components/ToDoModal";
interface Do  {
  name: string;
  timeStart: string;
  timeEnd: string;
  isDone: boolean;
  des: string;
};
function App() {
  const [toDoList, setToDoList] = useState<Do[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Do>({ name: "",
    timeStart: "",
    timeEnd: "",
    isDone: false,
    des: "",});
  const [object, setObject] = useState<Do>({
    name: "",
    timeStart: "",
    timeEnd: "",
    isDone: false,
    des: "",
  });
  const convertTimeStringToDate = (timeString: string): Date => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  };
  const hanleAddToDoList = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      object.name === "" ||
      object.timeStart === null ||
      object.timeEnd === null
    ) {
      alert("You must fill all the fields");
    } else {
      if (
        convertTimeStringToDate(object.timeStart) >=
        convertTimeStringToDate(object.timeEnd)
      ) {
        alert("Time start must be less than time end");
        return;
      } else {
        const newToDoList = [...toDoList, object];
        setToDoList(newToDoList);
        setObject({
          name: "",
          timeStart: "",
          timeEnd: "",
          isDone: false,
          des: "",
        });
      }
    }
  };
  const handleChangeObject = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setObject({ ...object, [key]: event.target.value });
  };
  const hanleChangeSelectedTodo = (value: string | boolean, key: string ) => {
    setSelectedTodo({
      ...selectedTodo,
      [key]: value,
    });
  }
  const openModal = (todo: Do) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTodo({ name: "",
      timeStart: "",
      timeEnd: "",
      isDone: false,
      des: "",});
    setIsModalOpen(false);    
  };
  const handleUpdateToDo = () => {
    if (
      selectedTodo.name === "" ||
      selectedTodo.timeStart === null ||
      selectedTodo.timeEnd === null
    ) {
      alert("You must fill all the fields");
      return;
    }else{
      if (
        convertTimeStringToDate(selectedTodo.timeStart) >=
        convertTimeStringToDate(selectedTodo.timeEnd)
      ) {
        alert("Time start must be less than time end");
        return;
      }else{
        const newToDoList = toDoList.map((todo) => {
          if (todo.name === selectedTodo.name) {
            return selectedTodo;
          }
          return todo;
        });
        setToDoList(newToDoList);
        setIsModalOpen(false);
      }
    }
  }  
  return (
    <div className="laptop:flex laptop:justify-center">
      <div className="p-5 px-3 laptop:w-[360px] laptop:h-[700px] h-screen laptop:mt-4 border rounded-md">
        <h1 className="uppercase text-center text-2xl">to do list</h1>
        <form className="" onSubmit={hanleAddToDoList}>
          <div className="mt-5">
            <div className="flex justify-between mb-2">
              <label htmlFor="time-start">Time Start: </label>
              <input
                onChange={(event) => handleChangeObject(event, "timeStart")}
                type="time"
                value={object.timeStart}
              />
            </div>
            <div className="flex justify-between mb-2">
              <label htmlFor="time-end">Time End: </label>
              <input
                type="time"
                onChange={(event) => handleChangeObject(event, "timeEnd")}
                value={object.timeEnd}
              />
            </div>
            <div className="flex">
              <label htmlFor="name">Name: </label>
              <input
                className="ml-3 border px-2 h-8 w-full"
                type="text"
                onChange={(event) => handleChangeObject(event, "name")}
                value={object.name}
              />
            </div>
            <div>
              <label htmlFor="des">Description: </label>
              <textarea
                className="border px-2 h-20 w-full"
                value={object.des}
                onChange={(event) => handleChangeObject(event, "des")}
              />
            </div>
            <button className="mt-5 h-10 w-full bg-[#0A8020] text-white px-3 py-1 rounded">
              Add
            </button>
          </div>
        </form>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="border px-3 w-[30%]">Time</th>
              <th className="border px-3 w-[60%]">Name</th>
              <th className="border px-3">Done</th>
            </tr>
          </thead>
          <tbody>
            {toDoList.map((todo, index) => (
              <tr key={index} className="cursor-pointer" onClick={()=>openModal(todo)}>
                <td className="border px-3 ">
                  {todo.timeStart}-{todo.timeEnd}
                </td>
                <td className="border px-3">{todo.name}</td>
                <td className="border px-3">
                  <input type="checkbox" checked={todo.isDone} readOnly />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToDoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        toDo={selectedTodo}      
        hanleChangeSelectedTodo={hanleChangeSelectedTodo}
        handleUpdateToDo={handleUpdateToDo}
       />
    </div>
  );
}

export default App;

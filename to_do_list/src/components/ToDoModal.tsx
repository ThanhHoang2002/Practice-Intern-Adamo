import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
interface Do  {
  name: string;
  timeStart: string;
  timeEnd: string;
  isDone: boolean;
  des: string;
};
type Props = {
  toDo: Do;
  isOpen: boolean;
  onClose: () => void;
  hanleChangeSelectedTodo: (value: string | boolean,key: string ) => void;
  handleUpdateToDo: () => void;
};
const ToDoModal = (props: Props) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        contentLabel={props.toDo.name}
        className="absolute w-full top-[8%] bg-white shadow-md 
        border rounded-[4px] p-5 
        laptop:w-[360px]
        laptop:left-1/2
        laptop:transform laptop:-translate-x-1/2
        laptop:h-full"
      >
        <h1 className="text-center uppercase">{props.toDo.name}</h1>
        <div className="mt-5">
          <div className="flex justify-between mb-2">
            <label htmlFor="time-start">Time Start: </label>
            <input
              onChange={(event) =>props.hanleChangeSelectedTodo(event.target.value, "timeStart")}
              type="time"
              value={props.toDo.timeStart}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label htmlFor="time-end">Time End: </label>
            <input
              type="time"
              onChange={(event) => props.hanleChangeSelectedTodo(event.target.value, "timeEnd")}
              value={props.toDo.timeEnd}
            />
          </div>
          <div>
            <label htmlFor="des">Description: </label>
            <textarea
              className="border px-2 h-20 w-full"
              value={props.toDo.des}
              onChange={(event) =>props.hanleChangeSelectedTodo(event.target.value, "des")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="isDone">Is Done: </label>
          <input
            type="checkbox"
            checked={props.toDo.isDone}
            onChange={(event) =>props.hanleChangeSelectedTodo(event.target.checked, "isDone")}
          />
        </div>
        <div className="flex">
          <button
            onClick={props.onClose}
            className="mt-5 mx-2 h-10 w-full bg-[#80200A] text-white px-3 py-1 rounded"
          >
            Close
          </button>
          <button  className="mt-5 mx-2 h-10 w-full bg-[#0A8020] text-white px-3 py-1 rounded"
          onClick={props.handleUpdateToDo}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ToDoModal;

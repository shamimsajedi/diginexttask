import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (value.length != 0) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: value, isEditing: false, isCheck: false },
      ]);
      setValue("");
    }
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleTextChange = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };
  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };
  const toggleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, isCheck: !task.isCheck } : task
      )
    );
  };

  return (
    <>
      <div className="border border-gray-200 flex flex-col rounded-lg ">
        <form
          className="flex justify-center items-center  space-x-4"
          onSubmit={handelSubmit}
        >
          <input
            type="text"
            className={`w-full border border-black rounded-lg`}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button type="submit" className="border border-black rounded-lg px-2">
            +
          </button>
        </form>
        <div
          className={tasks.length == 0 ? null : `border-b border-gray-200`}
        ></div>
        {tasks.map((task, index) => {
          return (
            <div
              key={task.id}
              className={index + 1 === tasks.length ? null : `border-b`}
            >
              <div className="flex justify-between">
                <span>{index + 1}.</span>
                <input
                  className={`w-full ${task.isCheck ? "line-through" : null}`}
                  disabled={!task.isEditing}
                  onChange={(e) => handleTextChange(task.id, e.target.value)}
                  value={task.text}
                />
                <div className="flex">
                  <button onClick={() => toggleCheck(task.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </button>
                  <button onClick={() => toggleEdit(task.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button onClick={() => deleteTodo(task.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

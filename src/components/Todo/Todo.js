import { useState, useEffect } from "react";
import {toast} from "react-toastify";
export default function Todo(props) {
  const [task, setTask] = useState([{"work":"test",
  "status":"in progress"}]);
  const [taskInput, setTaskInput] = useState("");
  const [test, setTest] = useState(0);
  useEffect(() => {
    //read data from local storage
    const data = localStorage.getItem("task");
    if (data) {
        setTask(JSON.parse(data));
    }
  }, []);
  const addTask = () => {
    const newTask = [...task];
    const newTaskInput = {};
    newTaskInput.work = taskInput;
    newTaskInput.status = "in progress";
    newTask.push(newTaskInput);
    setTask(newTask);
    setTaskInput("");
    localStorage.setItem("task", JSON.stringify(newTask));
    toast.success("Add task successfully");
  };
  const DeleteTask = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
    toast.error("Delete task successfully");
    };
    const FinishedTask = (index) => {
        const newTask = [...task];
        newTask[index].status = "finished";
        setTask(newTask);
        localStorage.setItem("task", JSON.stringify(newTask));
        toast.success("Finished task successfully");
    };
  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input type="text" id="form1" className="form-control" 
                      value={taskInput} 
                      onChange={(e) => setTaskInput(e.target.value)}
                      />
                      <label className="form-label" for="form1">
                        Enter a task here
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button  className="btn btn-primary"
                    onClick={addTask}
                    >
                      Save
                    </button>
                  </div>

                  
                </div>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    {task.map((item, index) => (
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{item.work}</td>
                            <td>{item.status}</td>
                            <td>
                            <button type="submit" className="btn btn-danger"
                            onClick={() => DeleteTask(index)}
                            >
                                Delete
                            </button>
                            <button
                            type="submit"
                            className="btn btn-success ms-1"
                            onClick={() => FinishedTask(index)}
                          >
                            Finished
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


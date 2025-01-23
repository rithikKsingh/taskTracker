import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const navigate = useNavigate();

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get("/api/tasks");
//       setTasks(response.data);
//       console.log(response.data);
//       console.log(tasks.length);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addTask = async () => {
//     try {
//       const response = await axios.post("/api/tasks", { task: newTask });
//       setTasks([...tasks, response.data]);
//       setNewTask("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteTask = async (id) => {
//     try {
//       await axios.delete(`/api/tasks/${id}`);
//       setTasks(tasks.filter((task) => task._id != id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.get("/api/auth/logout");
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);
//   return (
//     <div>
//       <h2>Task Tracker</h2>
//       <button onClick={logout}>LogOut</button>
//       <div>
//         <input
//           type="text"
//           placeholder="New Task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id}>
//             {task.task}{" "}
//             <button onClick={() => deleteTask(task._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post("/api/tasks", { task: newTask });
      setTasks([...tasks, response.data]);
      setNewTask("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="home-container">
      <h2>Task Tracker</h2>
      <button className="logout-btn" onClick={logout}>
        Log Out
      </button>
      <div className="task-input-container">
        <input
          className="task-input"
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <span>{task.task}</span>
            <button className="delete-btn" onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

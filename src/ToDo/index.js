import React, { useState } from "react";
import Task from "./components/Task";
import Search from "./components/Search";
import TaskList from "./components/TaskList";

import './index.css';


const ToDo = () => {
    const [currentTask, setCurrentTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const [currentTaskEdit, setCurrentTaskEdit] = useState(false);
    const [selectEditBtn, setSelectEditBtn] = useState(false);

    // Add current task to list task
    const saveTask = () => {
        setListTask([...listTask, currentTask]);
        setCurrentTask("");
    };

    // Remove task
    const removeTask = (index) => {
        const newList = [
            ...listTask.slice(0, index),
            ...listTask.slice(index + 1, listTask.length),
        ];
        setListTask(newList);
    };

    // Edit the task

    return (
        <>
            <div className="content-principal">
                <Task
                    saveTask={saveTask}
                    setCurrentTask={setCurrentTask}
                    currentTask={currentTask}
                    listTask={listTask}
                />
            </div>
            <Search />
            {listTask.length > 0 &&
                listTask.map((item, index) => {
                    return (
                        <TaskList
                            item={item}
                            listTask={listTask}
                            removeTask={() => removeTask(index)}
                            handleSelectBtn={() => setSelectEditBtn(true)}
                            selectEditBtn={selectEditBtn}
                        />
                    );
                })}
        </>
    );
};

export default ToDo;

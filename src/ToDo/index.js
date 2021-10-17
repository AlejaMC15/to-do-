import React, { useState } from "react";
import Task from "./components/Task";
import Search from "./components/Search";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

import "./index.css";

const ToDo = () => {
    const [currentTask, setCurrentTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const [selectEditBtn, setSelectEditBtn] = useState(false);
    const [currentTaskEdit, setCurrentTaskEdit] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState([])
    const [getText, setGetText] = useState([])

    // Add current task to list task
    const saveTask = () => {
        setListTask([...listTask, currentTask]);
        setCurrentTask("");
    };

    // Remove the task
    const removeTask = (index) => {
        const newList = [
            ...listTask.slice(0, index),
            ...listTask.slice(index + 1, listTask.length),
        ];
        setListTask(newList);
    };

    // Edit the task
    const editTask = (currentTaskEdit, index) => {
        debugger
        const newEdit = [...listTask];
        newEdit[index] = currentTaskEdit;
        setListTask(newEdit);
        setSelectEditBtn(false);
        setCurrentTaskEdit("");
    };

    //Search
    const searchTask = (e) => {
        const task = listTask.filter((text) => text.toLowerCase().includes(e.toLowerCase()))
        setSearchResult(task)
        setIsSearching(true)
    };

    const saveText = (number) => {
        fetch(`https://catfact.ninja/facts?limit=${number}&max_length=1000`)
            .then((response) => response.json())
            .then((data) => {
                return setGetText(data)
            });
    }

    return (
        <>
            <div className="rounded content-principal">
                <Task
                    saveTask={saveTask}
                    setCurrentTask={setCurrentTask}
                    currentTask={currentTask}
                    listTask={listTask}
                />
            </div>
            <Modal handleText={saveText} />
            <div className="rounded content-principal">
                <Search
                    handleSearchText={(e) => {
                        searchTask(e);
                    }}
                />
                {listTask.length > 0 && !isSearching
                    && listTask.map((item, index) => {
                        return (
                            <TaskList
                                item={item}
                                index={index}
                                removeTask={() => removeTask(index)}
                                handleSelectBtn={() => setSelectEditBtn(true)}
                                selectEditBtn={selectEditBtn}
                                editTask={editTask}
                                currentTaskEdit={currentTaskEdit}
                                setCurrentTaskEdit={setCurrentTaskEdit}
                            />
                        );
                    })
                }
                {searchResult.length > 0 && isSearching
                    && searchResult.map((item, index) => {
                        return (
                            <TaskList
                                item={item}
                                index={index}
                                removeTask={() => removeTask(index)}
                                handleSelectBtn={() => setSelectEditBtn(true)}
                                selectEditBtn={selectEditBtn}
                                editTask={editTask}
                                currentTaskEdit={currentTaskEdit}
                                setCurrentTaskEdit={setCurrentTaskEdit}
                            />
                        );
                    })
                }
                {getText?.data?.length > 0 && !isSearching
                    && getText?.data?.map((item, index) => {
                        return (
                            <TaskList
                                item={item.fact}
                                index={index}
                                removeTask={() => removeTask(index)}
                                handleSelectBtn={() => setSelectEditBtn(true)}
                                selectEditBtn={selectEditBtn}
                                editTask={editTask}
                                currentTaskEdit={currentTaskEdit}
                                setCurrentTaskEdit={setCurrentTaskEdit}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export default ToDo;

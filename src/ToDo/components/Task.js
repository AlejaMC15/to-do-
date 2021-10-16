import React from "react";

const Task = ({ saveTask, setCurrentTask, currentTask, listTask }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col justify-content-center input-group mb-3 p-0">
                        <input
                            onChange={(e) => setCurrentTask(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Add the description here..."
                            aria-label="Add the description here..."
                            aria-describedby="basic-addon2"
                            value={currentTask}
                        />
                    </div>
                </div>
                <div className="row">
                    <button onClick={saveTask} type="button" className="btn btn-info">
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default Task;

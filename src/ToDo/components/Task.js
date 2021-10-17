import React from "react";

const Task = ({ saveTask, setCurrentTask, currentTask }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col input-group mb-3 p-0">
                        <input
                            onChange={(e) => setCurrentTask(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Add the description here..."
                            aria-label="Add the description here..."
                            value={currentTask}
                        />
                    </div>
                    <div className="col-sm-1">
                        <button onClick={saveTask} type="button" className="btn btn-info">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Task;

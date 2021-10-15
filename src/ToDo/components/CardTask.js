import React, { useState } from "react";

const CardTask = () => {

    const [currentTask, setCurrentTask] = useState("");
    const [listTask, setListTask] = useState([]);

    const saveTask = () => {
        setListTask([...listTask, currentTask]);
    }

    return (
        <>
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col justify-content-center input-group mb-3">
                        <input
                            onChange={(e) => setCurrentTask(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Add the description here..."
                            aria-label="Add the description here..."
                            aria-describedby="basic-addon2"
                        />
                    </div>
                    <div className="col justify-content-center">
                        <button onClick={saveTask} type="button" className="btn btn-info">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardTask;

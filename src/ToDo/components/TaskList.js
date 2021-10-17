import React from "react";

const TaskList = ({
    item,
    index,
    removeTask,
    handleSelectBtn,
    selectEditBtn,
    editTask,
    setCurrentTaskEdit,
    currentTaskEdit,
}) => {
    return (
        <>
            {item && (
                <div className="container">
                    <div className="row bg-light align-items-center mb-2 p-2 rounded">
                        <div className="col">
                            {!selectEditBtn ? (
                                <ul className="list-group">
                                    <li className="list-group-item">{item}</li>
                                </ul>
                            ) : (
                                <div className="row">
                                    <div className="col">
                                        <input
                                            onChange={(e) => setCurrentTaskEdit(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder={item}
                                            aria-label={item}
                                            value={currentTaskEdit || item}
                                        />
                                    </div>
                                    <div className="col">
                                        <button
                                            onClick={() => editTask(currentTaskEdit, index)}
                                            type="button"
                                            className="btn btn-info"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-sm-1">
                            <div
                                class="btn-group" role="group" aria-label="Basic checkbox toggle button group"
                            >
                                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                                <label class="btn btn-outline-info" for="btncheck1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-check2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <button className="btn border border-info" onClick={handleSelectBtn}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-pencil-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col-sm-1">
                            <button className="btn border border-info" onClick={removeTask}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trash-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskList;

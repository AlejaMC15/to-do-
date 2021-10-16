import React from "react";

const Modal = ({ handleText }) => {

    return (
        <>
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Fill with random cat phrases
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Enter number of desired phrases</h5>

                        </div>
                        <div className="modal-body">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Number"
                                aria-label="Number"
                                onChange={(event) => handleText(event.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
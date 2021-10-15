import React, { useState } from "react";

const ShowSentence = () => {
    const [dataApi, setDataApi] = useState("");

    const getSentence = () => {
        fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
            .then((data) => setDataApi(data.fact));
    };

    return (
        <>
            <div>
                <p>Click the icon to change the sentence</p>
                <button
                    onClick={() => getSentence()}
                    type="button"
                    className="btn btn-link"
                >
                    <img
                        src="https://img.icons8.com/material-two-tone/24/000000/rotate.png"
                        alt="img-Rotate"
                    />
                </button>
            </div>
            <div>
                <p>{dataApi}</p>
            </div>
        </>
    );
};

export default ShowSentence;

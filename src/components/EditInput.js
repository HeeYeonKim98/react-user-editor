import React from "react";
import { TextField } from "@material-ui/core";

import EditButton from "./EditButton";
import "../css/EditInput.css";

const handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
    console.log(e.target.value);
};

const EditInput = ({ value, name }) => {
    return (
        <div className="card">
            <div
                style={{
                    fontWeight: "light",
                    fontSize: 20,
                    textShadow: "2px 2px 3px #bbbbbb",
                    marginBottom: 10,
                    color: "#6f6f79",
                }}
            >
                {name} | {value.toString()}
            </div>
            <div className="field">
                <div className="text">
                    <TextField
                        multiline
                        className="main-input"
                        rowsMax={10}
                        variant="outlined"
                        onChange={handleChange}
                        value={value}
                        name={name}
                    />
                </div>
                <EditButton title="수정" />
            </div>
        </div>
    );
};

export default EditInput;

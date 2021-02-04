import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import EditButton from "./EditButton";
import "../css/EditInput.css";

const EditInput = ({ value, name }) => {
    const [info, setInfo] = useState(value);
    const [edit, setEdit] = useState(value);

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
                {name} | {info.toString()}
            </div>
            <div className="field">
                <div className="text">
                    <TextField
                        multiline
                        className="main-input"
                        rowsMax={10}
                        variant="outlined"
                        onChange={(e) => setEdit(e.target.value)}
                        value={edit}
                        name={name}
                    />
                </div>
                <EditButton
                    title="수정"
                    click={() => {
                        setInfo(edit);
                        alert(name + "의 정보가 수정되었습니다.");
                    }}
                />
            </div>
        </div>
    );
};

export default EditInput;

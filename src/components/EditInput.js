import React from "react";
import { TextField } from "@material-ui/core";

import "../css/editor.css";

const EditInput = ({ change, value, name }) => {
  return (
    <div className="editcard-input">
      <TextField
        multiline
        className="main-input"
        rowsMax={10}
        variant="outlined"
        onChange={change}
        value={value}
        name={name}
      />
    </div>
  );
};

export default EditInput;

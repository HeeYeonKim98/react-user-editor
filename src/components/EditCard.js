import React, { useState } from "react";

import EditInput from "./EditInput";
import EditButton from "./EditButton";
import "../css/edit.css";

const EditCard = ({ value, name }) => {
  const [info, setInfo] = useState(value);
  const [edit, setEdit] = useState(value);

  return (
    <div className="editcard-card">
      <div className="editcard-text">
        📌 {name} | {info.toString()}
      </div>
      <div className="editcard-field">
        <EditInput change={(e) => setEdit(e.target.value)} value={edit} name={name} />
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

export default EditCard;

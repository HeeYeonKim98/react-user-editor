import React from "react";
import { Button } from "@material-ui/core";

const EditButton = ({ title, click }) => {
    return (
        <div>
            <Button
                className="main-button"
                style={{ backgroundColor: "#eff3f7" }}
                size="large"
                variant="contained"
                onClick={click}
            >
                {title}
            </Button>
        </div>
    );
};

export default EditButton;

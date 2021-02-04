import EditInput from "./EditInput";

const Edit = ({ data }) => {
    return (
        <div>
            {Object.keys(data).map((row) => {
                if (typeof data[row] !== "object") {
                    return <EditInput key={row} value={data[row]} name={row} />;
                }
            })}
        </div>
    );
};

export default Edit;

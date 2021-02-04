import EditInput from "./EditInput";

const EditObject = ({ data }) => {
    // const valueData = Object.values(data);
    // console.log(valueData[3].email);
    // const valueData = data[row];
    return (
        <div>
            {Object.keys(data).map((row) => {
                if (typeof data[row] === "object") {
                    return <EditInput value={data[row]} name={row} />;
                }
            })}
        </div>
    );
};

export default EditObject;

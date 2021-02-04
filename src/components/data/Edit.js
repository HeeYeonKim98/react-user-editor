import EditCard from "../EditCard";

const Edit = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map((row) => {
        if (typeof data[row] !== "object") {
          return <EditCard key={row} value={data[row]} name={row} />;
        } else if (row === "experiencedSeasons") {
          return <EditCard key={row} value={data[row]} name={row} />;
        }
      })}
    </div>
  );
};

export default Edit;

import EditCard from "../EditCard";

const EditContacts = ({ data }) => {
  const userData = data["contacts"] || {};
  return (
    <div>
      {Object.keys(userData).map((row) => {
        return <EditCard key={row} value={userData[row]} name={row} />;
      })}
    </div>
  );
};

export default EditContacts;

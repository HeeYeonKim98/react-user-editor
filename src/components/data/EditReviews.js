import EditCard from "../EditCard";

const EditReviews = ({ data }) => {
  const userData = data["bookReviews"] || {};
  return (
    <div>
      {Object.keys(userData).map((row1) => {
        return Object.keys(userData[row1]).map((row2) => {
          return <EditCard key={row2} value={userData[row1][row2]} name={row2} />;
        });
      })}
    </div>
  );
};

export default EditReviews;

import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

import Edit from "../components/data/Edit";
import EditContacts from "../components/data/EditContacts";
import EditReviews from "../components/data/EditReviews";
import "../css/main.css";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData("./user.json");
  }, []);

  const getData = async (URL) => {
    await axios
      .get(URL)
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="main-container">
      <div className="main-card-container">
        {loading ? (
          <div className="main-loading">
            <CircularProgress />
          </div>
        ) : (
          <div>
            <div className="main-topic">✏️ JSON Editor</div>
            <div className="editcard">
              <Edit data={userData} />
              <EditContacts data={userData} />
              <EditReviews data={userData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

import React, { useState, useEffect } from "react";
import axios from "axios";

import Edit from "../components/data/Edit";
import EditContacts from "../components/data/EditContacts";
import EditReviews from "../components/data/EditReviews";
import "../css/Main.css";

const Main = () => {
  const [userData, setUserData] = useState([]);

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
  };

  return (
    <div className="main-container">
      <div className="main-card-container">
        <div className="main-topic">✏️ JSON Editor</div>

        <div className="editcard">
          <Edit data={userData} />
        </div>

        <div className="editcard">
          <EditContacts data={userData} />
        </div>

        <div className="editcard">
          <EditReviews data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Main;

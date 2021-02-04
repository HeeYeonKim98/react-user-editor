import React from "react";
import axios from "axios";

// import EditObject from "../components/EditObject";
import Edit from "../components/Edit";
import "../css/main.css";

export default class mainPage extends React.Component {
    state = {
        userData: [],
    };

    getData = async () => {
        await axios
            .get("./user.json")
            .then((data) => {
                this.setState({
                    userData: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    async componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="main-container">
                <div className="main-card-container">
                    <div className="main-topic">JSON Editor</div>

                    <div className="cards">
                        <Edit data={this.state.userData} />
                    </div>

                    {/* <div className="cards"><EditObject data={this.state.userData} /></div> */}
                </div>
            </div>
        );
    }
}

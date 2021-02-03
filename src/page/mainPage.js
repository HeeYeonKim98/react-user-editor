import React from "react";
import { Button, Card, CardContent, Divider } from "@material-ui/core";

import "../css/main.css";

export default class mainPage extends React.Component {
    state = {
        read: false,
        update: false,
        create: false,
        delete: false,
        key1: "",
        key2: "",
        value: "",

        id: "12a4-2b4c-34d6-45ef",
        contacts: {
            email: "readking@trevari.co.kr",
            phone: "01021212121",
        },
    };

    Read = () => {
        this.setState({
            read: true,
            key1: "",
            key2: "",
            value: "",
        });
    };

    Create = () => {
        this.setState({
            read: true,
            update: false,
            create: true,
            delete: false,
            key1: "",
            key2: "",
            value: "",
        });
    };

    CreateButton = (value, key1, key2 = null) => {
        if (key1 === "contacts") {
            this.setState({
                ...this.state,
                contacts: {
                    ...this.state.contacts,
                    [key2]: value,
                },
            });
        }
    };

    Update = () => {
        this.setState({
            read: true,
            update: true,
            create: false,
            delete: false,
            key1: "",
            key2: "",
            value: "",
        });
    };

    UpdateButton = (value, key1, key2) => {
        if (key2 === "") {
            this.setState({
                [key1]: value,
            });
        } else if (key2 != null) {
            this.setState({
                ...this.state,
                contacts: {
                    ...this.state.contacts,
                    [key2]: value,
                },
            });
        }
    };

    Delete = () => {
        this.setState({
            read: true,
            update: false,
            create: false,
            delete: true,
            key1: "",
            key2: "",
            value: "",
        });
    };

    DeleteButton = (key1, key2) => {
        console.log(key1, key2);
        if (key2 === "") {
            this.setState({
                [key1]: "",
            });
        } else if (key2 !== "") {
            this.setState({
                ...this.state,
                contacts: {
                    ...this.state.contacts,
                    [key2]: "",
                },
            });
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name);
        console.log(e.target.value);
    };

    render() {
        const { read, update, create, id, contacts, key1, key2, value } = this.state;

        return (
            <div className="main-container">
                <div className="main-card-container">
                    <Card>
                        <CardContent>
                            <div className="main-topic">user information</div>

                            <Divider className="main-topic" />

                            <div>
                                <Button
                                    className="main-button"
                                    size="larger"
                                    variant="contained"
                                    onClick={this.Read}
                                >
                                    조회
                                </Button>
                                <Button
                                    className="main-button"
                                    size="larger"
                                    variant="contained"
                                    onClick={this.Update}
                                >
                                    수정
                                </Button>
                                <Button
                                    className="main-button"
                                    size="larger"
                                    variant="contained"
                                    onClick={this.Create}
                                >
                                    추가
                                </Button>
                                <Button
                                    className="main-button"
                                    size="larger"
                                    variant="contained"
                                    onClick={this.Delete}
                                >
                                    삭제
                                </Button>
                            </div>

                            <div>
                                {read === true && (
                                    <div>
                                        <div className="main-text2">id : {id}</div>
                                        <div className="main-text2">
                                            contacts : {JSON.stringify(contacts)}
                                        </div>
                                    </div>
                                )}
                                {update === true && (
                                    <div>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="key1"
                                            placeholder="key1 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="key2"
                                            placeholder="key2 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="value"
                                            placeholder="value 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <Button
                                            onClick={() => this.UpdateButton(value, key1, key2)}
                                        >
                                            수정
                                        </Button>
                                    </div>
                                )}
                                {create === true && (
                                    <div>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="key1"
                                            placeholder="key1 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="key2"
                                            placeholder="key2 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="value"
                                            placeholder="value 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <Button
                                            onClick={() => this.CreateButton(value, key1, key2)}
                                        >
                                            추가
                                        </Button>
                                    </div>
                                )}
                                {this.state.delete === true && (
                                    <div>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="key1"
                                            placeholder="key1 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <input
                                            className="main-input"
                                            type="text"
                                            name="key2"
                                            placeholder="key2 입력"
                                            onChange={this.handleChange}
                                        ></input>
                                        <Button onClick={() => this.DeleteButton(key1, key2)}>
                                            삭제
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

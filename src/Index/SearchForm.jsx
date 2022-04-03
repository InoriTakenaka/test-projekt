import React, { Component } from "react";
import style from "./SearchForm.module.css";
import logo from "../asset/logo.jpg";
export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
    this.searchHandler = props.onSearchHandler;
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
  }
  onSearchClick() {
    const filter = this.state.inputVal;
    this.searchHandler(filter);
    this.setState({ inputVal: "" });
  }
  onInputChanged(e) {
    this.setState({ inputVal: e.target.value });
  }
  render() {
    return (
      <div className={style.container}>
        <img src={logo} alt="..." />
        <input
          style={{
            width: "70%",
            float: "left",
            position: "absolute",
            top: "50px",
          }}
          type="text"
          placeholder="search"
          value={this.state.inputVal}
          onChange={this.onInputChanged}
        />
        <button
          style={{
            width: "100px",
            textAlign: "center",
            float: "right",
            position: "absolute",
            top: "50px",
            right: "45px",
          }}
          type="button"
          onClick={this.onSearchClick}
        >
          Search
        </button>
      </div>
    );
  }
}

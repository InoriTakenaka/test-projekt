import React, { Component } from "react";

import style from "./PostQuestion.module.css";
export default class PostQuestion extends Component {
  onPostHandler = this.props.onPostHandler;

  constructor(props) {
    super(props);
    this.state = {
      questionBody: "",
      questionTitle: "",
    };
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onInputHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler() {
    const newQuestion = {
      questionId: 4,
      creator: "creator",
      created: new Date(),
      questionTitle: this.state.questionTitle,
      questionBody: this.state.questionBody,
      answers: [],
    };
    this.onPostHandler(newQuestion);
  }

  render() {
    return (
      <div className={style.question_form}>
        PostQuestion:
        <fieldset>
          <div>
            <label htmlFor="questionTitle">
              Question Title:
              <input
                name="questionTitle"
                type="text"
                style={{ width: "70%" }}
                value={this.state.questionTitle}
                onChange={this.onInputHandler}
              />
            </label>
          </div>
          <div>
            <label htmlFor="questionBody">
              Question Body:
              <textarea
                name="questionBody"
                style={{ height: "70%", width: "70%" }}
                value={this.state.questionBody}
                onChange={this.onInputHandler}
              />
            </label>
          </div>
          <button onClick={this.onSubmitHandler}>Submit</button>
        </fieldset>
      </div>
    );
  }
}

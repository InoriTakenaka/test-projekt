import React, { Component } from "react";
import QuestionList from "../Question/QuestionList";
import style from "./HomeBody.module.css";
import { getQuestionData } from "./api";
import PostQuestion from "../Question/PostQuestion";
export default class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: getQuestionData(),
    };
    console.log("ctor", this.state);
    this.PostQuestion = this.PostQuestion.bind(this);
  }

  PostQuestion(newQuestion) {
    this.setState({
      questionList: [...this.state.questionList, newQuestion],
    });
    console.info("post", this.state);
  }

  render() {
    const predict = this.props.dataFilter;

    return (
      <div className={style.container}>
        <QuestionList questionList={this.state.questionList} filter={predict} />
        <PostQuestion onPostHandler={this.PostQuestion} />
      </div>
    );
  }
}

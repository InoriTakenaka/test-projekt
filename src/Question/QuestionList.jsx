import React, { Component } from "react";
import Question from "./Question";
import style from "./QuestionList.module.css";

export default class QuestionList extends Component {
  render() {
    console.log(this.props.questionList);
    console.log(this.props.filter);
    let ul = null;
    if (this.props.filter === undefined) {
      ul = (
        <ul>
          {this.props.questionList.map((q) => (
            <li key={q.questionId}>
              <Question data={q} />
            </li>
          ))}
        </ul>
      );
    } else {
      let filter = this.props.filter;
      let data = this.props.questionList.filter(
        (e) =>
          e.questionTitle.includes(filter) || e.questionBody.includes(filter)
      );
      ul = (
        <ul>
          {data.map((q) => (
            <li key={q.questionId}>
              <Question data={q} />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div>
        <div className={style.question_list}>{ul}</div>
      </div>
    );
  }
}

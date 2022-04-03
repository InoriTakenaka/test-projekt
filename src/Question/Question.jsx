import React from "react";
import { Link } from "react-router-dom";

import style from "./Question.module.css";

export default function Question(props) {
  const { data } = props;
  return (
    <div className={style.question}>
      <div>
        <Link to="#"> {data.questionTitle}</Link>
      </div>
      <div className={style.question_content}>
        <p>{data.questionBody}</p>
      </div>
      <div className={style.question_creator}>
        Asked by <a href="#">{data.creator}</a>
        {` on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
}

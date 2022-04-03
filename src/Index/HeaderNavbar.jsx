import React, { Component } from "react";
import style from "./HeaderNav.module.css";
export default class HeaderNavbar extends Component {
  render() {
    return (
      <ul className={style.header_nav}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/news">politics</a>
        </li>
        <li>
          <a href="/opinions">Opinions</a>
        </li>
        <li>
          <a href="/tech">Tech</a>
        </li>
        <li>
          <a href="/world">World</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
      </ul>
    );
  }
}

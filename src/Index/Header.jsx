import React, { Component } from "react";
import style from "./Header.module.css";
import HeaderNavbar from "./HeaderNavbar";
import SearchForm from "./SearchForm";
export default class Header extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.header_left}>
            <HeaderNavbar />
          </div>
          <div className={style.header_right}>
            <div className={style.header_login_form}>
              <ul>
                <li>
                  <a href="/register">Register</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.search_form}>
          <SearchForm onSearchHandler={this.props.onSearchHandler} />
        </div>
      </div>
    );
  }
}

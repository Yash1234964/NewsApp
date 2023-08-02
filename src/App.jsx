/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { Component } from "react";
import { NavBar } from "./components/NavBar.jsx";
import { News } from "./components/News.Jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  pageVar = 8;
  countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca",
    "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr",
    "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt",
    "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl",
    "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th",
    "tr", "tw", "ua", "us", "ve", "za"]
  state = {
    progress: 0,
    country: 'in'
  };

  apikey = "";


  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  setCountry = (country) => {
    this.setState({ country: country });
  }
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar setCountry={this.setCountry} />
            <LoadingBar
              height={3}
              color="#f11946"
              progress={this.state.progress}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/general"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="business"
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="health"
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="science"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="sports"
                  />
                }
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={this.pageVar}
                    country={this.state.country}
                    category="technology"
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

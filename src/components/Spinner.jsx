/* eslint-disable react/no-unknown-property */
import { Component } from "react";
import loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <img className={"my-3"} src={loading} altloading=""></img>
        </div>
      </>
    );
  }
}

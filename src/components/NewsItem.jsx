/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div>
          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>

            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {author ? author : "unknown"} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferer"
                href={newsUrl}
                target="_blank"
                className="btn btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React from "react";


export default function NewsCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* News Card */}
          <div className="card mb-3">
            {/* Card Title */}
            <h5 id="post-title" className="card-header data-title mb-1">{props.title}</h5>
            {/* Card Body */}
            <div className="card-body">
              <p className="off-white-text mb-0">{props.type} by: {props.by}</p>
              <p className="off-white-text mb-0">posted: {props.time}</p>
              {/* Link to article */}
              <p className="data-url mb-0">Link to article:<a className="post-url" href="/public/index.html" target="_blank"> {props.url}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
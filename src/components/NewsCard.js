import React from "react";


export default function NewsCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* News Card */}
          <div data-testid="newscard" className="card mb-3">
            {/* Card Title */}
            <h5 data-testid="post-title" id="post-title" className="card-header data-title mb-1">{props.title}</h5>
            {/* Card Body */}
            <div data-testid="newscard-body" className="card-body">
              <p data-testid="story-by-and-type" className="off-white-text mb-0">{props.type} by: {props.by}</p>
              <p data-testid="date-posted" className="off-white-text mb-0">posted: {props.time}</p>
              {/* Link to article */}
              <p data-testid="story-url" className="data-url mb-0">Link to article:<a className="post-url" href="/public/index.html" target="_blank"> {props.url}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
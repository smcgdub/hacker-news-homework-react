import React from "react";

export default function NewsCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* News Card */}
          <div className="card mb-3">
            {/* Card Title */}
            <h5 id="post-title" className="card-header data-title mb-1">Title</h5>
            {/* Card Body */}
            <div className="card-body">
              <p className="data-by mb-0">Date</p>
              <p className="data-by mb-0">By</p>
              {/* Link to article */}
              <p className="data-url mb-0">Link to article:<a className="post-url" href="/public/index.html" target="_blank"> Click here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="card mb-3">
    //   <h5 id="post-title" className="card-header data-title mb-1">{props.story.title}</h5>
    //   <div className="card-body">
    //     <p className="data-by mb-0">Date: {props.story.date}</p>
    //     <p className="data-by mb-0">{props.story.by}</p>
    //     <p className="data-url mb-0">Link to article:<a className="post-url" href="/public/index.html" target="_blank"> Click here</a></p>
    //   </div>
    // </div>
  );
}
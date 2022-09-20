import React from "react";

export default function NewsCard(props) {
  return (
    <div className="card mb-3">
      <h5 id="post-title" class="card-header data-title mb-1">${ }</h5>
      <div className="card-body">
        <p className="data-by mb-0">Date: ${ }</p>
        <p className="data-by mb-0">By: ${ }</p>
        <p className="data-url mb-0">Link to article:<a className="post-url" href="/public/index.html" target="_blank"> Click here</a></p>
      </div>
    </div>
  );
}
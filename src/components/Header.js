import React from "react";

export default function Header() {
  return (
    <div data-testid="header-component" className="container" >
      {/* Horizontal Rule */}
      < hr className="text-white mt-0" />
      {/* Page Header */}
      <div className="row" >
        <div className="col-12 text-center at-item">
          <h1 className="off-white-text text-center mb-0">Welcome To Hacker News</h1>
          <h3 className="off-white-text text-center mt-0 mb-2">Your social news source</h3>
        </div>
      </div >
      {/* Action Buttons */}
      <div className="row" >
        <div className="col-12 col-md-12 text-center">
          <button data-testid="get-latest-posts" id="getLatestPosts" className="btn my-1 mx-1">Read Latest News</button>
          <button data-testid="get-top-posts" id="getTopPosts" className="btn my-1 mx-1">Read Top News</button>
          <button data-testid="reset-all-news" id="resetAllNews" className="btn my-1 mx-1">Reset All News</button>
          <hr className="text-white" />
        </div>
      </div >
    </div>
  );
}
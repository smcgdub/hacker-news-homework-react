import React from "react";

export default function Header() {
  return (
    <div className="container">
      {/* Horizontal Rule */}
      <hr className="text-white mt-0" />
      {/* Page Header */}
      <div className="row">
        <div className="col-12 text-center at-item">
          <h1 className="off-white-text text-center mb-0">Welcome To Hacker News</h1>
          <h3 className="off-white-text text-center mt-0 mb-2">Your social news source</h3>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="row">
        <div className="col-12 col-md-12 text-center">
          <button id="getPosts" className="btn my-1 mx-1" onclick="getNewPosts()">Read Latest News</button>
          <button id="getPosts" className="btn my-1 mx-1" onclick="getTopPosts()">Read Top News</button>
          <button id="getPosts" className="btn my-1 mx-1" onclick="clearNews()">Reset All News</button>
          <hr className="text-white" />
        </div>
      </div>
    </div>
  );
}
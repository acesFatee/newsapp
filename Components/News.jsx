import React from "react";

export default function News({news}) {
  return (
    <>
      <div className="card card-image-cover">
        <img src={news.urlToImage} alt="" />
        <div className="card-body">
          <h2 className="card-header">{news.title}</h2>
          <p className="text-content2">
            Are you looking to increase your productivity at work?
          </p>
          <div className="card-footer">
            <button className="btn-secondary btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import React from "react";

export default function News({news}) {
  return (
    <>
    {console.log(news)}
      <div className="card card-image-cover">
        <img src={news?.urlToImage} alt="" />
        <div className="card-body">
          <h2 className="card-header">{news?.title?.slice(0, 50)}...</h2>
          <p className="text-content2">
            {news?.description?.slice(0, 50)}...
          </p>
          <div className="card-footer">
            <Link target="__blank" href={news?.url} className="btn-secondary btn">Learn More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

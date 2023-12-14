"use client";

import { Context } from "@/Context/Context";
import { useContext } from "react";

export default function Heading() {
  const { headingcountry, headingcategory } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <img src={headingcountry} width={60} className="mb-4" alt="" />
        <h1 className="font-bold text-4xl">
          Latest News {headingcategory && " - " + headingcategory}
        </h1>
      </div>
    </>
  );
}

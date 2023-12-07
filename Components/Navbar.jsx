"use client";

import { Context } from "@/Context/Context";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

export default function Navbar() {
  const {
    country,
    setcountry,
    seturl,
    setheadingcountry,
    category,
    setcategory,
    setactivecountry,
    activecountry,
    setheadingcategory,
    activecategory,
    setactivecategory,
    theme,
    settheme,
    page
  } = useContext(Context);
  
  useEffect(() => {
    document.querySelector('html').setAttribute("data-theme", theme);
  }, [])
  
  
  
  const handleThemeChange = () => {
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    settheme(newTheme);
    document.querySelector('html').setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  

  const handleCategoryChange = (category) => {
    setactivecategory(category);
    if (category === "general") {
      setheadingcategory("");
      setcategory(category);
      seturl(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=6&page=${1}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return;
    }
    setheadingcategory(category[0].toUpperCase() + category.slice(1));
    setcategory(category);
    seturl(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=6&page=${1}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  };

  const handleCountryChange = (country) => {
    setactivecountry(country);
    setheadingcountry(() => {
      switch (country) {
        case "in":
          return "https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/in.svg";

        case "us":
          return "https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/us.svg";

        case "ca":
          return "https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/ca.svg";

        case "it":
          return "https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/it.svg";

        case "fr":
          return "https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/fr.svg";
        default:
          return "https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/in.svg";
      }
    });
    setcountry(country);
    seturl(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=6&page=${1}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  };

  return (
    <>
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4">
            
            <div className="flex flex-col">
              <span>News App</span>
              <span className="text-xs font-normal text-content2">
                My demo project
              </span>
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  <Link href={"/"}>
                    <li className="menu-item menu-active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Latest News</span>
                    </li>
                  </Link>

                  <li onClick={handleThemeChange} className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="menu-country"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-country"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-75"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                          <path d="M9 7l4 0"></path>
                          <path d="M9 11l4 0"></path>
                        </svg>
                        <span>Countries</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Pick a Country
                        </label>
                        <div
                          onClick={() => handleCountryChange("in")}
                          className={`flex menu-item items-center ml-6 ${
                            activecountry === "in" && "menu-active"
                          }`}
                        >
                          <img
                            src="https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/in.svg"
                            alt="India flag"
                            className="h-4 w-4 mr-2"
                          />
                          <label>India</label>
                        </div>
                        <div
                          onClick={() => handleCountryChange("ca")}
                          className={`flex menu-item items-center ml-6 ${
                            activecountry === "ca" && "menu-active"
                          }`}
                        >
                          <img
                            src="https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/ca.svg"
                            alt="Canada flag"
                            className="h-4 w-4 mr-2"
                          />
                          <label>Canada</label>
                        </div>
                        <div
                          onClick={() => handleCountryChange("us")}
                          className={`flex menu-item items-center ml-6 ${
                            activecountry === "us" && "menu-active"
                          }`}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                            alt="USA flag"
                            className="h-3 w-4 mr-2"
                          />
                          <label>USA</label>
                        </div>
                        <div
                          onClick={() => handleCountryChange("fr")}
                          className={`flex menu-item items-center ml-6 ${
                            activecountry === "fr" && "menu-active"
                          }`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
                            alt="German flag"
                            className="h-4 w-4 mr-2"
                          />
                          <label>France</label>
                        </div>
                        <div
                          onClick={() => handleCountryChange("it")}
                          className={`flex menu-item items-center ml-6 ${
                            activecountry === "it" && "menu-active"
                          }`}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8Ael7OESYAdlh6qprefILNABkFWn+WAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="
                            alt="Italian flag"
                            className="h-3 w-4 mr-2"
                          />
                          <label>Italy</label>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="menu-categories"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-categories"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Categories</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Pick a category
                        </label>
                        <label
                          onClick={() => handleCategoryChange("general")}
                          className={`menu-item ml-6 ${
                            activecategory === "general" && "menu-active"
                          }`}
                        >
                          General
                        </label>
                        <label
                          onClick={() => handleCategoryChange("entertainment")}
                          className={`menu-item ml-6 ${
                            activecategory === "entertainment" && "menu-active"
                          }`}
                        >
                          Entertainment
                        </label>
                        <label
                          onClick={() => handleCategoryChange("business")}
                          className={`menu-item ml-6 ${
                            activecategory === "business" && "menu-active"
                          }`}
                        >
                          Business
                        </label>
                        <label
                          onClick={() => handleCategoryChange("health")}
                          className={`menu-item ml-6 ${
                            activecategory === "health" && "menu-active"
                          }`}
                        >
                          Health
                        </label>
                        <label
                          onClick={() => handleCategoryChange("science")}
                          className={`menu-item ml-6 ${
                            activecategory === "science" && "menu-active"
                          }`}
                        >
                          Science
                        </label>
                        <label
                          onClick={() => handleCategoryChange("sports")}
                          className={`menu-item ml-6 ${
                            activecategory === "sports" && "menu-active"
                          }`}
                        >
                          Sports
                        </label>
                        <label
                          onClick={() => handleCategoryChange("technology")}
                          className={`menu-item ml-6 ${
                            activecategory === "technology" && "menu-active"
                          }`}
                        >
                          Technology
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
        </aside>
      </div>
    </>
  );
}

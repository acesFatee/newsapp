"use client";

import { Context } from "@/Context/Context";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

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
    setpage,
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
      setpage(1)
      seturl(
        `${process.env.NEXT_PUBLIC_URL}&pageSize=6&page=${1}&category=${category}&country=${country}`
      );
      return;
    }
    setheadingcategory(category[0].toUpperCase() + category.slice(1));
    setcategory(category);
    setpage(1)
    seturl(
      `${process.env.NEXT_PUBLIC_URL}&pageSize=6&page=${1}&category=${category}&country=${country}`
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
    setpage(1)
    seturl(
      `${process.env.NEXT_PUBLIC_URL}&pageSize=6&page=${1}&category=${category}&country=${country}`
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
              <span>NewsHub</span>
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
                    <IoHomeOutline />
                      <span>Latest News</span>
                    </li>
                  </Link>

                  <li onClick={handleThemeChange} className="menu-item">
                 {theme === "dark"? <IoSunnyOutline />:
                  <IoMoonOutline />}
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
                      <MdOutlinePlace />
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
                            src="https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/us.svg"
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
                            src="https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/fr.svg"
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
                            src="https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/it.svg"
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
                      <TbCategory />
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

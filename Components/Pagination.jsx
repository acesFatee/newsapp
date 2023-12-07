"use client";

import { Context } from "@/Context/Context";
import { getLength } from "@/utils/api";
import React, { useContext, useEffect, useState } from "react";

export default function Pagination() {
    const { page, setpage, pages, setpages, seturl, country, category } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLength = async () => {
            const totalLength = await getLength(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=29e01f3d18954fa9af3faecea6e279ad`);
            setpages(Math.ceil(totalLength / 6));
            setLoading(false);
        };

        fetchLength();
    }, [country, category]);

    const handlePage = (pageNumber) => {
        seturl(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=6&page=${pageNumber}&apiKey=29e01f3d18954fa9af3faecea6e279ad`);
        setpage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPages = () => {
        if (loading) {
            return <div className="spinner-simple"></div>;
        }

        const buttons = [];
        for (let i = 0; i < pages; i++) {
            buttons.push(
                <button key={i} onClick={() => handlePage(i + 1)} className={`btn ${page === i+1 && "btn-active"}`}>
                    {i + 1}
                </button>
            );
        }
        return buttons;
    };

    return (
        <>
            <div className="pagination">
                {renderPages()}
            </div>
        </>
    );
}

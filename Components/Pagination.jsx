"use client";

import { Context } from "@/Context/Context";
import { getLength } from "@/utils/api";
import React, { useContext, useEffect, useState } from "react";

export default function Pagination() {
    const { page, setpage, pages, setpages, seturl, country, category, url } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLength = async () => {
            const totalLength = await getLength(`${process.env.NEXT_PUBLIC_URL}&category=${category}&country=${country}`);
            setpages(Math.ceil(totalLength / 6));
            setLoading(false);
        };

        fetchLength();
    }, [country, category]);

    const handlePage = (pageNumber) => {
        seturl(`${process.env.NEXT_PUBLIC_URL}&pageSize=6&page=${pageNumber}&category=${category}&country=${country}`);
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

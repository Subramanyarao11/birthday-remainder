import Head from 'next/head'
import React, { useState, useEffect } from "react";
import axios from "axios";
// import api from "@/services/api";
import { useRouter } from 'next/router'

const Editcourse = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const router = useRouter()
    const { id } = router.query

    const updateBirthday = async (e) => {
        e.preventDefault();
        await axios.put(`/api/${id}`, {
            name: name,
            date: date,
        });
        router.push("/")
    };

    return (
        <>
            <Head>
                <title>Edit Birthday</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <form onSubmit={updateBirthday} className="my-10">
                    <div className="flex flex-col">
                        <div className="mb-5">
                            <label className="font-bold text-slate-700">Name</label>
                            <input
                                type="text"
                                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Update Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label className="font-bold text-slate-700">Date</label>
                            <input
                                type="date"
                                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Update Birthday"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Editcourse;

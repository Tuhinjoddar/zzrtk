
"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchApiData } from "../redux/slice"
import { useEffect } from "react"

export default function ApiData() {

    const dispatch = useDispatch()
    const apiUserData = useSelector((data) => data.username.userApiData)

    useEffect(() => {
        dispatch(fetchApiData())
    }, [])


    return (
        <div>
            <h1 className="text-4xl w-full p-6  bg-slate-600 ">User list from API</h1>
            {/* <button onClick={() => dispatch(fetchApiData())} className="border-2 p-2 text-xl mt-2 bg-slate-600 hover:bg-slate-800 rounded">Load Users</button> */}
            {
                apiUserData.map((item) => (
                    <div key={item.id} className="m-5">
                        <h2>{item.name}</h2>
                    </div>
                ))
            }

        </div>
    )
}
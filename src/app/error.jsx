"use client"

import { useEffect } from "react"

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="my-36 flex justify-center items-center">
            <h1 className="border-r-2 p-2">Something went wrong</h1>
            <button className="p-2 border border-r-2" onClick={()=>reset()}>Try again</button>
        </div>
    )
}

export default Error

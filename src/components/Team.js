import React from "react"
import "./teams.css"

const Team =({source,teamName, count, func, className})=>{
    return(
        <div className={`wrapper ${className}`}>
        <img src={source} alt="team logo" />
        <h3>{teamName}</h3>
        <button onClick={()=>func(teamName)}>Vote</button>
        <p>vote count: {count}</p>
        </div>
    )
}
export default Team;
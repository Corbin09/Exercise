import React from "react";
import Quote from "../components/Quote";

const Dickens = ({ data }) => {
    console.log(data);
    return (
        <div>
            <p>Charles Dickens</p>
            {
                data.map(item => {
                    return <Quote data={item}/>
                })
            }
        </div>
    )
}

export default Dickens;
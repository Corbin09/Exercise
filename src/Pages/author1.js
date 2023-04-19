import React from "react";
import Quote from "../components/Quote";

const Edison = ({ data }) => {
    console.log(data);
    return (
        <div>
            <p>Thomas Edison</p>
            {
                data.map(item => {
                    return <Quote data={item}/>
                })
            }
        </div>
    )
}

export default Edison;
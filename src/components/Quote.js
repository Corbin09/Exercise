import React from "react";

const Quote = ({ data }) => {
    // console.log(data);
    return <div className="author-list">
        <div className="col col-lg-6">
            <figure
                className="bg-white p-3 rounded"
                style={{ borderLeft: ".25rem solid #f68e9d", width: "325px" }}
            >
                <blockquote className="blockquote pb-2">
                    <p>
                        "{data["content"]}"
                    </p>
                </blockquote>
            </figure>
        </div>
    </div>
}

export default Quote;




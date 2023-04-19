import Quote from "../components/Quote";

const Home = ({ data }) => {
    let button = null;

    if(data.author === "Thomas Edison"){
        button = (
            <a href="/thomas-edison" className="nav-link"><b>{data["author"]}</b></a>
        )
    }else{
        button = (
            <a href="/charles-dickens" className="nav-link"><b>{data["author"]}</b></a>
        )
    }
    return (
        <div>
            <Quote key={data._id} data={data} />
            <div className="">
                {button}
                <div className="d-flex">
                    {data["tags"].map((item) => {
                        return <p className="me-3">{item}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
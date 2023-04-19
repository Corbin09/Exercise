import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Edison from './Pages/author1';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Dickens from './Pages/author2';
import { NavLink } from 'react-router-dom';


export default function App() {
  const [authorList, setAuthorList] = useState(null);
  const [number, setNumber] = useState(0);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    getAuthorList().then(data => {
      setAuthorList(data.results);
    });
  }, []);



  if (authorList) {
    if (data1 === null)
      setData1(authorList.filter(item => {
        return item.author === "Thomas Edison";
      }))
    if (data2 === null)
      setData2(authorList.filter(item => {
        return item.author === "Charles Dickens";
      }))
  }

  if (authorList) {
    return (
      <div className="bg-light">
        <div className="navbar bg-light ">
          <NavLink to="/" type='button' className='btn btn-primary mx-auto' style={{ marginTop: "12px" }} onClick={handleClick}>random</NavLink>
        </div>
        <div className='container w-25 p-4'>
          <Routes>
            <Route path="/" element={<Home data={authorList[number]} />} />;
            <Route path="/thomas-edison" element={<Edison data={data1} />} />;
            <Route path="/charles-dickens" element={<Dickens data={data2} />} />;
          </Routes>
        </div>
      </div>
    );
  }

  async function getAuthorList() {
    let response = await axios.get('https://api.quotable.io/quotes');
    let result = response.data;
    return result;
  }

  function handleClick() {
    const min = 0;
    const max = 19;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(randomNumber);
  }
}

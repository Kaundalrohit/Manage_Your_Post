import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";
export default function News(props) {
  /* DECLARING STATES 😁*/

  const [articles, setArticles] = useState([]);
  const [spinner, setSpinner] = useState(true);

  /*RENDER THE DATA USING USEEFFECT HOOKS - With use of aditional function without using AJAX & API's functional code
  Only used simple fetch url then change the url to json 
  This Function Use Async & Await To Render The Data 😁*/

  //  useEffect(() => {
  //   dataHolder();
  // }, []);

  //  const dataHolder = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=86416a0d05754bd88fe033070caf496a`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(parsedData.articles);
  //   setSpinner(false);
  // };

  /* USING THE AJAX & API'S FUNCTIONAL CODE - Direct in useEffect
   This Functional Code Doesn't Need Any Async & Await 😁 */

  // useEffect(() => {
  //   fetchData();
  // });
  // const fetchData = () => {
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd814abfef234304bc723071083cbf60`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setSpinner(false);
  //       setArticles(result.articles);
  //     });
  // };

  /* USING AXIOS FUNCTIONAL CODE TO FETCH DATA 😁 */

  useEffect(() => {
    const ferchData = () => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0f215139a2ca48c08271dee64e458ec3`
        )
        .then((res) => {
          const result = res.data;
          setSpinner(false);
          setArticles(result.articles);
        });
    };
    ferchData();
  }, []);

  /* CHANGES THE TITLE OF PAGE ON CATEGORY CLICK 😁 */

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `INDIA_NEWS-${capitalizeFirstLetter(props.category)}`;

  const myStyle = {
    color: props.mode === "dark" ? "black" : "cyan",
  };

  return (
    <>
      <div className="h1 text-center" style={myStyle}>
        TOP_HEADLINES-{capitalizeFirstLetter(props.category)}
      </div>
      {spinner && <Spinner />}
      <div className="container  mt-3">
        <div className="row justify-content-center">
          {articles.map((element, index) => {
            return (
              <div className="col-lg-6 mb-3" key={index}>
                <div className="card shadow rounded-top ">
                  <img
                    src={
                      !element.urlToImage
                        ? "https://images.indianexpress.com/2022/09/Microsoft-Surface-event-.jpg"
                        : element.urlToImage
                    }
                    className="card-img-top rounded-top"
                    alt="..."
                  />
                  <div
                    className={`card-body rounded-bottom bg-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                  >
                    <h5
                      className={`card-title text-center text-${
                        props.mode === "dark" ? "dark" : "white"
                      }`}
                    >
                      <span
                        className={`text-${
                          props.mode === "dark" ? "danger" : "info"
                        }`}
                      >
                        Title:
                      </span>{" "}
                      {!element.title
                        ? "Click on read more to read in detail.."
                        : element.title}
                    </h5>
                    <p
                      className={`card-text text-center  text-${
                        props.mode === "dark" ? "dark" : "white"
                      }`}
                    >
                      <span
                        className={`text-${
                          props.mode === "dark" ? "danger" : "info"
                        }`}
                      >
                        Discription:
                      </span>{" "}
                      {!element.description
                        ? "Click on read more to read in detail.."
                        : element.description}
                    </p>
                    <p>
                      <span
                        className={`text-${
                          props.mode === "dark" ? "danger" : "info"
                        }`}
                      >
                        Publisted At:{" "}
                        {new Date(element.publishedAt).toGMTString()}
                      </span>{" "}
                    </p>
                    <Link
                      to={element.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn  btn-${
                        props.mode === "dark" ? "danger" : "info"
                      }`}
                    >
                      readmore
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

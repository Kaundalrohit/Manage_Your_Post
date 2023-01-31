import "./App.css";
import Home from "./Components/Home";
import UploadPost from "./Components/UploadPost";
import Filter from "./Components/Filter";
import PostGallery from "./Components/PostGallery";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function App() {
  // Filter State Declaration

  const [dateValue, setDateValue] = useState("");
  const [selectedDateData, setSelectedDateData] = useState<any>("");
  const [post, setPost] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = "http://139.59.47.49:4004/api";
  const limit = 5;

  const ChangeDate = (e: any) => {
    const DateValue = e.target.value;
    setDateValue(DateValue);
  };

  const appendData = () => {
    setLoading(true);
    axios
      .get(
        `${baseUrl}/posts?limit=${limit}&start=1&orderby=0${
          dateValue ? `&date=${dateValue}` : ""
        }`
      )
      .then((response) => {
        setSelectedDateData(response.data);
        setPost(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    return () => {
      appendData();
    };
    // eslint-disable-next-line
  }, []);

  const fetachPaginationData = async (currentPage: any) => {
    const res = await fetch(
      `${baseUrl}/posts?limit=${limit}&start=${currentPage}&${
        dateValue ? `&date=${dateValue}` : ""
      }&orderby=0`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data: any) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetachPaginationData(currentPage);
    setPost(commentsFormServer);
    setSelectedDateData(commentsFormServer);
  };
  // const handleEntailmentRequest = (e: any) => {
  //   e.preventDefault();

  //   console.log("handle request ");
  // };

  return (
    <>
      <Home />
      <PostGallery appendData={appendData} />
      <Filter
        changeDate={ChangeDate}
        dateValue={dateValue}
        appendData={appendData}
      />
      <UploadPost
        dateValue={dateValue}
        appendData={appendData}
        post={post}
        setPost={setPost}
        selectedDateData={selectedDateData}
        loading={loading}
      />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        // onClick={handleEntailmentRequest}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

export default App;

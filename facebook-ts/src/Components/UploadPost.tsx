import userImg from "../Images/userimg.png";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";

type props = {
  dateValue: any;
  appendData: any;
  selectedDateData: any;
  post: any;
  setPost: any;
  loading: any;
};
export default function UploadPost({
  dateValue,
  selectedDateData,
  post,
  setPost,
  loading,
  appendData,
}: props) {
  // State Declaration

  const [text, setText] = React.useState<any>("");
  const [file, setFile] = React.useState<any>(null);
  const [dataId, setDataId] = React.useState<any>("");

  // BaseURL Declaration

  const baseUrl = "http://139.59.47.49:4004/api";

  // Config Declaration

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  // Delete Post

  const deletePost = (id: number) => {
    axios.delete(`${baseUrl}/post/delete/${id}`);
    setPost(
      post.filter((e: any) => {
        return e.id !== id;
      })
    );
    toast("🦄 Post deleted", {
      position: "top-right",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Update Data

  // By Using editPost We can set Previous Data to the Edit Modal

  const editPost = async (id: number) => {
    await axios.get(`${baseUrl}/post/${id}`).then((response) => {
      setText(response.data.post);
      setFile(response.data.background);
      setDataId(response.data.id);
    });
  };

  // By using handleSubmit we can set the filepath of the changed image

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let files = e.target.files[0];
    const formData = new FormData();
    formData.append("file", files);
    try {
      const res = await axios.post(`${baseUrl}/upload/image`, formData, config);
      setFile(res.data.filename);
    } catch (error) {
      toast.warn("Please Upload File below 1mb size");
      console.log(error);
    }
  };

  // By Using updatePost we can put data or changed data to the url

  const updatePost = () => {
    axios
      .put(`${baseUrl}/post`, {
        id: dataId,
        post: text,
        background: file,
      })
      .then((response) => {
        setFile("");
        setText("");
        appendData();
        toast("🦄 Post Edited", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  if (!post) return null;

  const filteredData = !dateValue ? post : selectedDateData;

  if (loading) {
    return <Spinner />;
  }
  return filteredData.length > 0 ? (
    filteredData.map((e: any, index: any) => {
      return (
        <>
          <ToastContainer />
          <section>
            <div
              className="container"
              style={{ width: "100%", maxWidth: "600px", padding: "0" }}
            >
              <div className="row shadow">
                <div className="card col-md-12 p-0 ">
                  <div className="card-header px-3 py-4 d-flex justify-content-between">
                    <div className="user-card-img d-flex">
                      <img
                        src={userImg}
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle my-2 ms-2"
                        alt=""
                      />
                      <div className="user-name">
                        <h4 className="pt-3 ps-3 text-warning">Jerry Luis</h4>
                      </div>
                    </div>
                    <div className="option-btn pt-3">
                      <div className="dropdown">
                        <i
                          role="button"
                          className="bi bi-three-dots-vertical dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>

                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop1"
                            onClick={() => {
                              editPost(e.id);
                            }}
                          >
                            Edit{" "}
                          </li>

                          <li
                            className="dropdown-item"
                            onClick={() => {
                              deletePost(e.id);
                            }}
                          >
                            Delete
                          </li>
                        </ul>
                        <div
                          className="modal fade"
                          id="staticBackdrop1"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          aria-labelledby="staticBackdropLabel1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog ">
                            <div className="modal-content relative">
                              <div className="modal-header">
                                <h5
                                  className="fw-bold text-center"
                                  id="staticBackdropLabel"
                                  style={{ margin: "auto" }}
                                >
                                  Update_Post
                                </h5>
                                <div className="input-group ">
                                  <label
                                    className=""
                                    htmlFor="inputGroupFile01"
                                  >
                                    <i className="bi bi-images edit-photo me-3"></i>
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control d-none"
                                    onChange={(e: any) => handleSubmit(e)}
                                    id="inputGroupFile01"
                                  />
                                </div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  style={{ margin: "0px" }}
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="card-img ">
                                  <img
                                    src={userImg}
                                    className="userImg"
                                    alt=""
                                    style={{ width: "46px" }}
                                  />{" "}
                                  <span className="fw-bold ms-2">
                                    Jerry Luis
                                  </span>
                                </div>
                                <img
                                  src={
                                    file
                                      ? `${baseUrl}/profile_image?profile_image=${file}`
                                      : ""
                                  }
                                  alt=""
                                  className="img-fluid"
                                  style={{ width: "100%", height: "385px" }}
                                />

                                <textarea
                                  rows={5}
                                  cols={34}
                                  value={text}
                                  onChange={(e) => {
                                    setText(e.target.value);
                                  }}
                                  placeholder="Start Typing Here!"
                                  className="text-area-edit"
                                ></textarea>
                              </div>
                              <div className="modal-footer">
                                <button
                                  className="btn btn-secondary d-grid gap-2"
                                  type="button"
                                  data-bs-dismiss="modal"
                                  style={{ width: "466px" }}
                                  onClick={() => {
                                    updatePost();
                                  }}
                                >
                                  Update_Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-img">
                    <figure className="figure m-0">
                      <img
                        src={
                          e.background
                            ? `${baseUrl}/profile_image?profile_image=${e.background}`
                            : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?size=626&ext=jpg&ga=GA1.2.366115855.1664779710"
                        }
                        className="figure-img img-fluid"
                        alt="..."
                        style={{ width: "650px", height: " 416px" }}
                      />
                      <figcaption className="figure-caption m-0">
                        <p>
                          <span className="fw-bold ">CREATED_AT: </span>
                          <span className="text-danger">
                            {new Date(e.created_at).toLocaleString()}
                          </span>
                        </p>
                        {/* <p>{index}</p> */}
                      </figcaption>
                    </figure>
                  </div>
                  <div className="card-text">
                    <span className="overlay-text text-black badge bg-white text-wrap">
                      {e.post}
                    </span>
                  </div>
                </div>
              </div>

              <hr
                className="container"
                style={{
                  width: "100%",
                  maxWidth: "630px",
                  margin: "50px 0px",
                }}
              />
            </div>
          </section>
        </>
      );
    })
  ) : (
    <h1 className="text-center text-danger">{`No Post Found On : ${dateValue}`}</h1>
  );
}

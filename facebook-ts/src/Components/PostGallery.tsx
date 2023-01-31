import userImg from "../Images/userimg.png";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type props = {
  appendData: any;
};
export default function PostGallery({ appendData }: props) {
  // State Declaration

  const [text, setText] = useState<any>("");
  const [file, setFile] = useState<any>(null);

  // Url Declaration

  const baseUrl = "http://139.59.47.49:4004/api";

  // Config Declaration

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  // Function for Getting The Path Of Image In State

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let files = e.target.files[0];
    const formData = new FormData();
    formData.append("file", files);
    try {
      const response = await axios.post(
        `${baseUrl}/upload/image`,
        formData,
        config
      );
      setFile(response.data.filename);
    } catch (error) {
      toast.warn("Please Upload File below 1mb size");
      console.log(error);
    }
  };

  // Post Text or Background image to the URL

  const createPost = () => {
    if (!file) {
      return toast.warn("Please Upload File");
    }
    axios
      .post(`${baseUrl}/post`, {
        post: text,
        background: file,
      })
      .then((response) => {
        setFile("");
        setText("");
        appendData();
      });
    toast("🦄 Post--Created", {
      position: "top-right",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer />
      <section className="">
        <div
          className="container shadow rounded-4"
          style={{ width: "100%", maxWidth: "623px" }}
        >
          <div className="row">
            <div className="card col-md-12 px-4 py-3 shadow ">
              <div className="row d-flex">
                <div className="col-md-1 p-0">
                  <img src={userImg} alt="" className="img-fluid userImg" />
                </div>
                <div className="col-md-11 d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-5 text-start"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    What's on Your Mind?
                  </button>
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
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
                            Create Post
                          </h5>
                          <div className="image-upload me-1">
                            <label htmlFor="file">
                              <i className="bi bi-images me-3"></i>
                            </label>
                            <input
                              id="file"
                              type="file"
                              name="file"
                              onChange={(e: any) => {
                                handleSubmit(e);
                              }}
                              className="me-2 d-none"
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
                          <div className="user-img ">
                            <img
                              src={userImg}
                              className="userImg"
                              alt=""
                              style={{ width: "46px" }}
                            />{" "}
                            <span className="fw-bold ms-2">Jerry Luis</span>
                          </div>
                          <div className="car-img">
                            <img
                              src={
                                file
                                  ? `${baseUrl}/profile_image?profile_image=${file}`
                                  : ""
                              }
                              alt=""
                              className="img-fluid"
                              style={{ width: "480px", height: "277px" }}
                            />
                          </div>
                          <span className="overlay-text badge  text-wrap">
                            <textarea
                              rows={5}
                              cols={34}
                              value={text}
                              onChange={(e) => {
                                setText(e.target.value);
                              }}
                              placeholder="Start Typing Here!"
                              className="text-area"
                            ></textarea>
                          </span>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary d-grid gap-2"
                            type="button"
                            data-bs-dismiss="modal"
                            disabled={text.length === 0}
                            style={{ width: "466px" }}
                            onClick={createPost}
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

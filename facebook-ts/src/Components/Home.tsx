import homeImg from "../Images/bridge.jpg";
import userImg from "../Images/userimg.png";
export default function Home() {
  return (
    <>
      <section className="border-bottom shadow">
        <div
          className="container border-bottom"
          style={{ width: "100%", maxWidth: "623px", padding: "0" }}
        >
          <div className="bgimg">
            <img
              className="img-fluid"
              src={homeImg}
              alt="Not-Found"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            />
          </div>
          <div className="user-img text-center">
            <img
              src={userImg}
              className="rounded-circle img-fluid"
              style={{
                width: "200px",
                height: "200px",
                position: "relative",
                top: "-90px",
              }}
              alt=""
            />
          </div>
          <div
            className="h3 text-center text-warning fw-bold py-4"
            style={{ marginTop: "-90px" }}
          >
            Jerry Luis{" "}
          </div>
          <hr />
          <div
            className="h6 text-primary fw-bold text-center m-0 pt-3"
            style={{ padding: "2px" }}
          >
            <span
              style={{
                borderBottomStyle: "solid",
                borderBottomColor: "blue",
                borderBottomWidth: "3px",
              }}
            >
              Timeline
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

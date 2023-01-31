type props = {
  changeDate: any;
  appendData: any;
  dateValue: any;
};
export default function Filter({ changeDate, appendData, dateValue }: props) {
  return (
    <>
      <section>
        <div
          className="container shadow rounded-4 my-3"
          style={{ width: "100%", maxWidth: "623px", padding: "0" }}
        >
          <div className="col ">
            <div className="col-md-12 px-4 py-4 card shadow ">
              <div className="row  d-flex">
                <div className="col">
                  <div className="heading fw-bold">Post</div>
                </div>
                <div className="col">
                  <div className="text-end">
                    <button
                      style={{ border: "none" }}
                      className="fw-bold bg-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Filter
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title fw-bold m-auto"
                              id="exampleModalLabel"
                            >
                              Post Filter
                            </h5>

                            <button
                              type="button"
                              className="btn-close m-0"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body text-start fw-bold">
                            <h4>Use filter to find posts on your timeline</h4>
                            <h5 className="text-secondary">
                              This is not effect how other see your timeline
                            </h5>
                            <div className="date d-flex">
                              <div
                                className="date-auction border shadow"
                                style={{ width: "400px" }}
                              >
                                <div className="date-field px-3">
                                  <div className="date-label">
                                    <label
                                      htmlFor="date-auction"
                                      className="fw-bold mt-2"
                                    >
                                      Select Date of Post Uploded
                                    </label>
                                  </div>
                                  <div className="date-input my-3">
                                    <input
                                      type="date"
                                      id="date-auction"
                                      onChange={changeDate}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-secondary d-grid gap-2"
                              type="button"
                              data-bs-dismiss="modal"
                              style={{ width: "466px" }}
                              onClick={appendData}
                              disabled={dateValue.length === 0}
                            >
                              Done
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
        </div>
      </section>
    </>
  );
}

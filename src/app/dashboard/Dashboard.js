// Import React
import React from "react";

// Import Bootstrap
import { Row, Col, Card, Table } from "react-bootstrap";
// import { ProgressBar } from "react-bootstrap";
// import { Bar, Doughnut } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-home"></i>
          </span>{" "}
          Dashboard{" "}
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span></span>Overview{" "}
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>
      <Row>
        <Col md={3} className="stretch-card grid-margin">
          <Card className="card bg-gradient-danger card-img-holder text-white">
            <Card.Body>
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Manpower Plans{" "}
                <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">$ 15,0000</h2>
              <h6 className="card-text">Increased by 60%</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="stretch-card grid-margin">
          <Card className="card bg-gradient-info card-img-holder text-white">
            <Card.Body>
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Manpower Actual{" "}
                <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">45,6334</h2>
              <h6 className="card-text">Decreased by 10%</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="stretch-card grid-margin">
          <Card className="card bg-gradient-success card-img-holder text-white">
            <Card.Body>
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Candidate{" "}
                <i className="mdi mdi-diamond mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">95,5741</h2>
              <h6 className="card-text">Increased by 5%</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="stretch-card grid-margin">
          <Card className="card bg-gradient-info card-img-holder text-white">
            <Card.Body>
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Manpower Actual{" "}
                <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">45,6334</h2>
              <h6 className="card-text">Decreased by 10%</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={9} className="grid-margin">
          <Card>
            <Card.Body>
              <Card.Title>Recent Candidate</Card.Title>
              <Table>
                <thead>
                  <tr>
                    <th> Assignee </th>
                    <th> Subject </th>
                    <th> Status </th>
                    <th> Last Update </th>
                    <th> Tracking ID </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/faces/face1.jpg")}
                        className="mr-2"
                        alt="face"
                      />{" "}
                      David Grey{" "}
                    </td>
                    <td> Fund is not recieved </td>
                    <td>
                      <label className="badge badge-gradient-success">
                        DONE
                      </label>
                    </td>
                    <td> Dec 5, 2017 </td>
                    <td> WD-12345 </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/faces/face2.jpg")}
                        className="mr-2"
                        alt="face"
                      />{" "}
                      Stella Johnson{" "}
                    </td>
                    <td> High loading time </td>
                    <td>
                      <label className="badge badge-gradient-warning">
                        PROGRESS
                      </label>
                    </td>
                    <td> Dec 12, 2017 </td>
                    <td> WD-12346 </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/faces/face3.jpg")}
                        className="mr-2"
                        alt="face"
                      />{" "}
                      Marina Michel{" "}
                    </td>
                    <td> Website down for one week </td>
                    <td>
                      <label className="badge badge-gradient-info">
                        ON HOLD
                      </label>
                    </td>
                    <td> Dec 16, 2017 </td>
                    <td> WD-12347 </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/faces/face4.jpg")}
                        className="mr-2"
                        alt="face"
                      />{" "}
                      John Doe{" "}
                    </td>
                    <td> Loosing control on server </td>
                    <td>
                      <label className="badge badge-gradient-danger">
                        REJECTED
                      </label>
                    </td>
                    <td> Dec 3, 2017 </td>
                    <td> WD-12348 </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="grid-margin">
          <Card>
            <Card.Body>
              <Card.Title>Quick Menu</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import "./News.css";

const News = () => {
  return (
    <div>
      <Navigation />
      <div className="news py-5 mt-5">
        <Container>
          <div className="text-center">
            <h1 className="text-center title pb-5">
              LATEST NEWS <br /> And Bloog
            </h1>
          </div>
          <Row lg={3} xs={1} className="g-4">
            <Col>
              <CardGroup data-aos="fade-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="card-image img-thumbnail"
                    src="https://images.unsplash.com/photo-1557867624-cf6aa9237e1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                  <Card.Body>
                    <Card.Title>TRIP ABOUT TO LEAVE</Card.Title>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between pt-3">
                    <div className="comment-icon">
                      <i className="far fa-clock"></i>
                      <span> 15 May 2020</span>
                    </div>
                    <div className="comment-icon">
                      <i className="far fa-comment-alt"></i>
                      <span className="ps-1">0 Comments</span>
                    </div>
                  </Card.Body>

                  <Card.Body className="py-0 description">
                    <Card.Text>
                      It won’t be a bigger problem to find one video game lover
                      in your neighbor. Since the introduction of Virtual
                      Game.one video game lover in“If I was the California
                      tourism industry, I’d be really worried.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="card-footer mx-auto">
                    <Link to="/">Read More</Link>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
            <Col>
              <CardGroup data-aos="fade-up">
                <Card className=" active">
                  <Card.Body>
                    <Card.Title>Golden Gate Bridge, San Francisco</Card.Title>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between pt-3">
                    <div className="comment-icon">
                      <i className="far fa-clock"></i>
                      <span> 15 May 2020</span>
                    </div>
                    <div className="comment-icon">
                      <i className="far fa-comment-alt"></i>
                      <span className="ps-1">0 Comments</span>
                    </div>
                  </Card.Body>
                  <Card.Body className="py-0 description">
                    <Card.Text>
                      The most popular state for tourism in the U.S. endured
                      record wildfires, drought and flooding just this year.
                      “The rate of change has been so dramatic,” says one local
                      scientist.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="card-footer mx-auto">
                    <Link to="/">Read More</Link>
                  </Card.Footer>
                  <Card.Img
                    variant="top"
                    className="card-image img-thumbnail"
                    src="https://images.unsplash.com/photo-1544951445-41958114cdea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </Card>
              </CardGroup>
            </Col>
            <Col>
              <CardGroup data-aos="fade-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="card-image img-thumbnail"
                    src="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                  <Card.Body>
                    <Card.Title>
                      TBrown Pendant Lamp Hanging on Trees
                    </Card.Title>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between pt-3">
                    <div className="comment-icon">
                      <i className="far fa-clock"></i>
                      <span> 15 May 2020</span>
                    </div>
                    <div className="comment-icon">
                      <i className="far fa-comment-alt"></i>
                      <span className="ps-1">0 Comments</span>
                    </div>
                  </Card.Body>
                  <Card.Body className="py-0 description">
                    <Card.Text>
                      he Biden administration has announced that it would lift
                      travel restrictions on Nov. 8 and reopen the United States
                      to fully vaccinated international travelers.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="card-footer mx-auto">
                    <Link to="/">Read More</Link>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default News;

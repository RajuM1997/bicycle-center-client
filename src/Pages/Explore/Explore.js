import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://pacific-beach-63189.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setLoading(false);
  }, [products]);
  return (
    <div className="product">
      <Navigation />
      <Container className="py-5 mt-5">
        <div className="text-center title pb-5">
          <h1>Our Products</h1>
        </div>
        <Row lg={3} xs={1} className="g-4">
          {!loading ? (
            products.map((items) => (
              <Col key={items._id}>
                <CardGroup className="cardGroup">
                  <Card className="card">
                    <div className="card-img">
                      <img
                        className="card-image img-thumbnail"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <div class="panel">
                      <i class="fas fa-heart"></i>
                      <i class="fas fa-share-alt"></i>
                      <i class="fas fa-search"></i>
                    </div>
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                    </Card.Body>
                    <Card.Body className="py-0 description">
                      <Card.Text>{items.description.slice(0, 90)}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Body className=" mb-0 p-0">
                        <div className="product-icon">
                          <Rating
                            initialRating={items.reveiw}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                          ></Rating>
                        </div>
                      </Card.Body>
                    </Card.Body>
                    <Card.Body className="py-0">
                      <Card.Title>
                        Price: <span className="price">${items.price}</span>
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer className="card-footer mx-auto">
                      <Link to={`/orderPlace/${items._id}`}>
                        <button className="common-btn">Buy Now</button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
            ))
          ) : (
            <div className="spiner mx-auto">
              <Spinner
                className="text-center"
                animation="border"
                variant="danger"
              />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Explore;

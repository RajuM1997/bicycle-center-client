import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import swal from "sweetalert";

const MangeProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setLoading(false);
  }, [isDelete]);

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsDelete(!isDelete);
            swal("Good job!", "deleted successfull", "success");
          } else {
            setIsDelete(false);
          }
        });
    }
  };
  return (
    <div className="product">
      <Container className="py-5">
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
                      <button className="update-btn">Updata</button>
                      <button
                        onClick={() => handleDelete(items._id)}
                        className="delete-btn ms-3"
                      >
                        Delete
                      </button>
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

export default MangeProduct;

import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";

import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setLoading(false);
      });
  }, [isDelete, user.email]);

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
    <div responsive="sm md">
      <h1 className="text-center py-5">Your Order: {myOrder.length}</h1>
      <Container>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Product Tile</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              {!Loading ? (
                myOrder?.map((items) => (
                  <tbody className="table-title" key={items?._id}>
                    <tr>
                      <td>{items?.name}</td>
                      <td>{items?.product}</td>
                      <td>{items?.address}</td>
                      <td className="">{items?.email}</td>
                      <td className="">{items?.phone}</td>
                      <td className="">
                        <button
                          onClick={() => handleDelete(items?._id)}
                          className="delete-btn ms-5"
                        >
                          Delete
                        </button>
                        <button className="update-btn ms-2">
                          {items.status}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="spiner mx-auto pt-5">
                  <Spinner className="text-center" animation="border" />
                </div>
              )}
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyOrder;

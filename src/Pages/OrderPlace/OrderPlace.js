import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
import Rating from "react-rating";
import Navigation from "../Shared/Navigation/Navigation";

const OrderPlace = () => {
  const { user } = useAuth();
  console.log(user);

  const { id } = useParams();
  const [status, setStatus] = useState("Panding");
  const [singleProduct, setSingleProduct] = useState({});
  const [result, setResult] = useState(false);

  useEffect(() => {
    fetch(`https://pacific-beach-63189.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      status: status,
    };
    console.log(orderData);
    fetch(`https://pacific-beach-63189.herokuapp.com/order`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal(
            ` "Good job!", ${user.displayName}, your order successfull , "success" `
          );
          setResult();
        }
      });
  };
  return (
    <div>
      <Navigation />
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={singleProduct?.image} className="img-fluid" alt="" />
            <h3>{singleProduct?.title}</h3>
            <h5>Price: ${singleProduct?.price}</h5>
            <div className="product-icon">
              <Rating
                initialRating={singleProduct?.review}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
            </div>
            <div>
              <small>{singleProduct?.description}</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="order text-center py-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  placeholder="email"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("text")}
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("product")}
                  placeholder="Product Name"
                  defaultValue={singleProduct?.title}
                  className="p-2 m-2 w-50"
                />
                <br />
                <input
                  {...register("address")}
                  placeholder="address"
                  type="address"
                  className="p-2 m-2 w-50"
                />
                <br />
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  type="number"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("price")}
                  defaultValue={singleProduct?.price}
                  placeholder="price"
                  className="p-2 m-2 w-50"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Book Now"
                  className="common-btn pt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;

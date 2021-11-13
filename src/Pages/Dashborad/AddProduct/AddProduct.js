import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = () => {
  const [product, setProduct] = useState([]);
  // console.log(product);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://pacific-beach-63189.herokuapp.com/product`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Good job!", "Products Added Successfully", "success");
          setProduct();
        }
      });
  };
  return (
    <div className="order text-center py-5">
      <h2 className="text-center pb-4">Add product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          placeholder="Title"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("reveiw")}
          placeholder="Reveiw"
          type="number"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("price")}
          placeholder="price"
          className="p-2 m-2 w-50"
        />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("image")}
          placeholder="ImageUrl"
          className="p-2 m-2 w-50"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Post Product" className="common-btn" />
      </form>
    </div>
  );
};

export default AddProduct;

import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { RobotSchema } from "../../validations/RobotsValidation";
import { addRobot } from "../../api/httpReuests";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddRobot = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      price: "",
      imageURL: "",
    },
    validationSchema: RobotSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values, actions) {
    actions.resetForm();
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: `${values.name} added`,
      showConfirmButton: false,
      timer: 1500,
    });
    addRobot(values);
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Add Robot</title>
      </Helmet>
      <section id="add-robots">
        <h1 className="text-center text-uppercase">Add Robot</h1>
        <form className="add-form" onSubmit={formik.handleSubmit}>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.name}
            name="name"
            id="standard-basic"
            label="Robot Name"
            variant="standard"
            type="text"
            required
            style={{ width: "300px", marginTop: "20px" }}
            error={formik.errors.name && formik.touched.name ? true : false}
          />
          {formik.errors.name && formik.touched.name && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.name}</p>
          )}
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.desc}
            name="desc"
            id="standard-basic"
            label="Robot Description"
            variant="standard"
            type="text"
            required
            style={{ width: "300px", marginTop: "20px" }}
            error={formik.errors.desc && formik.touched.desc ? true : false}
          />
          {formik.errors.desc && formik.touched.desc && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.desc}</p>
          )}
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.price}
            name="price"
            id="standard-basic"
            label="Robot Price"
            variant="standard"
            type="number"
            required
            style={{ width: "300px", marginTop: "20px" }}
            error={formik.errors.price && formik.touched.price ? true : false}
          />
          {formik.errors.price && formik.touched.price && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.price}</p>
          )}
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.imageURL}
            name="imageURL"
            id="standard-basic"
            label="Robot Image URL"
            variant="standard"
            type="text"
            required
            style={{ width: "300px", marginTop: "20px" }}
            error={
              formik.errors.imageURL && formik.touched.imageURL ? true : false
            }
          />
          {formik.errors.imageURL && formik.touched.imageURL && (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.imageURL}
            </p>
          )}
          <Button
            style={{ width: "200px", display: "block", margin: "20px auto" }}
            color="success"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </form>
      </section>
    </>
  );
};

export default AddRobot;

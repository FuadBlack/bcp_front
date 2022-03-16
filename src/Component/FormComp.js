import React, { useState, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Zəhmət olmasa bu xananı doldurun")
    .min(4, "Minumum 4 simvol olmalıdır")
    .max(20, "Maximum 20 simvol olmalıdır"),
  phone: yup
    .number()
    .required("Zəhmət olmasa bu xananı doldurun")
    .positive()
    .integer("")
    .min(4, "Minimum 4 rəqəm"),
  email: yup.string().required("Zəhmət olmasa bu xananı doldurun"),
  file: yup.mixed().required("Zəhmət olmasa bu xananı doldurun"),
});

export const FormComp = () => {
  
  const handleSubmit = async (data) => {    
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("textarea", data.textarea);
    formData.append("file", data.file);
      
    await axios({
      method: "post",
      url: "http://192.168.1.25:5555/api/add",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
    .then(function (response) {
      //handle success
      console.log(response);
      alert("New User Successfully Added.");
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  };

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    file: "",
    textarea: "",
  };
  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      > 
        {({ setFieldValue }) => (
          <Form>
            <div className="form">
              <div className="row">
                <div className="col-md-6">
                  <div className="name form-group">
                    <Field
                      name="name"
                      autofill
                      type="text"
                      placeholder="Adınız"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger "
                    />
                  </div>
                  <div className="email form-group">
                    <Field name="email" type="email" placeholder="E-poçt" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="phone form-group">
                    <Field name="phone" type="text" placeholder="Nömrəniz" />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="file form-group">
                    <label htmlFor="file">
                      Brief yüklə
                      <Field
                        id="file"
                        name="file"
                        type="file"
                        placeholder="Brief yüklə"
                        value={undefined}
                        onChange={(event) => {
                          setFieldValue('file', event.currentTarget.files[0]);
                        }}
                      />                        
                    </label>
                    <ErrorMessage
                      name="file"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="textarea form-group">
                  <Field
                    as="textarea"
                    name="textarea"
                    placeholder="Layihə haqqında"
                    cols="30"
                    row="5"
                  />
                  <ErrorMessage
                    name="textarea"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Göndər</button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

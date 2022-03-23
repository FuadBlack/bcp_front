import React, { useState, useRef, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Context } from "../Context";
import { useTranslation } from "react-i18next";
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
    .min(4, "Minimum 4 rəqəm olamalıdır"),
  email: yup.string().required("Zəhmət olmasa bu xananı doldurun"),
  file: yup.mixed().required("Zəhmət olmasa bu xananı doldurun"),
});

export const FormComp = () => {
  const { data, setData } = useContext(Context);
  const { i18n, t } = useTranslation();

  const handleSubmit = async (data) => {
    let formData = new FormData();
    console.log(data);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("text", data.text);
    formData.append("file", data.file);

    await axios({
      method: "post",
      url: "http://192.168.1.11:1111/api/add",
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
    text: "",
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
                      placeholder={t("adiniz")}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger "
                    />
                  </div>
                  <div className="email form-group">
                    <Field name="email" type="email" placeholder={t("mail")} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="phone form-group">
                    <Field
                      name="phone"
                      type="text"
                      placeholder={t("nomreniz")}
                    />
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
                        placeholder={t("brief")}
                        value={undefined}
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
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
                    name="text"
                    placeholder={t("layihehaqqinda")}
                    cols="30"
                    row="3"
                  />
                  <ErrorMessage
                    name="text"
                    component="div"
                    classNam
                    e="text-danger"
                  />
                  <div className="form-group d-flex justify-content-between">
                    <div></div>
                    <button type="submit">{t("gonder")}</button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

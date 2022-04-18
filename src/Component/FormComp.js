import React, { useState, useRef, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import brief from '../images/brief.svg';
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Zəhmət olmasa bu xananı doldurun')
    .min(4, 'Minumum 4 simvol olmalıdır')
    .max(20, 'Maximum 20 simvol olmalıdır'),
  phone: yup
    .number()
    .required('Zəhmət olmasa bu xananı doldurun')
    .positive()
    .integer('')
    .min(4, 'Minimum 4 rəqəm olamalıdır'),
  email: yup.string().required('Zəhmət olmasa bu xananı doldurun'),
  file: yup.mixed().required('Zəhmət olmasa bu xananı doldurun'),
  text: yup.string().required('Zəhmət olmasa bu xananı doldurun'),
});

export const FormComp = () => {
  const { i18n, t } = useTranslation();

  const handleSubmit = async (data) => {
    let formData = new FormData();
    console.log(data);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('text', data.text);
    formData.append('file', data.file);

    await axios({
      method: 'post',
      url: 'http://192.168.1.9:5555/api/add',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        alert('New User Successfully Added!');
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    file: '',
    text: '',
  };
  return (
    <div className="w-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="right_top">
              <div className="name form-group">
                <label></label>
                <Field
                  name="name"
                  autofill
                  type="text"
                  placeholder={t('adiniz')}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger "
                />
              </div>
              <div className="phone form-group">
                <label></label>
                <Field name="phone" type="text" placeholder={t('nomreniz')} />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="email form-group">
                <label></label>
                <Field name="email" type="email" placeholder={t('mail')} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div
                className="file form-group"
                // style={{ transform: "translateY(-10px)" }}
              >
                <label htmlFor="file">
                  {t('brief')}
                  <Field
                    id="file"
                    name="file"
                    type="file"
                    placeholder={t('brief')}
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
              <div className="textarea form-group">
                <Field
                  as="textarea"
                  name="text"
                  placeholder={t('layihehaqqinda')}
                  cols="30"
                  row="3"
                />
                <ErrorMessage
                  name="text"
                  component="div"
                  classNam
                  e="text-danger"
                />
              </div>
            </div>

            <div className="button_send form-group ">
              <div className="briefDownload">
                <p>{t('oz_brief-ni_hazırla')}</p>
                <img src={brief} alt="" />
              </div>
              <button className="send_button" type="submit">
                {t('gonder')}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

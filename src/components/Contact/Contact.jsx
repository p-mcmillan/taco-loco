import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "../Button/Button";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values, actions) => {
    try {
      console.log("Submitting data:", values);
      const response = await axios.post(
        "http://localhost:6969/contact",
        values
      );
      console.log(response, "post successful");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error, "Oops, post didn't work, sorry.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    message: Yup.string()
      .max(250, "Message is too long")
      .required("Message is required"),
  });

  return (
    <div className="mx-9 mb-[61px] flex flex-col justify-center items-center h-full">
      <div className="">
        <div className="text-center">
          {/* add font Chango, Regular */}
          <h1 className="text-[40px] text-[#FFFFFF] uppercase mt-9 mb-6 md:mb-8 font-Chango md:text-[78px]">
            contact
          </h1>
        </div>
      </div>

      <div className="md:w-[1540] mx-auto">
        {isSubmitted ? (
          <div className="flex flex-col border p-4 sm:p-6 lg:p-8 dark:border-[#030201]">
            <h2 className="mb-8 text-xl text-[#030201]">
              Thank you for contacting us!
            </h2>
            <p>Your message has been successfully submitted.</p>
          </div>
        ) : (
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              message: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="grid gap-4 md:flex md:gap-x-12">
                <div className="grid grid-cols-1  gap-4">
                  <div>
                    <Field
                      placeholder="Full Name"
                      type="text"
                      name="fullName"
                      id="fullName"
                      className=" mt-[24px] md:mt-0 mb-[16px] font-Helvetica placeholder-white py-3 px-4 block w-[318px] text-[16px] md:text-[19px] text-white  border-[#FFFFFF] bg-black border-[3px] md:w-[658px] md:h-[51px]"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      placeholder="Phone Number"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="mb-[16px] font-Helvetica placeholder-white py-3 px-4 block w-full border-[3px] text-[16px] md:text-[19px] text-white  border-[#FFFFFF] bg-black md:w-[658px] md:h-[51px]"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="Email"
                      className=" mb-[16px] font-Helvetica placeholder-white py-3 px-4 block w-full border-[3px] text-[16px] md:text-[19px] text-white border-[#FFFFFF] bg-black md:w-[658px] md:h-[51px]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div>
                  <Field
                    placeholder="Add comments here…."
                    as="textarea"
                    name="message"
                    id="message"
                    rows="4"
                    className="mb-[16px] font-Helvetica placeholder-white py-3 px-4 block w-full border-[3px] text-[16px] md:text-[19px] text-white border-[#FFFFFF] bg-black md:w-[658px] md:h-[229px]"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <Button
                  className="h-10 w-48 font-Helvetica text-[17px]"
                  type="submit"
                  style={{
                    backgroundColor: "#EB7513",
                    color: "white",
                    height: "42px",
                    width: "196px",
                  }}
                >
                  Submit Now
                </Button>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.css"; // Import the same CSS styles as the login page

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Forgot password form values:", values);
    },
  });

  return (
    <div className="login-container">
      {/* Left side with full-height image */}
      <div
        className="login-left lg:flex"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/800x600/?forgot-password')",
        }}
      >
        <div className="login-left-lg">
          <h1 className="text-4xl font-bold mb-4">Forgot Password</h1>
          <p className="text-lg">
            Reset your password to regain access to your account.
          </p>
        </div>
      </div>

      {/* Right side with forgot password form */}
      <div className="login-right">
        <div className="login-card">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Reset your password
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Remember your password?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import your CSS styles here
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Login form values:", values);
      navigate("/"); // Navigate to the home page after successful login
    },
  });

  return (
    <div className="login-container">
      {/* Left side with full-height image */}
      <div
        className="login-left lg:flex"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/800x600/?login')",
        }}
      >
        <div className="login-left-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg">
            Login to access your account and continue your journey with us.
          </p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="login-right">
        <div className="login-card">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign in to your account
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
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...formik.getFieldProps("password")}
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-actions">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
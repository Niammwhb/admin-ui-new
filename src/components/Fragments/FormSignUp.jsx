import React, { useState } from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log("submit signup diklik");
  };

  return (
    <>
      <div className="mt-10 w-full max-w-sm mx-auto">
        <h2 className="text-center text-xl font-semibold text-gray-900 mb-8">
          Create an account
        </h2>

        <form className="space-y-5">
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Your full name"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="block w-full rounded-md border border-gray-300 px-4 py-3 pr-10 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  {showPassword ? (
                    // eye-off
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19.5C4.5 19.5 1 12 1 12a17.94 17.94 0 014.508-5.873M9.878 4.44A10.05 10.05 0 0112 4.5c7.5 0 11 7.5 11 7.5a17.94 17.94 0 01-4.508 5.873M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3l18 18"
                      />
                    </>
                  ) : (
                    // eye
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1.5 12s3.75-7.5 10.5-7.5S22.5 12 22.5 12 18.75 19.5 12 19.5 1.5 12 1.5 12z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                      />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 mb-2">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary font-medium">
              terms of service.
            </a>
          </p>

          {/* Button – BUKAN submit HTML */}
          <Button type="button" className="w-full" onClick={handleSubmit}>
            Sign up
          </Button>
        </form>
      </div>

      {/* DIVIDER */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03 relative">
        <div className="border border-gray-05 w-full" />
        <div className="px-2 bg-special-mainBg absolute">or sign up with</div>
      </div>

      {/* GOOGLE BUTTON */}
      <div className="mb-8 px-7 w-full max-w-sm mx-auto">
        <Button
          type="button"
          variant="secondary"
          className="w-full flex items-center justify-center"
        >
          <span className="flex items-center justify-center">
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604A23.71 23.71 0 000.214 24c0 3.737.868 7.262 2.407 10.388l7.904-6.051A13.94 13.94 0 019.827 24"
                  fill="#FBBC05"
                />
                <path
                  d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093L39.202 6.4C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.016-9.51 13.182-9.51"
                  fill="#EB4335"
                />
                <path
                  d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.51l-7.909 6.039C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.312-5.849l-7.507-5.804c-2.118 1.334-4.786 2.053-7.805 2.053"
                  fill="#34A853"
                />
                <path
                  d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.09-2.346 5.467-4.8 7.013l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24"
                  fill="#4285F4"
                />
              </g>
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>

      {/* Link */}
      <div className="flex justify-center mb-4">
        <p className="text-xs text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold">
            Sign In Here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormSignUp;

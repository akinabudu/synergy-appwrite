"use client";
import { uid } from "uid/secure";
import React from "react";
import { useFormik } from "formik";
import { ConfigItems } from "../../../../.config";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { HiCheck } from "react-icons/hi";
import { CreateMagic } from "@/app/appwrite/magicUrl";

const SignInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function LoginForm() {
  const [open, setOpen] = React.useState(false);
  // const [close, setClose]=React.useState(false)

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SignInSchema,

    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      setOpen(true);

      await CreateMagic(uid(36), values.email, ConfigItems.APPWRITE_CALLBACK);
      router.push("../../verify-request");
    },
  });

  return (
    <>
      <form
        className="w-4/6 flex flex-col justify-center items-center space-y-2"
        onSubmit={formik.handleSubmit}
      >
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-dark focus:border-primary-dark  block w-2/6 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="name@example.com"
        />
        <button //href='../../verify-request'
          type="submit"
          className="text-gray-900 bg-primary-dark hover:bg-primary/90 focus:ring-2 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-primary/50 mr-2 mb-2"
        >
          Sign-In
        </button>
      </form>

      {open && (
        <div
          id="toast-default"
          className="absolute z-10 right-10 top-10 flex items-center w-full max-w-xs p-4 text-gray-light bg-white rounded-lg shadow dark:text-graylight dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-primary bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <HiCheck />
          </div>
          <div className="ml-3 text-sm font-normal">Logging In</div>
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

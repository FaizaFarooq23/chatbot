import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className='flex justify-center items-center bg-[url("/image.png")] bg-no-repeat bg-cover font-[sans-serif] h-full min-h-screen bg-gray-100 p-4'>
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-8 bg-opacity-85 bg-white rounded-2xl px-6 pt-6 pb-10 shadow-[0_2px_16px_-3px_rgba(173, 216, 230, 0.3))]"
        >
          {/* Header */}
          <div className="text-center">
            <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
          </div>
          <div className="flex flex-col gap-y-4">
            {/* Email Input */}
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm out text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800  "
                placeholder="Enter email"
              />
              <HiOutlineMail className="w-5 h-5 absolute right-2 text-gray-600" />
            </div>

            {/* Password Input */}
            <div className="relative flex items-center">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800 "
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 text-gray-600 focus:outline-none transition-transform duration-300 scale-90 hover:scale-100"
              >
                {showPassword ? (
                  <IoEyeOffOutline className="w-5 h-5" />
                ) : (
                  <IoEyeSharp className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            {/* <div >
              <Link
                href="/forgot-password"
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </div> */}
          </div>

          {/* Submit Button and Register Link */}
          <div className="space-y-8">
            <button
onClick={() => router.push('/dashboard')}
              type="button"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800  focus:outline-none transform transition duration-300 scale-90 hover:scale-100"
            >
              Sign in
            </button>
            <p className="text-gray-800 text-sm text-center">
              Don't have an account?
              <Link
                href="/"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Register here
              </Link>
            </p>
          </div>

       
        </form>
      </div>
    </div>
  );
}

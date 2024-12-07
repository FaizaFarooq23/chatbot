import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import Link from "next/link";
import { TbLockPassword } from "react-icons/tb";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className='flex justify-center bg-[url("/image.png")] bg-no-repeat bg-cover items-center font-[sans-serif] h-full min-h-screen bg-gray-100 p-4'>
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-8 bg-opacity-85  bg-white rounded-2xl px-6 pt-6 pb-10 shadow-[0_2px_16px_-3px_rgba(173, 216, 230, 0.3)]"
        >
          {/* Header */}
          <div className="text-center">
            <h3 className="text-gray-800 text-3xl font-extrabold">Sign up</h3>
          </div>
          <div className="flex flex-col gap-4">
            {/* Name Input */}
            <div className="relative flex items-center">
            <MdPerson />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter name"
              />
            </div>

            {/* Email Input */}
            <div className="relative flex items-center">
                <HiOutlineMail />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter email"
              />
            </div>

            {/* Password Input */}
            <div className=" flex items-center">
          <div>  <TbLockPassword className="" />
          </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter password"
              />
            <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full ml-6 text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Confirm password"
              />
             
            </div>

          </div>
           
          <div className="space-y-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 transform transition duration-300 scale-90 hover:scale-100 focus:outline-none"
            >
              Sign up
            </button>
            <p className="text-gray-800 text-sm text-center">
              Already have an account?
              <Link
                href="/signin"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

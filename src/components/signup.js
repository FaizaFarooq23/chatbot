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
      alert("كلمات المرور غير متطابقة!");
      return;
    }
    console.log("تم إرسال النموذج:", formData);
  };

  return (
    <div className="flex justify-center items-center h-full gap-x-10 min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-8 bg-opacity-85 bg-white px-6 pt-6 pb-10 shadow-[0_2px_16px_-3px_rgba(173, 216, 230, 0.3)] text-right"
          dir="rtl"
        >
          {/* Header */}
          <div className="text-center">
            <h3 className="text-gray-800 text-3xl font-extrabold">تسجيل حساب</h3>
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
                placeholder="أدخل الاسم"
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
                placeholder="أدخل البريد الإلكتروني"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center ">
          <div>   <TbLockPassword /></div> 
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="أدخل كلمة المرور"
              />
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full mr-6 text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="تأكيد كلمة المرور"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 transform transition duration-300 scale-90 hover:scale-100 focus:outline-none"
            >
              تسجيل
            </button>
            <p className="text-gray-800 text-sm ">
              لديك حساب بالفعل؟
              <Link
                href="/"
                className="text-pepsi-blue font-semibold hover:underline ml-1"
              >
                قم بتسجيل الدخول هنا
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className='bg-pepsi-blue bg-[url("/looper.svg")] bg-no-repeat bg-contain bg-left rotate-180 max-w-md w-full h-[440px]'></div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../../App";

// icons
import { CiMail } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
  });

  const [isAgree, setIsAgree] = useState(false);
  const [agreeError, setAgreeError] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoading(true);
    if (!isAgree) {
      setAgreeError("Please Agree to privacy policy!");
      setLoading(false);
      return;
    } else {
      setAgreeError("");
    }

    let data = JSON.stringify({
      email: formData.email,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/sendOTP`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("OTP Sent successfully");
        sessionStorage.setItem("email", formData.email);
        sessionStorage.setItem("name", formData.name);
        sessionStorage.setItem("type", formData.type);
        setLoading(false);
        navigate("/verify");
        setFormData({
          name: "",
          email: "",
          type: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      });
  }

  function submitHandler1(event){
    event.preventDefault();
    setLoading(true);
    if (!isAgree) {
      setAgreeError("Please Agree to privacy policy!");
      setLoading(false);
      return;
    } else {
      setAgreeError("");
    }

    let data = JSON.stringify({
      email: formData.email,
    });
    navigate("/verify");


  }

  return (
    <>
      {/* <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="https://s3groupsnackbae.s3.ap-south-1.amazonaws.com/1721141264218"
        autoPlay
        muted
        loop
        onLoadedData={() => setVideoLoading(false)}
      ></video> */}
      <div
        className={`relative flex items-center justify-center lg:justify-end px-[1rem] md:px-[10rem] w-full h-[100vh] 
          
        `}
      >
        <div className="w-[460px] h-fit flex flex-col px-[2rem] py-[2.5rem] bg-white bottom-3 shadow-2xl relative gap-4 justify-center items-center rounded-xl">
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col gap-y-3"
          >
            <div className="font-bold text-left text-[24px]">
              Create  Account
            </div>
            <p className="text-[#64748B] text-left text-[16px]">
              Enhance your skill{" "}
              <span className="font-bold">Codebet</span>
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex w-full h-[3.5rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                <CiMail className="text-[#64748B] size-[25px]" />
                <input
                  required
                  type="text"
                  placeholder="Brand Name"
                  name="name"
                  value={formData.name}
                  onChange={changeHandler}
                  className="w-full h-full text-[1rem] text-richblack-5 outline-none"
                />
              </div>

              <div className="flex w-full h-[3.5rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                <CiMail className="text-[#64748B] size-[25px]" />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="w-full h-full text-[1rem] text-richblack-5 outline-none"
                />
              </div>

              <div className="flex w-full h-[3.5rem] border rounded-[0.5rem] pl-[12px] pr-5 items-center gap-3 relative">
                <MdLockOutline className="text-[#64748B] size-[25px]" />
                <select
                  className="w-full focus:outline-none p-2 text-[1rem] text-richblack-5 rounded-md"
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={changeHandler}
                >
                  <option value="">Student Type</option>
                  <option value="Cafe">School</option>
                  <option value="Restaurant">Collage</option>
                  <option value="Fine Dining">passout Collage</option>
                 
                </select>
              </div>
            </div>

            <div className="flex justify-between mt-3 items-center">
              <label className="text-[0.95rem] text-[#64748B] font-semibold text-center flex items-center text-nowrap">
                <input
                  type="checkbox"
                  checked={isAgree}
                  onChange={() => setIsAgree(!isAgree)}
                  className="size-[18px] mr-2"
                />
                Agree to our
                <span className="font-bold text-black mx-1">
                  Privacy policy
                </span>{" "}
                &{" "}
                <span className="font-bold text-black mx-1">
                  terms of condition
                </span>
              </label>
            </div>

            {agreeError.length > 0 && (
              <span className="text-red-500">{agreeError}</span>
            )}

            <button  className="bg-[#004AAD] tracking-wider h-12 flex items-center justify-center text-[1.1rem] rounded-[8px] text-white font-bold text-richblack-900 px-[12px] py-[1rem] mt-2">
              {loading ? (
                <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              ) : (
                <span className="text-[1.2rem] font-Roboto">Continue</span>
              )}
            </button>

            <div className="flex gap-2 mt-2 justify-center items-center">
              <p>Already have an account?</p>
              <Link to="/login">
                <span className="text-[#004AAD] text-[1rem] font-semibold">
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
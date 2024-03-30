import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { backend_url } from "../server";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { server } from "../server";
import toast from "react-hot-toast";
import { updateUser } from "../redux/userSlice";
import axios from "axios";

const UserProfile = () => {
  const { currentUser , token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [changesMade, setChangesMade] = useState(false);

  const [formData, setFormData] = useState({});

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setChangesMade(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!changesMade) { // Check if any changes made
      toast("No changes were made.");
      return;
    }


    const config = { headers: { "Content-Type": "application/json " ,  Authorization: `Bearer ${token}` }};

    axios
      .put(`${server}/auth/update-user/${currentUser._id}`, formData , config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(updateUser(res.data.rest));
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          // Display the specific error message received from the backend
          toast.error(err.response.data.error);
        } else {
          // If no specific error message received, display a generic error
          toast.error("An error occurred");
        }
      });
  };

  return (
    <div className="w-full">
      <input type="file" className="hidden" accept="image/*" ref={fileRef} />
      <div className="mx-auto rounded-full border-2 w-32 h-32 border-green-600   ">
        <img
          onClick={() => fileRef.current.click()}
          src={`${backend_url}${currentUser.avatar}`}
          className=" w-full h-full rounded-full object-cover"
        />
      </div>
      <form onSubmit={handleSubmit} className=" mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              defaultValue={currentUser.username}
              className="border outline-none rounded-md p-1"
              id="username"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email Asdress</label>
            <input
              type="email"
              defaultValue={currentUser.email}
              className="border outline-none rounded-md p-1"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              defaultValue={currentUser.phoneNumber}
              className="border outline-none rounded-md p-1"
              id="phoneNumber"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Password</label>
            <div className="flex justify-between rounded-md gap-1 items-center outline-none border rounded bg-white  flex-1">
              <input
                type={passwordVisible ? "text" : "password"}
                className="border w-full outline-none rounded-md p-1"
                id="password"
                onChange={handleChange}
              />
              {passwordVisible ? (
                <FaRegEye
                  className="text-xl me-1"
                  onClick={() => setPasswordVisible(false)}
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setPasswordVisible(true)}
                  className="text-xl me-1"
                />
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-2 mt-4  "
        >
          Edit Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

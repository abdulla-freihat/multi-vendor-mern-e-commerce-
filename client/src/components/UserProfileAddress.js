import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Country, State } from 'country-state-city';
import axios from 'axios';
import { updateUserAddresses, deleteUserAddresses } from "../redux/userSlice";
import { server } from "../server";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const UserProfileAddress = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");
  const [states, setStates] = useState([]); // States based on selected country
  const { currentUser, token } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const addressTypeData = [
    {
      name: 'Default'
    },
    {
      name: 'Home'
    },
    {
      name: 'Office'
    }
  ];

  useEffect(() => {
    // Fetch states based on the selected country
    if (country) {
      const fetchedStates = State.getStatesOfCountry(country);
      setStates(fetchedStates);
    }
  }, [country]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addressType === '' || country === '' || city ==='') {
      toast.error('Please fill all the fields.');
      return;
    }

    const config = { headers: { "Content-Type": "application/json ", Authorization: `Bearer ${token}` } };

    axios
      .put(`${server}/auth/update-user-addresses/${currentUser._id}`, {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType
      }, config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(updateUserAddresses(res.data.user));
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          toast.error(err.response.data.error);
        } else {
          toast.error("An error occurred");
        }
      });

    setOpen(false);
    setCountry("");
    setCity("");
    setAddress1("");
    setAddress2("");
    setZipCode("");
    setAddressType("");
  };

  const handleDeleteAddress = (id) => {
    const config = { headers: { "Content-Type": "application/json ", Authorization: `Bearer ${token}` } };

    axios
      .delete(`${server}/auth/delete-user-addresses/${id}`, config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(deleteUserAddresses(res.data.user));
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          toast.error(err.response.data.error);
        } else {
          toast.error("An error occurred");
        }
      });
  };

  return (
    <div className="w-full">
      {open && (
        <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center p-2 ">
          <div className=" w-full md:w-[60%] lg:w-[45%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h1 className="text-center text-[25px] font-Poppins">
              Add New Address
            </h1>
            <div className="w-full">
              <form aria-required onSubmit={handleSubmit} className="w-full">
                <div className="w-full block p-4">
                  <div className="w-full pb-2">
                    <label className="block pb-2">Country</label>
                    <select
                      name=""
                      id=""
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-md"
                    >
                      <option value="" className="block border pb-2">
                        choose your country
                      </option>

                      {Country.getAllCountries().map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Choose your City</label>
                    <select
                      name=""
                      id=""
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-md"
                    >
                      <option value="" className="block border pb-2">
                        choose your city
                      </option>

                      {states.map((state) => (
                        <option
                          className="block pb-2"
                          key={state.isoCode}
                          value={state.isoCode}
                        >
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address 1</label>
                    <input
                      className="w-[95%] border h-[30px] rounded-md outline-none"
                      type="address"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full pb-2">
                    <label className="block pb-2">Address 2</label>
                    <input
                      className="w-[95%] border h-[30px] rounded-md outline-none"
                      type="address"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                      required
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Zip Code</label>
                    <input
                      type="number"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-[95%] border h-[30px] rounded-md outline-none"
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address Type</label>
                    <select
                      name=""
                      id=""
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}

                      className="w-[95%] border h-[40px] rounded-md"
                    >
                      <option value="" className="block border pb-2">
                        Choose your Address Type
                      </option>

                      {addressTypeData.map((address, index) => (
                        <option key={index} value={address.name}>{address.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className=" w-full pb-2">
                    <button
                      type="submit"
                      className='bg-black text-white py-2 px-4 rounded-md  mt-5 cursor-pointer'
                      required
                      readOnly
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex items-center justify-between ">
        <h1 className="text-lg font-bold">Address </h1>

        <button
          className="bg-black px-8 py-2 rounded-md text-white"
          onClick={() => setOpen(true)}
        >
          Add New
        </button>
      </div>


      {currentUser && currentUser.addresses.map((item, index) => (
        <div key={index} className="w-full bg-white  rounded-md shadow flex flex-col md:flex-row  justify-between px-3 pr-10 mt-5 gap-5 py-3">
          <div className="flex items-center ">
            <h5 className="font-semibold">{item.addressType}</h5>
          </div>

          <div className="flex items-center font-semibold text-sm gap-2">
            <FaLocationDot />
            <h6>{item.address1} {item.address2}</h6>
          </div>

          <div className="flex items-center font-semibold text-sm gap-2">
            <h6>zip code : {item.zipCode}</h6>
          </div>

          <div className="flex items-center font-semibold text-sm gap-2">
            <FaPhoneAlt />
            <h6> {currentUser.phoneNumber}</h6>
          </div>
          <div>
            <AiOutlineDelete onClick={() => handleDeleteAddress(item._id)} className="w-6 h-6 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      ))}

      {currentUser && currentUser.addresses.length === 0 && (
        <h5 className="text-center pt-8 text-[18px]">
          You not have any saved address!
        </h5>
      )}
    </div>
  );
};

export default UserProfileAddress;

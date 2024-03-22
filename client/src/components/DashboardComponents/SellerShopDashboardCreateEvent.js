import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../static/data";
import { eventCreate } from "../../redux/eventSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../server";

const SellerShopDashboardCreateEvent = () => {
  const { seller, token } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDate = (e) => {
    const startDate = new Date(e.target.value);

    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);

    setStartDate(startDate);
    setEndDate(null);
    document.getElementById("end-date").min = minEndDate
      .toISOString()
      .slice(0, 10);
  };

  const handleEndDate = (e) => {
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
  };

  const today = new Date().toISOString().slice(0, 10);

  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : today;

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data ",
        Authorization: `Bearer ${token}`,
      },
    };

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("category", category);
    newForm.append("description", description);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    newForm.append("start_date" , startDate);
    newForm.append("finish_date" , endDate);


    axios
      .post(`${server}/event/create-event`, newForm, config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(eventCreate(res.data.event));

          toast.success(res.data.message);
          setTimeout(() => {
            navigate("/dashboard?tab=dashboard");
          }, 2000);

          setName("");
          setCategory("");
          setDescription("");
          setTags("");
          setOriginalPrice("");
          setDiscountPrice("");
          setStock("");
          setImages([]);
          setStartDate(null);
          setEndDate(null);
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
    <div className=" w-full lg:w-[60%] bg-white rounded-md shadow  p-5 h-[90vh] overflow-y-scroll">
      <h5 className="font-bold text-xl text-center">Create Events</h5>
      {/* event form */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label>
            Name <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            value={name}
            name="name"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1"
            placeholder="Enter your event product name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Description <span className="text-red-600">*</span>
          </label>

          <textarea
            rows={6}
            value={description}
            name="description"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 resize-none"
            placeholder="Enter your event product description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Category<span className="text-red-600">*</span>
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none border border-gray-300 placeholder-gray-400 p-1"
          >
            <option value="Choose a category"> Choose a Category</option>

            {categoriesData &&
              categoriesData.map((category, index) => (
                <option value={category.title} key={index}>
                  {category.title}{" "}
                </option>
              ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Tags</label>

          <input
            type="text"
            value={tags}
            name="tags"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1"
            placeholder="Enter your event product tags..."
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Original Price</label>

          <input
            type="number"
            value={originalPrice}
            name="price"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
            placeholder="Enter your event product price..."
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Price (With Discount) <span className="text-red-600">*</span>
          </label>

          <input
            type="number"
            value={discountPrice}
            name="price"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
            placeholder="Enter your event product price with discount..."
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Event Stock <span className="text-red-600">*</span>
          </label>

          <input
            type="number"
            value={stock}
            name="stock"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
            placeholder="Enter your event product stock..."
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Event Start Date <span className="text-red-600">*</span>
          </label>

          <input
            type="date"
            value={startDate ? startDate.toISOString().slice(0, 10) : ""}
            name="start-date"
            id="start-date"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
         
            min={today}
            onChange={handleStartDate}
          />
        </div>


        <div className="flex flex-col gap-2">
          <label>
            Event End Date <span className="text-red-600">*</span>
          </label>

          <input
            type="date"
            value={endDate ? endDate.toISOString().slice(0, 10) : ""}
            name="end-date"
            id="end-date"
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
           
            min={minEndDate}
            onChange={handleEndDate}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Upload Product Images <span className="text-red-600">*</span>
          </label>

          <input
            type="file"
            name=""
            id="upload"
            multiple
            onChange={handleImageChange}
          />
          <div className="mt-2 flex gap-2 flex-wrap">
            {images &&
              images.map((image, index) => (
                <img
                  src={URL.createObjectURL(image)}
                  key={index}
                  className="w-[100px] h-[100px] object-cover"
                />
              ))}
          </div>
        </div>

        <button type="submit" className="bg-black rounded-md text-white p-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default SellerShopDashboardCreateEvent;

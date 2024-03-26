import React from "react";
import { Link } from "react-router-dom";
import EventsCountDown from "./EventsCountDown";
import { backend_url } from "../server";

const EventCard = ({data}) => {

  return (
    
    <div className="bg-white rounded-md shadow w-full  flex flex-col lg:flex-row items-center mt-3 border p-2 border-orange-400">
      <img
        src={`${backend_url}${data.images[0]}`}
        alt="product image"
      />

      <div className=" text-center p-2 lg:text-start flex flex-col gap-6">
        <h4 className="text-2xl font-bold">{data.name}</h4>
        <p className="text-gray-500 text-sm">
        {data.description}
        </p>

        <div className="flex justify-between">
          <div className="flex gap-2">
           
            <span className="font-semibold text-md">{data.discountPrice}$</span>
            <span className=" text-red-600 line-through">{data.originalPrice}$</span>
          </div>
          <span className="text-green-500">120 Sold</span>
        </div>


        <EventsCountDown data={data} />

        <div className="flex gap-2">
          <Link className="bg-black rounded-md py-2 px-4 text-white">
            See Details
          </Link>
          <Link className="bg-black rounded-md py-2 px-4 text-white">
            Buy Now
          </Link>
        </div>

        <Link to='/events' className="text-orange-400 hover:text-orange-500 cursor-pointer text-end">
          See More Events <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

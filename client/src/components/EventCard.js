import React from "react";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="bg-white rounded-md shadow w-full  flex flex-col lg:flex-row items-center mt-3 ">
      <img
        src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
        alt="product image"
      />

      <div className=" text-center p-2 lg:text-start flex flex-col gap-3">
        <h4 className="text-2xl font-bold">Iphone 12 pro max 8/256GB</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Libero libero, vehicula ut, imperdiet
          nec, pellentesque nec, risus. Donec nec mi sed odio malesuada
          suscipit.
        </p>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className=" text-red-600 line-through">1099</span>
            <span className="font-semibold text-md">999$</span>
          </div>
          <span className="text-green-500">120 Sold</span>
        </div>

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

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiShoppingBag, FiPackage } from "react-icons/fi";
import { backend_url } from "../server";

const SellerShopDashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  return (
    <header className="w-full   ">
      <nav className="w-full shadow p-3   bg-white sticky top-0 left-0 z-30 flex  flex-col sm:flex-row gap-2 items-center  justify-between px-4">
        <Link to="/dashboard" className="text-3xl font-bold text-orange-400">
          Dashboard
        </Link>

        <div className="flex items-center ">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard-events"
              className="cursor-pointer text-[#555] hover:text-orange-400"
            >
              <MdOutlineLocalOffer size={25} />
            </Link>

            <Link
              to="/dashboard-products"
              className="cursor-pointer text-[#555] hover:text-orange-400"
            >
              <FiShoppingBag size={25} />
            </Link>

            <Link
              to="/dashboard-orders"
              className="cursor-pointer text-[#555] hover:text-orange-400"
            >
              <FiPackage size={25} />
            </Link>

            <Link to={`/shop/${seller._id}`}>
              <img
                src={`${backend_url}${seller.avatar}`}
                alt={seller.name}
                className="rounded-full w-12 h-12 object-cover"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SellerShopDashboardHeader;

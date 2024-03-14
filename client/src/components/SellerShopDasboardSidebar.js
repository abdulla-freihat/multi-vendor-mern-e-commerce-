import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdOutlineDashboard ,  MdOutlineLocalOffer} from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { VscNewFile } from "react-icons/vsc";
import { HiOutlineReceiptRefund } from "react-icons/hi2";





import toast from "react-hot-toast";

const SellerShopDashboardSidebar = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className=" w-full bg-white shadow rounded-md md:min-h-screen p-4 pt-8">
      <Link to="/dashboard?tab=dashboard" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <MdOutlineDashboard
            className={`w-6 h-6 ${
              tab === "dashboard" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "dashboard" ? "text-orange-400" : ""
            }`}
          >
            Dashboard
          </span>
        </div>
      </Link>

      <Link to="/dashboard?tab=orders" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <FiShoppingBag 
            className={`w-6 h-6 ${
              tab === "orders" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "orders" ? "text-orange-400" : ""
            }`}
          >
           Orders
          </span>
        </div>
      </Link>

      <Link to="/dashboard?tab=products" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <FiPackage 
            className={`w-6 h-6 ${
              tab === "products" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "products" ? "text-orange-400" : ""
            }`}
          >
            Products
          </span>
        </div>
      </Link>

      <Link to="/dashboard?tab=create-products" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <AiOutlineFolderAdd 
            className={`w-6 h-6 ${
              tab === "create-products" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "create-products" ? "text-orange-400" : ""
            }`}
          >
           Create Products
          </span>
        </div>
      </Link>

      <Link to="/dashboard?tab=events" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <MdOutlineLocalOffer
            className={`w-6 h-6 ${
              tab === "events" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "events" ? "text-orange-400" : ""
            }`}
          >
           Events
          </span>
        </div>
      </Link>

      <Link to="/dashboard?tab=create-events" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <VscNewFile 
            className={`w-6 h-6 ${
              tab === "create-events" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "create-events" ? "text-orange-400" : ""
            }`}
          >
            Create Events
          </span>
        </div>
      </Link>


      

      <Link to="/dashboard?tab=refunds" className="cursor-pointer ">
        <div className="flex items-center  w-full mb-8">
          <HiOutlineReceiptRefund 
            className={`w-6 h-6 ${
              tab === "refunds" ? "text-orange-400" : ""
            }`}
          />
          <span
            className={`font-semibold pl-2 ${
              tab === "refunds" ? "text-orange-400" : ""
            }`}
          >
            Refunds
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SellerShopDashboardSidebar;

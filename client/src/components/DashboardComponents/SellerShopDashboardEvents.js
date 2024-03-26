import React ,{useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link , useParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

import { deleteEventsShop } from "../../redux/eventSlice";
import {server} from '../../server'
import axios from 'axios'
import toast from "react-hot-toast"
import { fetchEventsShop } from "../../App";

const SellerShopDashboardEvents = () => {
  const { events} = useSelector((state) => state.event);
  const {token , seller} = useSelector((state) => state.seller);
  const dispatch= useDispatch();


  useEffect(()=>{
    if(seller){

      dispatch(fetchEventsShop(seller._id))
    }
  
}  , [dispatch])




  const handleDeleteShopEvent = (eventId) => {
  
  
  
    axios
        .delete(`${server}/event/delete-events/${eventId}` ,{

          headers:{
            'Authorization' : `Bearer ${token}`
           }
        })
        .then((res) => {
          
            if(res.data.success === true){
              dispatch(deleteEventsShop(res.data.event));
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

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },

    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },

    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold Out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },

    {
      field: "Preview",
      headerName: "",
      type: "number",
      minWidth: 100,
      flex: 0.8,
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const event_name = d.replace(/\s+/g, "-");

        return (
          <>
            <Link to={`/event/${event_name}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },

    {
      field: "Delete",
      headerName: "",
      type: "number",
      minWidth: 120,
      flex: 0.8,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button>
              <AiOutlineDelete size={20} onClick={()=>handleDeleteShopEvent(params.id)} />
            </Button>
          </>
        );
      },
    },
  ];



 
  const row = [];

  events &&
    events.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$" + item.discountPrice,
        stock: item.stock,
        sold: 10,
      });
    });



   
  return (
    <div className="w-full  bg-white ">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectOnClick
        autoHeight
      />
    </div>
  );
};

export default SellerShopDashboardEvents;

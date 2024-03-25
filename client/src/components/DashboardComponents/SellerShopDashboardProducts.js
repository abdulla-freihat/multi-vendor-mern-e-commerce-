import React ,{useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link , useParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { deleteProductsShop } from "../../redux/productSlice";
import {server} from '../../server'
import axios from 'axios'
import toast from "react-hot-toast"
import { fetchProductsShop } from "../../App";
const SellerShopDashboardProducts = () => {
  const { products } = useSelector((state) => state.product);
  const {token , seller} = useSelector((state) => state.seller);
  const dispatch= useDispatch();
  const params= useParams();


  useEffect(()=>{
    if(seller){

      dispatch(fetchProductsShop(seller._id))
    }
  
}  , [dispatch])

  const handleDeleteShopProduct = (productId) => {
  
  
  
    axios
        .delete(`${server}/product/delete-products/${productId}` ,{

          headers:{
            'Authorization' : `Bearer ${token}`
           }
        })
        .then((res) => {
          
            if(res.data.success === true){
              dispatch(deleteProductsShop(res.data.product));
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
        const product_name = d.replace(/\s+/g, "-");

        return (
          <>
            <Link to={`/product/${product_name}`}>
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
              <AiOutlineDelete onClick={()=>handleDeleteShopProduct(params.id)} size={20} />
            </Button>
          </>
        );
      },
    },
  ];



 
  const row = [];

  products &&
    products.forEach((item) => {
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

export default SellerShopDashboardProducts;

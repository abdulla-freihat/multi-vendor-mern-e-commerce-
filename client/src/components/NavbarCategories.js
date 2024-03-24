import React from "react";
import { categoriesData } from "../static/data";
import { useNavigate } from "react-router-dom";

const NavbarCategories = () => {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    const selectedCategory = event.target.value;
    navigate(`/products?category=${selectedCategory}`);

    window.location.reload();
  };

  return (
    <>
      <select
        className="outline-none border rounded-md h-[5vh] md:h-[5vh] w-[30vw] md:w-[20vw]"
        onChange={handleNavigate}
      >

          <option>Choose Category</option>
        {categoriesData &&
          categoriesData.map((category) => (

            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
      </select>
    </>
  );
};

export default NavbarCategories;

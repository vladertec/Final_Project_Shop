import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("desktop")]: {
    padding: "15px 0px 15px",
    fontSize: "12px",
    width: "80%",
  },
}));

const HomeCategory = () => {
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  return (
    <>
      <div className="homeCategory">
        <Box
          className="homeCategory__title"
          sx={{ color: "primary.light", fontFamily: "fontFamily" }}
        >
          POPULAR WATCHES
        </Box>
        <div className="homeCategory__wrapper">
          {categorieProductList !== undefined &&
            categorieProductList.map((product, index) => {
              return (
                index < 5 && (
                  <div key={product._id} className="homeCategory__type">
                    <Link to="/">
                      <Root className="homeCategory__text-wrapper">
                        <Box
                          className="homeCategory__text"
                          sx={{
                            color: "primary.light",
                            fontFamily: "fontFamily",
                          }}
                        >
                          {product.name.split(" ").slice(0, 2).join(" ")}
                        </Box>
                      </Root>
                      <img src={product.imageUrls[0]} alt="" />
                    </Link>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
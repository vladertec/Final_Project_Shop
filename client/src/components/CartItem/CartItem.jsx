import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQuantity,
  deleteCartItem,
  increaseProductQuantity,
} from "../../store/cart/actions";
import { Box, Button, IconButton, Typography, Stack } from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.cart.isLogin);
  const { product, cartQuantity } = props.item;

  const handleDecrease = () => {
    dispatch(decreaseProductQuantity(product._id, isLogin));
  };

  const handleIncrease = () => {
    dispatch(increaseProductQuantity(product._id, isLogin));
  };

  const deleteItem = () => {
    dispatch(deleteCartItem(product._id, isLogin));
  };

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        sx={{ width: "100%", position: "relative" }}
      >
        <Box
          component={"img"}
          src={product.imageUrls[0]}
          alt="Product photo"
          sx={{
            width: "110px",
            height: "180px",
            objectFit: "cover",
          }}
        />
        <Box sx={{ marginLeft: 1, flexBasis: { desktop: "50%" } }}>
          <Typography
            variant={"subtitle1"}
            component={"h3"}
            sx={{ fontWeight: 700 }}
          >
            {product.name}
          </Typography>
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={1}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
              >
                Price
              </Typography>
              <Typography variable={"body2"} component={"span"}>
                {product.currentPrice}$
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
              >
                Color
              </Typography>
              <Typography variable={"body2"} component={"span"}>
                {product.color}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
              >
                Quantity
              </Typography>
              <Typography variable={"body2"} component={"span"}>
                <IconButton
                  onClick={handleDecrease}
                  sx={{ padding: "5px" }}
                  color={"secondary"}
                >
                  <Remove fontSize="small" />
                </IconButton>
                {cartQuantity}
                <IconButton
                  onClick={handleIncrease}
                  sx={{ padding: "5px" }}
                  color={"secondary"}
                >
                  <Add fontSize="small" />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
              >
                Total
              </Typography>
              <Typography variable={"body2"} component={"span"}>
                {product.currentPrice * cartQuantity} $
              </Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={deleteItem}
          color={"secondary"}
          sx={{
            padding: 0,
            display: { desktop: "none" },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
        <Button
          sx={{
            padding: 0,
            alignSelf: "flex-end",
            flexGrow: 1,
            display: { mobile: "none", desktop: "block" },
          }}
        >
          <Typography
            variant={"body2"}
            sx={{
              color: "secondary.main",
            }}
          >
            Remove from basket
          </Typography>
        </Button>
      </Stack>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          bgcolor: "primary.light",
          marginBottom: 3,
        }}
      />
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;

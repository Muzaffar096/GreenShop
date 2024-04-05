import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import LikeIcon from "../../components/LikeIcon";
import data from "../../data/data.json";
import Plant5 from "../../../public/images/plant5.png";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../components/AddToCart";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = data.slice(38);

  const likedProducts = useSelector((state) => state.likedProducts);
  const productsInCart = useSelector((state) => state.cartProducts);

  function handleCardClick(product, PlantImage) {
    const PRODUCT = { ...product, image: PlantImage };
    navigate(`/shop/${PRODUCT.id}`, { state: { key: PRODUCT } });
  }

  function returnState(product) {
    if (!(likedProducts.length > 1)) {
      return false;
    }
    try {
      for (let i = 0; i < likedProducts.length; i++) {
        let element = likedProducts[i];
        if (element == null) {
          continue;
        }
        if (product.id === element.id) {
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  function isAddedToCart(product) {
    if (!productsInCart.length) {
      return false;
    }

    try {
      for (let i = 0; i < productsInCart.length; i++) {
        const element = productsInCart[i];
        if (!element) {
          continue;
        }
        if (element.id == product.id) {
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  return (
    <Container>
      <h2 className="text-[32px] text-center">Products</h2>
      <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              sx={{
                maxWidth: "256px",
                maxHeight: "480px",
              }}
            >
              <CardActionArea onClick={() => handleCardClick(product, Plant5)}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={product.image}
                  sx={{
                    backgroundColor: "#FBFBFB",
                  }}
                />
                <CardContent>
                  <div className="min-h-[96px] flex flex-col justify-between">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize="21px"
                      sx={{ textOverflow: "ellipsis" }}
                      fontFamily="Cera Pro"
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="text-primary"
                      fontWeight={600}
                    >
                      ${product.price}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <LikeIcon
                  className="cursor-pointer"
                  product={product}
                  state={returnState(product)}
                />
                <AddToCart product={product} state={isAddedToCart(product)} />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};
export default Products;

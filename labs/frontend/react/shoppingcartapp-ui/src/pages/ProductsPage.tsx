import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";
import { CartContext, CartContextProps } from "../contexts/CartContext";

const ProductsPage = () => {
  // Subscribe to the CartContext
  const context = useContext<CartContextProps | undefined>(CartContext);

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    // Hit the REST API on load of the page
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response); // successful response
      setProducts(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err); // error
      // TODO: handle the error`
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product: IProduct) => {
    console.log(product);
    const updatedCartItems = [...context!.cartItems, product];
    console.log;
    context!.addToCart(updatedCartItems);
  };

  return (
    <>
      <h1>Shop Our Products</h1>
      <div className="row">
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {products.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  width={100}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title} </h5>
                  <p>USD. {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;

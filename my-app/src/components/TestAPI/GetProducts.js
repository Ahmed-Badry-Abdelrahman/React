import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [isPending, startTransition] = useState("");
  const [query, setQuery] = useState("");

  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: "20px",
  };
  const container = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  };
  const card = {
    maxWidth: "300px",
    margin: "20px",
    border: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  };
  const img = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  };
  const heading = {
    fontSize: "35px",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
    textAlign: "center",
  };

  const searchHandler = (event) => {
    setSearchProduct(event.target.value);
    // startTransition(() => setQuery(searchProduct));
  };

  //   const filterProducts = products.filter((product) =>
  //     product.category.include(query)
  //   );

  useEffect(() => {
    const FetchData = async () => {
      const url = "https://fakestoreapi.com/products";
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchData();
  }, []);
  return (
    <div style={mainContainer}>
      <h1 style={heading}>Products</h1>
      <div>
        <input type="text" value={searchProduct} onChange={searchHandler} />
        <button>Search</button>
      </div>

      <div style={container}>
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} style={card}>
                <img style={img} src={product.image} alt="product__img" />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DisplayProducts;

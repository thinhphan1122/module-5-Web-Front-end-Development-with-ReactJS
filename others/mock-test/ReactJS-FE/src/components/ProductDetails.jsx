import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          // console.log("error" + error)
          throw error;
        });
    }
  }, [productId]);

  function getProducts() {
    navigate("/");
  }

  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        margin: "auto",
        paddingTop: "50px",
      }}
    >
      <h1>Chi tiết sản phẩm </h1>
      <button
        type="button"
        onClick={getProducts}
        style={{ marginLeft: "80%", marginBottom: "20px", width: "150px" }}
        className="btn btn-success"
      >
        Danh sách
      </button>
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Tên sản phẩm:</b> {product.name}
        </p>
        <p>
          <b style={{ marginRight: "80px" }}>Giá:</b> {product.price}
        </p>
        <p>
          <b style={{ marginRight: "40px" }}>Tồn kho:</b> {product.stock}
        </p>
        <p>
          <b style={{ marginRight: "60px" }}>Mô tả:</b> {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;

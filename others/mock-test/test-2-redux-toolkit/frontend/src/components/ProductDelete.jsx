import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../asset/product.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [productId]);

  function handleSubmit() {
    if (productId) {
      axios
        .delete(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
        .then((res) => {
          alert(`Remove product ${JSON.stringify(res.data)} successfully!!!`);
          navigate("/");
        })
        .catch((err) => {
          throw err;
        });
    }
  }

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
      <h1 style={{ textAlign: "left" }}>Xóa sản phẩm</h1>
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
        <div></div>
        <button type="button" onClick={handleSubmit} className="btn btn-danger">
          Xóa
        </button>
        &nbsp;
        <button type="button" onClick={getProducts} className="btn btn-primary">
          Hủy
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

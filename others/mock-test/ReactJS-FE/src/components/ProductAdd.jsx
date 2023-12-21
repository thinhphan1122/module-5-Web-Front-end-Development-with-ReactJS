import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../asset/product.css"
import "bootstrap/dist/css/bootstrap.min.css";

function ProductAdd() {
    const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
    const {productId} = useParams();
    const isCreate = !productId;
    const [product, setProduct] = useState({});
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

    function handleChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value,
        });
    }

    function getBackProductList() {
        navigate("/");
    }

    function handleSubmit() {
        axios
            .post(`${PRODUCT_MANAGEMENT_API}/products`, product)
            .then((res) => {
                alert(
                    `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
                window.location.href = "/";
            })
            .catch((err) => {
                throw err;
            });
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
            <h1>Thêm sản phẩm</h1>
            <form>
                <div className="input-group mb-3">
                    <label className="input-group-text">Tên sản phẩm</label>
                    <input
                        name="name"
                        value={product.name || ""}
                        onChange={handleChange}
                        placeholder="Tên sản phẩm"
                        className="form-control"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text">Giá</label>
                    <input
                        name="price"
                        type="number"
                        value={product.price || ""}
                        onChange={handleChange}
                        placeholder="Giá"
                        className="form-control"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text">Tồn kho</label>
                    <input
                        name="stock"
                        type="number"
                        value={product.stock || ""}
                        onChange={handleChange}
                        placeholder="Tồn kho"
                        className="form-control"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text">Mô tả</label>
                    <textarea
                        name="description"
                        value={product.description || ""}
                        onChange={handleChange}
                        placeholder="Mô tả sản phẩm"
                        className="form-control"
                        required
                    />
                </div>
                <div style={{textAlign: "left"}}>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary"
                    >
                        Thêm mới
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        onClick={getBackProductList}
                        className="btn btn-danger"
                    >
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductAdd;

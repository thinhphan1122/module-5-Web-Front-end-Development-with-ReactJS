import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/product.css";


function BookList() {
    const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
    const {productId} = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${PRODUCT_MANAGEMENT_API}/products`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                throw err;
            });
    }, [products, productId]);

    function handleCreate() {
        navigate("/products/add");
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
            <div>
                <h1>Danh sách sản phẩm </h1>

                <button
                    type="button"
                    onClick={handleCreate}
                    style={{marginLeft: "80%", marginBottom: "20px", width: "150px"}}
                    className="btn btn-primary"
                >
                    Thêm sản phẩm
                </button>
            </div>

            <table
                border={2}
                className="table " //table-striped
                style={{textAlign: "left"}}
            >
                <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th style={{textAlign: "right", paddingRight: "100px"}}>Giá</th>
                    <th style={{textAlign: "right"}}>Tồn kho</th>
                    <th colSpan={2}></th>
                </tr>
                </thead>

                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id} </td>
                        <td>
                            <a
                                href={`/products/${product.id}`}
                                style={{textDecoration: "none", color: "black"}}
                            >
                                {product.name}
                            </a>
                        </td>

                        <td style={{textAlign: "right", paddingRight: "100px"}}>
                            {product.price}{" "}
                        </td>

                        <td style={{textAlign: "right"}}>{product.stock} </td>

                        <td style={{textAlign: "right"}}>
                            <button className="btn btn-success">
                                <a
                                    href={`/products/edit/${product.id}`}
                                    style={{textDecoration: "none", color: "white"}}
                                >
                                    Cập nhật
                                </a>
                            </button>
                        </td>

                        <td>
                            <button className="btn btn-danger">
                                <a
                                    href={`/products/delete/${product.id}`}
                                    style={{textDecoration: "none", color: "white"}}
                                >
                                    Xóa
                                </a>
                            </button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default BookList;

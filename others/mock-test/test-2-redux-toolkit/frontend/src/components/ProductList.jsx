import React, { useEffect } from "react";
import { selectProductList, getProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProductList);

  const getProductList = async () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    getProductList();

    // eslint-disable-next-line
  }, []);

  function handleCreate(e) {
    e.preventDefault();
    navigate("/product/add");
  }

  return (
    <div>
      <h1>SẢN PHẨM</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hàng tồn</th>
            <th colSpan={2}>
              <button type="button" onClick={handleCreate}>
                Thêm sản phẩm
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id} </td>
              <td>{product.name} </td>
              <td>{product.price} </td>
              <td>{product.stock} </td>
              <td>
                <Link to={`/product/edit/${product.id}`}>Cập nhật</Link>
              </td>
              <td>
                <Link to={`/product/delete/${product.id}`}>Xóa</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

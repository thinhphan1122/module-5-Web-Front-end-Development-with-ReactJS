import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findProducts,
  findProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productAPI";

const initialState = {
  values: null,
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const getproducts = createAsyncThunk("product/list", async () => {
  const response = await findProducts();
  return response.data;
});

export const getproduct = createAsyncThunk("product/detail", async (productId) => {
  const response = await findProduct(productId);

  return response.data;
});

export const addproduct = createAsyncThunk("product/create", async (product) => {
  const response = await createProduct(product);
  return response.data;
});

export const editproduct = createAsyncThunk("product/edit", async (product) => {
  const response = await updateProduct(product);
  return response.data;
});

export const removeproduct = createAsyncThunk("product/remove", async (productId) => {
  const response = await deleteProduct(productId);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Update states of get products action
      .addCase(getproducts.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })

      //Update states of get product action
      .addCase(getproduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getproduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getproduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of add product action
      .addCase(addproduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addproduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addproduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of edit product action
      .addCase(editproduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editproduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(editproduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of remove product action
      .addCase(removeproduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(removeproduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeproduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = productSlice.actions;

export const selectLoading = (state) => state.product.loading;
export const selectError = (state) => state.product.error;
export const selectSuccess = (state) => state.product.success;
export const selectProductList = (state) => state.product.values;
export const selectProductDetail = (state) => state.product.value;
export const selectProductAdded = (state) => state.product.value;
export const selectProductEdited = (state) => state.product.value;
export const selectProductRemoved = (state) => state.product.value;

//Enhancement feature of product slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default productSlice.reducer;

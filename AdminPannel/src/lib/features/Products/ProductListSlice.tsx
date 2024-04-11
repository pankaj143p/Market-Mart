import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchAllProducts,fetchProductsByFilters } from './productAPI';
// import { fetchAllProducts,fetchProductsByFilters, fetchBrands, fetchCategories } from './ProductListApi';
import { fetchAllProducts, fetchProductsByFilters, fetchBrands, fetchCategories, fetchProductById,createProduct } from '@/lib/features/Products/ProductListApi';
const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct: null
};
export const fetchProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    //@ts-ignore
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    //@ts-ignore
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    //@ts-ignore
    return response.data;
  }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  //@ts-ignore
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilters(filter, sort, pagination);
    // The value we return becomes the `fulfilled` action payload
    //@ts-ignore
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    // The value we return becomes the `fulfilled` action payload
    //@ts-ignore
    return response.data;

  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    // The value we return becomes the `fulfilled` action payload
    //@ts-ignore
    return response.data;
  }
);


export const createProductAsync = createAsyncThunk(
  'product/createProduct',
  async (product) => {
    const response = await createProduct(product);
    //@ts-ignore
    return response.data;
    // console.log(pp);
  }
);
// export const updateProductAsync = createAsyncThunk(
//   'product/update',
//   async () => {
//     const response = await createProduct();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // clearSelectedProduct:(state)=>{
    //   state.selectedProduct = null
    // }
    increment: (state) => {
      //@ts-ignore
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
        // });
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })

      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        //@ts-ignore
        state.products.push(action.payload);
      })
  },
});
//@ts-ignore
export const { clearSelectedProduct } = productSlice.actions;

export const { increment } = productSlice.actions;
//@ts-ignore
export const selectAllProducts = (state) => state.product.products;
//@ts-ignore
export const selectBrands = (state) => state.product.brands;
//@ts-ignore

export const selectCategories = (state) => state.product.categories;
//@ts-ignore
export const selectProductById = (state) => state.product.selectedProduct;
//@ts-ignore
export const selectTotalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
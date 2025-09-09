import { createSlice } from "@reduxjs/toolkit";
import Products from "../../Data/ProductsContents";

const initialState = {
    items: Products,
    filteredItem: Products,
    searchTerm: "",
    selectedCategory:"All"
};

const filterProducts = (state) =>{
    return state.items.filter((product)=>{
        const matchSearch = product.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchCateogry = 
        state.selectedCategory === "All" || product.category ===
        state.selectedCategory;
        return matchSearch && matchCateogry;
    })
}

const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setSearchTerm:(state, action) => {
            state.searchTerm = action.payload;
            state.filteredItem = filterProducts(state)        
        },
        setSelectedCategory:(state, action) =>{
            state.selectedCategory= action.payload;
            state.filteredItem = filterProducts(state);

        }
    }
});

export const {setSearchTerm, setSelectedCategory} = ProductSlice.actions;
export default ProductSlice.reducer;
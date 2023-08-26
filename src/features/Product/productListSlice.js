import { fetchAllProducts } from "./productListAPI"

const initialState ={
    value:[]
}

export const fetchAllProductAsync = createAsyncThunk(
    'product/fetchAllProducts',
    async()=>{
        const response = await fetchAllProducts()
        return response.data
    }
)
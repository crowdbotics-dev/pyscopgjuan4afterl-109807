import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testmodel2_list = createAsyncThunk(
  "testModel2s/api_v1_testmodel2_list",
  async payload => {
    const response = await apiService.api_v1_testmodel2_list(payload)
    return response.data
  }
)
export const api_v1_testmodel2_create = createAsyncThunk(
  "testModel2s/api_v1_testmodel2_create",
  async payload => {
    const response = await apiService.api_v1_testmodel2_create(payload)
    return response.data
  }
)
export const api_v1_testmodel2_retrieve = createAsyncThunk(
  "testModel2s/api_v1_testmodel2_retrieve",
  async payload => {
    const response = await apiService.api_v1_testmodel2_retrieve(payload)
    return response.data
  }
)
export const api_v1_testmodel2_update = createAsyncThunk(
  "testModel2s/api_v1_testmodel2_update",
  async payload => {
    const response = await apiService.api_v1_testmodel2_update(payload)
    return response.data
  }
)
export const api_v1_testmodel2_partial_update = createAsyncThunk(
  "testModel2s/api_v1_testmodel2_partial_update",
  async payload => {
    const response = await apiService.api_v1_testmodel2_partial_update(payload)
    return response.data
  }
)
export const api_v1_testmodel2_destroy = createAsyncThunk(
  "testModel2s/api_v1_testmodel2_destroy",
  async payload => {
    const response = await apiService.api_v1_testmodel2_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testModel2sSlice = createSlice({
  name: "testModel2s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_testmodel2_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel2_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel2_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel2_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel2_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel2_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel2_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel2_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_testmodel2_list,
  api_v1_testmodel2_create,
  api_v1_testmodel2_retrieve,
  api_v1_testmodel2_update,
  api_v1_testmodel2_partial_update,
  api_v1_testmodel2_destroy,
  slice: testModel2sSlice
}

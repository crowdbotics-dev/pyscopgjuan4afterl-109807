import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testmodel3_list = createAsyncThunk(
  "testModel3s/api_v1_testmodel3_list",
  async payload => {
    const response = await apiService.api_v1_testmodel3_list(payload)
    return response.data
  }
)
export const api_v1_testmodel3_create = createAsyncThunk(
  "testModel3s/api_v1_testmodel3_create",
  async payload => {
    const response = await apiService.api_v1_testmodel3_create(payload)
    return response.data
  }
)
export const api_v1_testmodel3_retrieve = createAsyncThunk(
  "testModel3s/api_v1_testmodel3_retrieve",
  async payload => {
    const response = await apiService.api_v1_testmodel3_retrieve(payload)
    return response.data
  }
)
export const api_v1_testmodel3_update = createAsyncThunk(
  "testModel3s/api_v1_testmodel3_update",
  async payload => {
    const response = await apiService.api_v1_testmodel3_update(payload)
    return response.data
  }
)
export const api_v1_testmodel3_partial_update = createAsyncThunk(
  "testModel3s/api_v1_testmodel3_partial_update",
  async payload => {
    const response = await apiService.api_v1_testmodel3_partial_update(payload)
    return response.data
  }
)
export const api_v1_testmodel3_destroy = createAsyncThunk(
  "testModel3s/api_v1_testmodel3_destroy",
  async payload => {
    const response = await apiService.api_v1_testmodel3_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testModel3sSlice = createSlice({
  name: "testModel3s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_testmodel3_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel3_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel3_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel3_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel3_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel3_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel3_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel3_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_testmodel3_list,
  api_v1_testmodel3_create,
  api_v1_testmodel3_retrieve,
  api_v1_testmodel3_update,
  api_v1_testmodel3_partial_update,
  api_v1_testmodel3_destroy,
  slice: testModel3sSlice
}
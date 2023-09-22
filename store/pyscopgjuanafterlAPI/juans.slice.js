import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_juan_list = createAsyncThunk(
  "juans/api_v1_juan_list",
  async payload => {
    const response = await apiService.api_v1_juan_list(payload)
    return response.data
  }
)
export const api_v1_juan_create = createAsyncThunk(
  "juans/api_v1_juan_create",
  async payload => {
    const response = await apiService.api_v1_juan_create(payload)
    return response.data
  }
)
export const api_v1_juan_retrieve = createAsyncThunk(
  "juans/api_v1_juan_retrieve",
  async payload => {
    const response = await apiService.api_v1_juan_retrieve(payload)
    return response.data
  }
)
export const api_v1_juan_update = createAsyncThunk(
  "juans/api_v1_juan_update",
  async payload => {
    const response = await apiService.api_v1_juan_update(payload)
    return response.data
  }
)
export const api_v1_juan_partial_update = createAsyncThunk(
  "juans/api_v1_juan_partial_update",
  async payload => {
    const response = await apiService.api_v1_juan_partial_update(payload)
    return response.data
  }
)
export const api_v1_juan_destroy = createAsyncThunk(
  "juans/api_v1_juan_destroy",
  async payload => {
    const response = await apiService.api_v1_juan_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const juansSlice = createSlice({
  name: "juans",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_juan_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_juan_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_juan_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_juan_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_juan_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_juan_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_juan_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_juan_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_juan_list,
  api_v1_juan_create,
  api_v1_juan_retrieve,
  api_v1_juan_update,
  api_v1_juan_partial_update,
  api_v1_juan_destroy,
  slice: juansSlice
}

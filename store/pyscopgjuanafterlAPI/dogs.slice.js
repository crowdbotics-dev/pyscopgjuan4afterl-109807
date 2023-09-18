import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dog_list = createAsyncThunk(
  "dogs/api_v1_dog_list",
  async payload => {
    const response = await apiService.api_v1_dog_list(payload)
    return response.data
  }
)
export const api_v1_dog_create = createAsyncThunk(
  "dogs/api_v1_dog_create",
  async payload => {
    const response = await apiService.api_v1_dog_create(payload)
    return response.data
  }
)
export const api_v1_dog_retrieve = createAsyncThunk(
  "dogs/api_v1_dog_retrieve",
  async payload => {
    const response = await apiService.api_v1_dog_retrieve(payload)
    return response.data
  }
)
export const api_v1_dog_update = createAsyncThunk(
  "dogs/api_v1_dog_update",
  async payload => {
    const response = await apiService.api_v1_dog_update(payload)
    return response.data
  }
)
export const api_v1_dog_partial_update = createAsyncThunk(
  "dogs/api_v1_dog_partial_update",
  async payload => {
    const response = await apiService.api_v1_dog_partial_update(payload)
    return response.data
  }
)
export const api_v1_dog_destroy = createAsyncThunk(
  "dogs/api_v1_dog_destroy",
  async payload => {
    const response = await apiService.api_v1_dog_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_dog_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dog_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dog_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dog_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dog_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dog_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dog_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dog_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_dog_list,
  api_v1_dog_create,
  api_v1_dog_retrieve,
  api_v1_dog_update,
  api_v1_dog_partial_update,
  api_v1_dog_destroy,
  slice: dogsSlice
}

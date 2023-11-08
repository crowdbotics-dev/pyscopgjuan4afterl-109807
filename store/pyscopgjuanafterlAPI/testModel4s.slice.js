import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_testmodel4_list = createAsyncThunk("testModel4s/api_v1_testmodel4_list", async payload => {
  const response = await apiService.api_v1_testmodel4_list(payload);
  return response.data;
});
export const api_v1_testmodel4_create = createAsyncThunk("testModel4s/api_v1_testmodel4_create", async payload => {
  const response = await apiService.api_v1_testmodel4_create(payload);
  return response.data;
});
export const api_v1_testmodel4_retrieve = createAsyncThunk("testModel4s/api_v1_testmodel4_retrieve", async payload => {
  const response = await apiService.api_v1_testmodel4_retrieve(payload);
  return response.data;
});
export const api_v1_testmodel4_update = createAsyncThunk("testModel4s/api_v1_testmodel4_update", async payload => {
  const response = await apiService.api_v1_testmodel4_update(payload);
  return response.data;
});
export const api_v1_testmodel4_partial_update = createAsyncThunk("testModel4s/api_v1_testmodel4_partial_update", async payload => {
  const response = await apiService.api_v1_testmodel4_partial_update(payload);
  return response.data;
});
export const api_v1_testmodel4_destroy = createAsyncThunk("testModel4s/api_v1_testmodel4_destroy", async payload => {
  const response = await apiService.api_v1_testmodel4_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const testModel4sSlice = createSlice({
  name: "testModel4s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_testmodel4_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testmodel4_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testmodel4_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testmodel4_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testmodel4_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testmodel4_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testmodel4_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testmodel4_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_testmodel4_list,
  api_v1_testmodel4_create,
  api_v1_testmodel4_retrieve,
  api_v1_testmodel4_update,
  api_v1_testmodel4_partial_update,
  api_v1_testmodel4_destroy,
  slice: testModel4sSlice
};
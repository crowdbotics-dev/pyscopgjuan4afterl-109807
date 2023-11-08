import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_testdata_list = createAsyncThunk("testData/api_v1_testdata_list", async payload => {
  const response = await apiService.api_v1_testdata_list(payload);
  return response.data;
});
export const api_v1_testdata_create = createAsyncThunk("testData/api_v1_testdata_create", async payload => {
  const response = await apiService.api_v1_testdata_create(payload);
  return response.data;
});
export const api_v1_testdata_retrieve = createAsyncThunk("testData/api_v1_testdata_retrieve", async payload => {
  const response = await apiService.api_v1_testdata_retrieve(payload);
  return response.data;
});
export const api_v1_testdata_update = createAsyncThunk("testData/api_v1_testdata_update", async payload => {
  const response = await apiService.api_v1_testdata_update(payload);
  return response.data;
});
export const api_v1_testdata_partial_update = createAsyncThunk("testData/api_v1_testdata_partial_update", async payload => {
  const response = await apiService.api_v1_testdata_partial_update(payload);
  return response.data;
});
export const api_v1_testdata_destroy = createAsyncThunk("testData/api_v1_testdata_destroy", async payload => {
  const response = await apiService.api_v1_testdata_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const testDataSlice = createSlice({
  name: "testData",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_testdata_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testdata_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testdata_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testdata_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testdata_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testdata_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_testdata_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_testdata_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_testdata_list,
  api_v1_testdata_create,
  api_v1_testdata_retrieve,
  api_v1_testdata_update,
  api_v1_testdata_partial_update,
  api_v1_testdata_destroy,
  slice: testDataSlice
};
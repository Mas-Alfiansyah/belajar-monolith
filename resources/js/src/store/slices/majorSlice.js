import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const getMajors = createAsyncThunk('majors/get', async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/majors');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Gagal mengambil data');
    }
});

export const addMajor = createAsyncThunk('majors/add', async (payload, { rejectWithValue }) => {
    try {
        const response = await api.post('/majors', payload);
        return response.data.data || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Gagal menambah data');
    }
});

export const updateMajor = createAsyncThunk('majors/update', async ({ id, payload }, { rejectWithValue }) => {
    try {
        const response = await api.put(`/majors/${id}`, payload);
        return response.data.data || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Gagal update');
    }
});

export const deleteMajor = createAsyncThunk('majors/delete', async (id, { rejectWithValue }) => {
    try {
        await api.delete(`/majors/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Gagal menghapus');
    }
});

const majorSlice = createSlice({
    name: 'majors',
    initialState: { items: [], loading: false, isFetched: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMajors.pending, (state) => { state.loading = true; })
            .addCase(getMajors.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.isFetched = true;
            })
            // TAMBAH DATA: Muncul di paling bawah
            .addCase(addMajor.fulfilled, (state, action) => {
                // Jika ingin di paling bawah:
                state.items = [...state.items, action.payload];
                // Jika ingin tetap di atas (biasanya standar UX terbaru), gunakan:
                // state.items = [action.payload, ...state.items];
            })

            // EDIT DATA: Pastikan re-render
            .addCase(updateMajor.fulfilled, (state, action) => {
                // Buat pencocokan id yang lebih robust: beberapa API
                // mungkin mengembalikan `id` atau `major_id`.
                const payloadId = action.payload?.id ?? action.payload?.major_id;
                const updatedItems = state.items.map((item) => {
                    const itemId = item?.id ?? item?.major_id;
                    if (String(itemId) === String(payloadId)) {
                        return { ...item, ...action.payload };
                    }
                    return item;
                });
                state.items = updatedItems;
            })

            .addCase(deleteMajor.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    }
});

export default majorSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import majorReducer from './slices/majorSlice';

/**
 * Store adalah pusat penyimpanan state global aplikasi.
 * Di sini kita menggabungkan semua slice (potongan state) yang kita miliki.
 */
export const store = configureStore({
    reducer: {
        // Kita beri nama 'majors' agar bisa dipanggil via: 
        // useSelector((state) => state.majors)
        majors: majorReducer, 
    },
    // Middleware seperti thunk sudah otomatis terpasang di configureStore
});

// Pastikan untuk mengekspor store agar bisa di-import di main.jsx/index.js
export default store;
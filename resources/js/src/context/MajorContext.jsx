import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api/axios';

const MajorContext = createContext();

export const MajorProvider = ({ children }) => {
    const [majors, setMajors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFetched, setIsFetched] = useState(false);

    const fetchMajors = async (force = false) => {
        if (isFetched && !force) return;

        try {
            setLoading(true);
            const response = await api.get('/majors');
            setMajors(response.data);
            setIsFetched(true);
        } catch (error) {
            console.error('Terjadi kesalahan saat mengambil data jurusan:', error);
        } finally {
            setLoading(false);
        }
    };
    const addMajorLocal = (newMajor) => {
        setMajors((prev) => [newMajor, ...prev]);
    };

    // useEffect(() => {
    //     fetchMajors();
    // }, []);

    const deleteMajor = async (id) => {
        try {
            await api.delete(`/majors/${id}`);
            setMajors(prev => prev.filter(major => major.id !== id));
            return { success: true};
        } catch (error) {
            console.error('Terjadi kesalahan saat menghapus data jurusan:', error);
            return { success: false, message: error.response?.data?.message || 'Gagal menghapus jurusan.' };
        }
    };


    return (
        <MajorContext.Provider value={{ majors, loading, isFetched, fetchMajors, addMajorLocal, deleteMajor }}>
            {children}
        </MajorContext.Provider>
    );
};

export const useMajors = () => useContext(MajorContext);
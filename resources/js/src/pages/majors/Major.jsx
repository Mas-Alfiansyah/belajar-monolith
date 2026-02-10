import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useMajors } from '../../context/MajorContext';
import TableSkeleton from '../../components/Skeleton';
import Modal from '../../components/Modal';
import DeleteConfirmModal from '../../components/DeleteConfirmModal';
import AddMajor from './AddMajor';
import EditMajor from './EditMajor';
import api from '../../api/axios'; // 1. Pastikan import api tidak tertinggal
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';

const Majors = () => {
    const { majors, loading, fetchMajors, deleteMajor } = useMajors(); // 2. Gunakan context untuk mengambil data majors

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);


    const handleDelete = async () => {
        setIsDeleteLoading(true);
        try {
            const result = await deleteMajor(selectedMajor.id);
            if (result.success) {
                toast.success('Jurusan berhasil dihapus');
                setShowDeleteModal(false);
            } else {
                toast.error(result.message || 'Gagal menghapus jurusan');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan saat menghapus jurusan');
        } finally {
            setIsDeleteLoading(false);
        }

    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.major_name,
            sortable: true,
            width: '370px',
            cell: row => (
                <div className="flex items-center gap-3 py-3">
                    <div className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold text-gray-500 border border-gray-100 shrink-0">
                        {/* 4. Pastikan field 'abbr' ada di DB, jika tidak gunakan inisial dari major_name */}
                        {row.major_name?.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                        {/* 5. Konsisten menggunakan major_name */}
                        <p className="font-bold text-gray-800 text-[13px]">{row.major_name}</p>
                        <p className="text-[11px] text-gray-400 font-medium">{row.major_code}</p>
                    </div>
                </div>
            ),
        },
        {
            name: 'Code',
            selector: row => row.major_code,
            sortable: true,
            width: '170px',
            cell: row => <span className="text-[12px] font-bold text-gray-600">{row.major_code}</span>
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            width: '280px',
            cell: row => (
                <span className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-tighter ${row.status.toLowerCase() === 'active' ? 'bg-emerald-50 border-2 text-emerald-500' : 'border bg-red-50 text-red-400'
                    }`}>
                    {row.status}
                </span>
            ),
        },
        {
            name: 'Actions',
            $right: true,
            width: '150px',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => {
                            setSelectedMajor(row);
                            setShowEditModal(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all"
                    >
                        <i className="fa-solid fa-pen-to-square text-xs"></i>
                    </button>
                    <button
                        onClick={() => {
                            setSelectedMajor(row);
                            setShowDeleteModal(true);
                        }}
                        className="w-8 h-8 rounded-lg bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all">
                        <i className="fa-solid fa-trash text-xs"></i>
                    </button>
                </div>
            ),
        },
    ];

    const customStyles = {
        table: { style: { backgroundColor: 'transparent' } },
        tableWrapper: { style: { display: 'block' } },
        headCells: { style: { color: '#9CA3AF', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', paddingLeft: '16px' } },
        rows: { style: { minHeight: '64px', borderBottomColor: '#F9FAFB', '&:hover': { backgroundColor: '#FDFDFD' } } },
        pagination: { style: { borderTop: '1px solid #F3F4F6', color: '#9CA3AF', fontWeight: '700' } },
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 px-4 sm:px-0">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-black">Majors List</h1>
                    <p className="text-[14px] text-gray-400 font-medium mt-1">Total {majors.length} majors available.</p>
                </div>

                <div className="flex gap-3">
                    <button onClick={() => setShowAddModal(true)} className="bg-black text-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-gray-800 shadow-lg shadow-black/10 transition-all flex items-center gap-2">
                        <i className="fa-solid fa-plus"></i> Add Major
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm">
                <DataTable
                    columns={columns}
                    data={majors}
                    customStyles={customStyles}
                    pagination
                    responsive
                    highlightOnHover
                    progressPending={loading} // Menampilkan loader bawaan DataTable
                    progressComponent={<TableSkeleton />}
                />
            </div>

            <Modal open={showAddModal} onClose={() => setShowAddModal(false)}>
                <AddMajor
                    onClose={() => setShowAddModal(false)}
                    onSave={() => {
                        fetchMajors(true); // Refresh data setelah simpan
                        setShowAddModal(false);
                    }}
                />
            </Modal>

            <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
                <EditMajor
                    major={selectedMajor} // Samakan nama props dengan di EditMajor.jsx
                    onClose={() => setShowEditModal(false)}
                    onSave={() => {
                        fetchMajors(true); // Refresh data setelah edit); // Refresh data setelah edit
                        setShowEditModal(false);
                    }}
                />
            </Modal>

            <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
                <DeleteConfirmModal
                    majorName={selectedMajor?.major_name}
                    onConfirm={handleDelete}
                    onClose={() => setShowDeleteModal(false)}
                />
            </Modal>


        </div>
    );
};

export default Majors;
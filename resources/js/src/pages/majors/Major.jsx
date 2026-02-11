import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMajor, getMajors, updateMajor, addMajor } from '../../store/slices/majorSlice';
import DataTable from 'react-data-table-component';
import TableSkeleton from '../../components/Skeleton';
import Modal from '../../components/Modal';
import DeleteConfirmModal from '../../components/DeleteConfirmModal';
import AddMajor from './AddMajor';
import EditMajor from './EditMajor';
import { toast } from 'react-toastify';

const Majors = () => {
    const dispatch = useDispatch();
    const { items: majors, loading, isFetched } = useSelector((state) => state.majors);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        if (!isFetched) dispatch(getMajors());
    }, [dispatch, isFetched]);

    const handleDelete = async () => {
        const result = await dispatch(deleteMajor(selectedMajor.id));
        if (deleteMajor.fulfilled.match(result)) {
            toast.success('Jurusan berhasil dihapus');
            setShowDeleteModal(false);
        }
    };

    // --- Style & Columns Original Anda ---
    const columns = [
        {
            name: 'Name',
            selector: row => row.major_name,
            sortable: true,
            width: '370px',
            cell: row => (
                <div className="flex items-center gap-3 py-3">
                    <div className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold text-gray-500 border border-gray-100 shrink-0">
                        {row.major_name?.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
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
                <span className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-tighter ${
                    row.status.toLowerCase() === 'active' ? 'bg-emerald-50 border-2 text-emerald-500' : 'border bg-red-50 text-red-400'
                }`}>
                    {row.status}
                </span>
            ),
        },
        {
            name: 'Actions',
            // use string to avoid styled-components forwarding a boolean to DOM
            right: 'true',
            width: '150px',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <button onClick={() => { setSelectedMajor(row); setShowEditModal(true); }} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                        <i className="fa-solid fa-pen-to-square text-xs"></i>
                    </button>
                    <button onClick={() => { setSelectedMajor(row); setShowDeleteModal(true); }} className="w-8 h-8 rounded-lg bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all">
                        <i className="fa-solid fa-trash text-xs"></i>
                    </button>
                </div>
            ),
        },
    ];

    const customStyles = {
        table: { style: { backgroundColor: 'transparent' } },
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

            <div className="bg-white border border-gray-100 rounded-4xl overflow-hidden shadow-sm">
                <DataTable
                    columns={columns}
                    data={majors}
                    customStyles={customStyles}
                    pagination
                    progressPending={loading}
                    progressComponent={<TableSkeleton />}
                />
            </div>

            {/* Modal Add */}
            <Modal open={showAddModal} onClose={() => setShowAddModal(false)}>
                <AddMajor 
                    onClose={() => setShowAddModal(false)} 
                    onSave={async (formData) => {
                        const res = await dispatch(addMajor(formData));
                        if(addMajor.fulfilled.match(res)) {
                            toast.success("Berhasil menambah jurusan");
                            setShowAddModal(false);
                        }
                    }} 
                />
            </Modal>

            {/* Modal Edit */}
            <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
                <EditMajor 
                    major={selectedMajor} 
                    onClose={() => setShowEditModal(false)} 
                    onSave={async (updatedData) => {
                        const res = await dispatch(updateMajor({ id: selectedMajor.id, payload: updatedData }));
                        if(updateMajor.fulfilled.match(res)) {
                            toast.success("Berhasil memperbarui jurusan");
                            setShowEditModal(false);
                        }
                    }} 
                />
            </Modal>

            <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
                <DeleteConfirmModal majorName={selectedMajor?.major_name} onConfirm={handleDelete} onClose={() => setShowDeleteModal(false)} />
            </Modal>
        </div>
    );
};

export default Majors;
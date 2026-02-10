import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from '../../components/Modal';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

const Students = () => {
    const data = [
        { id: 1, name: 'Amir Baghian', npm: '20251220046', major: 'Informatics Engineering', status: 'Active', photo: 'AB' },
        { id: 2, name: 'Sarah Connor', npm: '20251220047', major: 'Informatics Engineering', status: 'Inactive', photo: 'SC' },
        { id: 3, name: 'John Doe', npm: '20251220048', major: 'Informatics Engineering', status: 'Active', photo: 'JD' },
        { id: 4, name: 'Jane Smith', npm: '20251220049', major: 'Informatics Engineering', status: 'Active', photo: 'JS' },
    ];

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            minWidth: '200px', // Mengunci lebar minimal agar tidak gepeng
            cell: row => (
                <div className="flex items-center gap-3 py-3">
                    <div className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold text-gray-500 border border-gray-100 shrink-0">
                        {row.photo}
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 text-[13px]">{row.name}</p>
                        <p className="text-[11px] text-gray-400 font-medium">Student</p>
                    </div>
                </div>
            ),
        },
        {
            name: 'NPM',
            selector: row => row.npm,
            sortable: true,
            minWidth: '130px',
            cell: row => <span className="text-[12px] font-bold text-gray-600">{row.npm}</span>
        },
        {
            name: 'Major',
            selector: row => row.major,
            sortable: true,
            minWidth: '180px',
            cell: row => <span className="text-[12px] font-bold text-gray-600">{row.major}</span>
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            minWidth: '100px',
            cell: row => (
                <span className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-tighter ${
                    row.status === 'Active' ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-400'
                }`}>
                    {row.status}
                </span>
            ),
        },
        {
            name: 'Actions',
            right: true,
            minWidth: '100px',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                        <i className="fa-regular fa-eye text-xs"></i>
                    </button>
                            <button onClick={() => { setSelectedStudent(row); setShowEditModal(true); }} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                                <i className="fa-solid fa-pen-to-square text-xs"></i>
                            </button>
                </div>
            ),
        },
    ];

    const customStyles = {
        table: { 
            style: { 
                backgroundColor: 'transparent',
            } 
        },
        tableWrapper: {
            style: {
                display: 'block', // Penting untuk scroll horizontal
            },
        },
        headCells: {
            style: {
                color: '#9CA3AF',
                fontSize: '11px',
                fontWeight: '800',
                textTransform: 'uppercase',
                paddingLeft: '16px',
            },
        },
        rows: {
            style: {
                minHeight: '64px', // Memberikan ruang napas di mobile
                borderBottomColor: '#F9FAFB',
                '&:hover': { backgroundColor: '#FDFDFD' },
            },
        },
        pagination: {
            style: {
                borderTop: '1px solid #F3F4F6',
                color: '#9CA3AF',
                fontWeight: '700',
            },
        },
    };

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-black">Students List</h1>
                    <p className="text-[14px] text-gray-400 font-medium mt-1">Total {data.length} students registered.</p>
                </div>
                
                <div className="flex gap-3 px-4 sm:px-0">
                    <button className="flex-1 sm:flex-none bg-gray-50 text-black border border-gray-100 px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                        <i className="fa-solid fa-download"></i> Export Data
                    </button>
                    <button onClick={() => setShowAddModal(true)} className="flex-[2] sm:flex-none bg-black text-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-gray-800 shadow-lg shadow-black/10 transition-all flex items-center justify-center gap-2 text-nowrap">
                        <i className="fa-solid fa-plus"></i> Add Student
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white border-y sm:border border-gray-100 rounded-none sm:rounded-[32px] overflow-hidden shadow-sm">
                <div className="overflow-x-auto"> {/* Wrapper untuk scroll horizontal manual */}
                    <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                        pagination
                        responsive
                        highlightOnHover
                    />
                </div>
            </div>

            {/* Modal */}
            <Modal open={showAddModal} onClose={() => setShowAddModal(false)}>
                <AddStudent onClose={() => setShowAddModal(false)} />
            </Modal>

            {/* Edit Modal */}
            <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
                <EditStudent
                    student={selectedStudent}
                    onClose={() => setShowEditModal(false)}
                    onSave={(updated) => console.log('Updated student', updated)}
                />
            </Modal>
        </div>
    );
};

export default Students;
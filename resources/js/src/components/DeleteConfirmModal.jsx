import React, { useState } from 'react';

const DeleteConfirmModal = ({ majorName, onConfirm, onClose }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleConfirm = async () => {
        setIsDeleting(true);
        await onConfirm();
        setIsDeleting(false);
    };

    return (
        <div className="p-8 text-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-trash-can text-red-500 text-3xl"></i>
            </div>
            
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Hapus Jurusan?</h2>
            <p className="text-gray-500 text-sm mb-8">
                Apakah Anda yakin ingin menghapus jurusan <span className="font-bold text-black">"{majorName}"</span>? Tindakan ini tidak dapat dibatalkan.
            </p>

            <div className="flex gap-3 mt-4">
                <button 
                    onClick={onClose}
                    className="flex-1 py-3 rounded-2xl border border-gray-100 font-bold text-sm text-gray-400 hover:bg-gray-50 transition-all"
                >
                    Batal
                </button>
                <button 
                    onClick={handleConfirm}
                    disabled={isDeleting}
                    className="flex-1 py-3 rounded-2xl bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-200 hover:bg-red-600 transition-all disabled:opacity-50"
                >
                    {isDeleting ? 'Menghapus...' : 'Ya, Hapus'}
                </button>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
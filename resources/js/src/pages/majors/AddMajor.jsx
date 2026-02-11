import React, { useState } from 'react';
import api from '../../api/axios';
import { toast } from 'react-toastify';

const AddMajor = ({ onClose, onSave }) => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('active');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            major_name: name,
            major_code: code,
            description: description,
            status: status
        });
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold tracking-tight text-gray-800">Add New Major</h2>
                <button onClick={onClose} type="button" className="text-gray-400 hover:text-black transition-colors">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Major Name</label>
                        <input
                            value={name} onChange={e => setName(e.target.value)} required
                            className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black text-sm transition-all"
                            placeholder="Informatics..."
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Code</label>
                        <input
                            value={code} onChange={e => setCode(e.target.value)} required
                            className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black text-sm transition-all"
                            placeholder="IF"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Description</label>
                    <textarea
                        value={description} onChange={e => setDescription(e.target.value)}
                        className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black text-sm transition-all"
                        placeholder="Optional details..." rows="2"
                    />
                </div>

                <div className="w-1/2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</label>
                    <select
                        value={status} onChange={e => setStatus(e.target.value)}
                        className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black text-sm appearance-none cursor-pointer"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-gray-50">
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl text-gray-500 font-bold text-xs hover:bg-gray-50 transition-all">
                        Cancel
                    </button>
                    <button
                        type="submit" disabled={loading}
                        className={`px-6 py-2 rounded-xl bg-black text-white font-bold text-xs shadow-lg shadow-black/5 active:scale-95 transition-all ${loading ? 'opacity-50' : ''}`}
                    >
                        {loading ? 'Saving...' : 'Save Major'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMajor;
import React, { useState, useEffect } from 'react';

const EditStudent = ({ student = {}, onClose, onSave }) => {
    const [name, setName] = useState('');
    const [npm, setNpm] = useState('');
    const [major, setMajor] = useState('');

    useEffect(() => {
        setName(student.name || '');
        setNpm(student.npm || '');
        setMajor(student.major || '');
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = { ...student, name, npm, major };
        onSave?.(updated);
        onClose?.();
    };

    return (
        <div className="p-6">
            <h2 className="text-lg font-extrabold mb-4">Edit Student</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-[12px] font-bold text-gray-600">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} required className="w-full mt-2 px-3 py-2 border border-gray-100 rounded-xl" />
                </div>
                <div>
                    <label className="text-[12px] font-bold text-gray-600">NPM</label>
                    <input value={npm} onChange={e => setNpm(e.target.value)} required className="w-full mt-2 px-3 py-2 border border-gray-100 rounded-xl" />
                </div>
                <div>
                    <label className="text-[12px] font-bold text-gray-600">Major</label>
                    <input value={major} onChange={e => setMajor(e.target.value)} className="w-full mt-2 px-3 py-2 border border-gray-100 rounded-xl" />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                    <button type="button" onClick={() => onClose?.()} className="px-4 py-2 rounded-xl border border-gray-100 font-bold text-sm">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-xl bg-black text-white font-bold text-sm">Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;

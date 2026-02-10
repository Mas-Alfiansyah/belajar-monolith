<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Major;
use Illuminate\Support\Facades\DB;

class MajorController extends Controller
{
    public function index()
    {
        $majors = Major::all();
        return response()->json($majors);
    }

    public function store(Request $request)
    {
        $request->validate([
            'major_name' => 'required|string|max:255',
            'major_code' => 'required|string|max:50|unique:majors,major_code',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
        ]);

        try {
            $major = Major::create([
                'major_name' => $request->major_name,
                'major_code' => $request->major_code,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Jurusan berhasil ditambahkan.',
                'data' => $major
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'Terjadi kesalahan saat menambahkan jurusan.',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $major = Major::findOrFail($id);
        
        $request->validate([
            'major_name' => 'required|string|max:255',
            'major_code' => 'required|string|max:50|unique:majors,major_code,'.$id,
            'status' => 'required|in:active,inactive',
        ]);

        $major->update($request->all());

        return response()->json(['status' => 'success', 'message' => 'Data updated']);
    }

    public function destroy($id)
    {
        $major = Major::findOrFail($id);
        $major->delete();

        return response()->json([
            'status' => 'success', 
            'message' => 'Jurusan berhasil dihapus.'
            ]);
    }
}

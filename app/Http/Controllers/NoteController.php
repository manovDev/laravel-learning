<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use App\Models\Store;

class NoteController extends Controller
{

    public function index() {
        //route --> /notes
        $notes = Note::with('store')->orderBy('created_at', 'desc')->paginate(10);

        return view('notes.index', ['notes' => $notes]);
    }

    public function show(Note $note) {
        //route --> /notes/{id}
        $note->load('store');

        return view('notes.show', ['note' => $note]);
    }

    public function create() {
        //route --> /notes/create
        //render a create view (with web form) to users
        $stores = Store::all();

        return view('notes.create', ['stores' => $stores]);
    }

   public function store(Request $request)
    {
        $request->merge([
            'highlight' => $request->has('highlight'),
        ]);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|min:20|max:2000',
            'highlight' => 'boolean',
            'store_id' => 'required|exists:stores,id',
        ]);

        Note::create($validated);

        return redirect()->route('notes.index')->with('success', 'Note Created!');
    }

    public function destroy(Note $note) {
        // --> /notes/{id} (DELETE)
        //handle delete request to delete a note record from table
        $note->delete();

        return redirect()->route('notes.index')->with('success', 'Note Deleted!');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{

    public function index() {
        //route --> /notes
        $notes = Note::orderBy('created_at', 'desc')->paginate(10);

        return view('notes.index', ['notes' => $notes]);
    }

    public function show($id) {
        //route --> /notes/{id}
        $note = Note::findOrFail($id);

        return view('notes.show', ['note' => $note]);
    }

    public function create() {
        //route --> /notes/create
        //render a create view (with web form) to users
        return view('notes.create');
    }

    public function store() {
        // --< /notes (POST)
        //handle POST request to store a new note record in table
    }

    public function destroy($id) {
        // --> /notes/{id} (DELETE)
        //handle delete request to delete a note record from table
    }
}

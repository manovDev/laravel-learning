<x-layout>
<h2>Notes</h2>

{{-- @if($greeting == 'hello')
    <p>Inside if</p>
@endif --}}

<ul>
    @foreach ($notes as $note)
        <li>
           <x-card href="{{ route('notes.show', $note->id) }}" :highlight="$note['highlight'] == true">
                <h3>{{ $note->name }}</h3>
           </x-card>
        </li>
    @endforeach
</ul>

{{ $notes->links() }}
</x-layout>

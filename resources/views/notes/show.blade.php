<x-layout>
    <h2>{{ $note->name }}</h2>

    <div class="bg-gray-200 p-4 rounded">
        <p>
            <strong>Description:</strong> {{ $note->description }}
        </p>
        <p>
            <strong>Hightlight:</strong> {{ $note->highlight }}
        </p>
    </div>
</x-layout>

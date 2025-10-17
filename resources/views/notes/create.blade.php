<x-layout>
  <form action="{{ route('notes.store') }}" method="POST">
    <!-- CSRF token for security -->
    @csrf

    <h2>Create a New Note</h2>

    <!-- Note Name -->
    <label for="name">Note Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value="{{ old('name') }}"
      required
    >

    <!-- Note Hightlight -->
    <label for="highlight" class="flex items-center gap-2">
        <span>Note Highlight:</span>
        <input
            type="checkbox"
            id="highlight"
            name="highlight"
            class="w-4 h-4 accent-green-600"
            {{ old('highlight') ? 'checked' : ''}}
        />
    </label>

    <!-- Note Description -->
    <label for="description">Description:</label>
    <textarea
      rows="5"
      id="description"
      name="description"
      required
    >{{ old('description') }}</textarea>

    <!-- select a store -->
    <label for="store_id">Store:</label>
    <select id="store_id" name="store_id" required>
      <option value="" disabled selected>Select a store</option>
      @foreach ($stores as $store)
        <option value="{{ $store->id }}" {{ $store->id == old('store_id') ? 'selected' : ''}}>
          {{ $store->name }}
        </option>
      @endforeach
    </select>

    <button type="submit" class="btn mt-4">Create Note</button>

    <!-- validation errors -->
    @if ($errors->any())
    <ul class="px-4 py-2 bg-red-100 rounded">
        @foreach ($errors->all() as $error)
        <li class="my-1 text-red-600">{{ $error }}</li>
        @endforeach
    </ul>
    @endif
  </form>
</x-layout>

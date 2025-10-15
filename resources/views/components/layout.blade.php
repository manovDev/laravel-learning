<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes App</title>

    @vite('resources/css/app.css')
</head>
<body>
    <header>
        <nav>
            <h1>Notes App</h1>
            <a href="{{ route('notes.index') }}">All Notes</a>
            <a href="{{ route('notes.create') }}">Create New Note</a>
        </nav>
    </header>
    <main class="container">
        {{ $slot }}
    </main>
</body>
</html>

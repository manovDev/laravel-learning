<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes App</title>

    @vite('resources/css/app.css')
</head>
<body class="text-center px-8 py-12">
    <h1>Learning Laravel | Notes App</h1>
    <p>Click the button to see notes.</p>

    <a href="/notes" class="btn mt-4 inline-block">
        View notes
    </a>
</body>
</html>

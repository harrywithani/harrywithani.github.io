async function loadMarkdown(file) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementById('content').innerHTML = marked(text);
}

// Load a default note on page load
document.addEventListener("DOMContentLoaded", () => {
    loadMarkdown('notes/note1.md');
});

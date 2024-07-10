export default function Footer() {
  return (
    <footer>
      <button hx-post="/clicked" hx-swap="outerHTML">
        Click goblin
      </button>
    </footer>
  );
}

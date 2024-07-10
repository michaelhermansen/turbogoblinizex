import Layout from "../layouts/Root";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>hællæ goblins!</h1>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click goblin
        </button>
      </div>
    </Layout>
  );
}

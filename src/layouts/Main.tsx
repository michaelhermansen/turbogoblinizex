import { Child } from "hono/jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Main({ children }: { children: Child }) {
  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <main class="flex-1 py-4">{children}</main>
      <Footer />
    </div>
  );
}

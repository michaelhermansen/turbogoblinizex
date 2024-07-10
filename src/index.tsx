import { Hono } from "hono";
import Home from "./templates/Home";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Home />);
});

app.post("/clicked", (c) => {
  console.log("clicked");
  return c.text("clicked goblin");
});

export default app;

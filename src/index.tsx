import { Hono } from "hono";
import Home from "./templates/Home";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Home />);
});

app.post("/clicked", (c) => {
  console.log("click the goblin");
  return c.text("you clicked goblin!! :==0");
});

export default app;

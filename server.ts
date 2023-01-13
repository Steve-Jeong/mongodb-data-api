import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import router from "./routes.ts";

const PORT = 3936;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`Server listening on port ${PORT}`);

import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { BookRouter } from "./testOakRouter.ts";

const app = new Application();
const router = new Router()
router
  .get('/', (ctx) => {
    ctx.response.body = 'Hello, world Homepage'
  })

router.use('/book', BookRouter.routes());    

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8083 });
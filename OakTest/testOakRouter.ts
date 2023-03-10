import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "11",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

export const BookRouter = new Router();
// export const router = new Router();
BookRouter
  .get("/", (context) => {
    context.response.body = "Hello world! Book Router";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id);
    }
  });


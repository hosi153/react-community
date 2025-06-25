import { http, HttpResponse } from "msw";
import { posts } from "../data/posts";
import { products } from "../data/products";

export const handlers = [
  // http.get('/api/posts', () => {
  //   return HttpResponse.json(posts);
  // }),

  http.get("/api/products", () => {
    return HttpResponse.json(products);
  }),

  http.post("/api/login", () => {
    return HttpResponse.json({ message: "로그인 성공" });
  }),
];

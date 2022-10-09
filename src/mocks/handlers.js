import { rest } from "msw";

export const handlers = [
  //post
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    //request - response - context
    return res(
      ctx.json([
        { name: "choco", imagePath: "images/choco.png" },
        { name: "choco", imagePath: "images/choco.png" },
      ])
    );
  }),
  //get
];

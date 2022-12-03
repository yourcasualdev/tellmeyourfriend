import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { gameRouter } from "./game";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  game: gameRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

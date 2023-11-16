import { z } from "zod";

export const CopyList = z.object({
  id: z.string(),
  boardId: z.string(),
});

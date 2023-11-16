import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateCard } from "./schema";

export type InputType = z.infer<typeof CreateCard>;
export type ReturnType = ActionState<InputType, Card>;

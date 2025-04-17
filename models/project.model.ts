import { z } from "zod";

export const ProjectSchema = z.object({
    project: z.string(),
    repo: z.string(),
  });
  

export type ProjectInput = z.infer<typeof ProjectSchema>;

import { createEnv } from "@t3-oss/env-core"
import { z } from "zod/v4"

const env = createEnv({
  server: {
    WEB_ORIGIN: z.string().optional().default("https://quiz.henrikrank.ee"),
    SOCKET_PORT: z.string().optional(),
    SOCKER_PORT: z.string().optional(),
  },

  runtimeEnv: {
    WEB_ORIGIN: process.env.WEB_ORIGIN,
    SOCKET_PORT: process.env.SOCKET_PORT ?? process.env.SOCKER_PORT,
    SOCKER_PORT: process.env.SOCKER_PORT,
  },
})

export default env

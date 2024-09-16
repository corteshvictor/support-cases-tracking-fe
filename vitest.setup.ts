import { afterAll, afterEach, beforeAll } from 'vitest'

import { server } from './src/mocks/server.ts'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

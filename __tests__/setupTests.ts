import '@testing-library/jest-dom'
import { afterEach, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { vi } from 'vitest'

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  cleanup()
})

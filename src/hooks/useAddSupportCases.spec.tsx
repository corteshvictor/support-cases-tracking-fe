import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http, HttpResponse } from 'msw'

import { CASE, NEW_CASE } from 'mocks/data'
import { server } from 'mocks/server'
import { SUPPORT_CASES_API_URL } from 'shared/constants'
import { useSupportCases} from './useSupportCases'
import { useAddSupportCases } from './useAddSupportCases'

describe('useAddSupportCases Hook', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    queryClient.clear()
  })

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

  test('useAddSupportCases adds an item and updates the cache', async () => {
    const { result } = renderHook(useAddSupportCases, { wrapper })

    await waitFor(async () => {
      result.current.mutate(NEW_CASE)
    });

    const items = queryClient.getQueryData(['support_cases'])
    expect(items).toStrictEqual([CASE])
  })

  test.only('useAddSupportCases handles error and reverts to previous state', async () => {
    server.use(
      http.post(`${SUPPORT_CASES_API_URL}/support_cases`, () => {
        return HttpResponse.error()
      })
    )

    const { result: resultItems } = renderHook(useSupportCases, { wrapper })
    const { result: resultAddItem } = renderHook(useAddSupportCases, { wrapper })

    await waitFor(() => {
      expect(resultItems.current.isLoading).toBe(false)
      resultAddItem.current.mutate(NEW_CASE)
      expect(resultAddItem.current.isError).toBe(true)
    })
  })
})

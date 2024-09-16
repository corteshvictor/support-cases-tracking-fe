import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner";

import { createSupportCase } from 'services/support-cases'

export function useAddSupportCases () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createSupportCase,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['support_cases'], exact: true })

      const previousItems = queryClient.getQueryData(['support_cases'])
      const randomNumber = Math.floor(Math.random() * 900) + 101
      const newItem = { id: randomNumber, isLoading: true, ...variables }

      queryClient.setQueryData(['support_cases'], () => [newItem])

      return { previousItems }
    },
    onSuccess: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['support_cases'], exact: true })
      queryClient.setQueryData(['support_cases'], () => [data])
    },
    onError: (error, _variables, context) => {
      queryClient.setQueryData(['support_cases'], context?.previousItems)
      toast.error(error.message)
    },
  })
}

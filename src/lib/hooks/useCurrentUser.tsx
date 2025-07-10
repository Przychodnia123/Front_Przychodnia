import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '@/services/getCurrentUser'

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getCurrentUser(),
    retry: false,
  })
}

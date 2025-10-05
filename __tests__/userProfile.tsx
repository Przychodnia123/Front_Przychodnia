import { describe, it, expect, vi, Mock } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserProfile from '@/app/(auth)/user-profile/page'
import mockToast from 'react-hot-toast'
import { UserPageContent as mockUserPageContent } from '@/utilities/UserPageContent'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@/lib/hooks/useCurrentUser'

type MockUser = {
  data: unknown
  error: { message: string; cause: number } | null
  isPending: boolean
}

vi.mock('next/navigation', () => ({ useRouter: vi.fn() }))
vi.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { dismiss: vi.fn(), error: vi.fn() },
}))
vi.mock('@/utilities/UserPageContent', () => ({
  UserPageContent: vi.fn(() => <div data-testid='user-content' />),
}))
vi.mock('@/lib/hooks/useCurrentUser', () => ({ useCurrentUser: vi.fn() }))
vi.mock('@/lib/consts/routes', () => ({ routes: { signIn: '/sign-in' } }))

const mockUseCurrentUser = useCurrentUser as unknown as Mock
const mockUseRouter = vi.mocked(useRouter)

const defaultRouterMock = {
  push: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
}

function setupUserProfile(mockUser: MockUser, routerMock = defaultRouterMock) {
  mockUseCurrentUser.mockReturnValue(mockUser)
  mockUseRouter.mockReturnValue(routerMock)
  render(<UserProfile />)
}

describe('UserProfile', () => {
  it('renders user data', () => {
    const user = { name: 'Test User' }
    setupUserProfile({ data: user, error: null, isPending: false })
    expect(screen.getByTestId('user-content')).toBeInTheDocument()
    expect(mockUserPageContent).toHaveBeenCalledWith({ user }, {})
  })

  it('shows toast error when error occurs', () => {
    setupUserProfile({
      data: null,
      error: { message: 'Error!', cause: 400 },
      isPending: false,
    })
    expect(mockToast.dismiss).toHaveBeenCalled()
    expect(mockToast.error).toHaveBeenCalledWith('Error!', { duration: 2000 })
  })

  it('redirects to sign in on 401 error', () => {
    const push = vi.fn()
    setupUserProfile(
      {
        data: null,
        error: { message: 'Unauthorized', cause: 401 },
        isPending: false,
      },
      { ...defaultRouterMock, push }
    )
    expect(mockToast.dismiss).toHaveBeenCalled()
    expect(mockToast.error).toHaveBeenCalledWith('Unauthorized', {
      duration: 2000,
    })
    expect(push).toHaveBeenCalledWith('/sign-in')
  })
})

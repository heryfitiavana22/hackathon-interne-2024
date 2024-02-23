import { create } from 'zustand';
import { useEffect, useState } from 'react';
import { AuthStatus, UserAuth } from './auth.type';
import { UserService } from '../user/user.service';

type AuthStore = {
  user: UserAuth;
  status: AuthStatus;
  setUser: (user: UserAuth) => void;
};

const useAuthStore = create<AuthStore>((set) => {
  return {
    user: undefined,
    status: 'unknown',
    setUser: (user: UserAuth) => set({ user, status: authStatusFactory(user) }),
  };
});

export function useAuth() {
  const { user, status, setUser } = useAuthStore();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    new Promise(async () => {
      const response = await UserService.me();
      if (response.status === 200 && response.data)
        return setUser(response.data);
      return setUser(null);
    });
  }, [refetch]);

  return {
    user,
    status,
    setUser,
    refetchUser: () => {
      setRefetch(!refetch);
    },
  };
}

export function authStatusFactory(user: UserAuth) {
  let authStatus: AuthStatus;
  switch (user) {
    case undefined:
      authStatus = 'unknown';
      break;
    case null:
      authStatus = 'guest';
      break;
    default:
      authStatus = 'authenticated';
      break;
  }
  return authStatus;
}

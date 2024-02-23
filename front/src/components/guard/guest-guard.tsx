import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';

export function GuestGuard({ children }: GuestGuardProps) {
  const { status } = useAuth();

  if (status == 'unknown') return <div>loading...</div>;

  if (status == 'authenticated') return <Navigate to={'/'} />;

  return <>{children}</>;
}

type GuestGuardProps = PropsWithChildren<{}>;

import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';

export function AuthenticatedGuard({ children }: AuthenticatedGuardProps) {
  const { status } = useAuth();

  if (status == 'unknown') return <div>Loading</div>;

  if (status == 'guest') return <Navigate to={'/login'} />;

  return <>{children}</>;
}

type AuthenticatedGuardProps = PropsWithChildren<{}>;

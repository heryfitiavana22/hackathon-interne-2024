import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';
import { socket } from '../../socket-io';

export function AuthenticatedGuard({ children }: AuthenticatedGuardProps) {
  const { status, user } = useAuth();

  useEffect(() => {
    let id: number = null;
    if (user) {
      navigator.geolocation.getCurrentPosition((pos) => {
        socket.emit('new-truck', {
          pseudo: user.pseudo,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
      id = navigator.geolocation.watchPosition((pos) => {
        socket.emit('truck-updated', {
          pseudo: user.pseudo,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }
    return () => {
      if (id !== null) navigator.geolocation.clearWatch(id);
    };
  }, [user]);

  if (status == 'unknown') return <div>Loading</div>;

  if (status == 'guest') return <Navigate to={'/login'} />;

  return <>{children}</>;
}

type AuthenticatedGuardProps = PropsWithChildren<{}>;

import { AccessTokenPersistence } from '../auth/auth.persistence';
import { useAuth } from '../auth/use-auth';
import { AuthenticatedGuard } from '../components/guard/authenticated-guard';

export function Home() {
  const { refetchUser } = useAuth();
  return (
    <AuthenticatedGuard>
      <div>Home page</div>
      <div>
        <button
          onClick={() => {
            AccessTokenPersistence.remove();
            refetchUser();
          }}
        >
          Deconnecter
        </button>
      </div>
    </AuthenticatedGuard>
  );
}

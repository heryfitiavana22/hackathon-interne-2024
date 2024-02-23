import { PropsWithChildren } from 'react';
import { useLogin } from './use-login';
import { GuestGuard } from '../../components/guard/guest-guard';
import { Button } from '../../components/button/button';

export function Login({}: LoginProps) {
  const { onSubmit, register } = useLogin();

  return (
    <GuestGuard>
      <div>
        <div>
          <h2>re-jwt</h2>
        </div>

        <div>
          <form method="post" onSubmit={onSubmit()}>
            <div>
              <label htmlFor="pseudo">pseudo :</label>
              <input
                type="text"
                id="pseudo"
                placeholder="herydj"
                {...register('pseudo', { required: true })}
              />
            </div>
            <div>
              <label htmlFor="password">mot de passe :</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: true })}
              />
            </div>

            <div>
              <Button>Se connecter</Button>
            </div>
          </form>
        </div>
      </div>
    </GuestGuard>
  );
}

type LoginProps = PropsWithChildren<{}>;

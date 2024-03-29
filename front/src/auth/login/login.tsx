import { PropsWithChildren } from 'react';
import { useLogin } from './use-login';
import { GuestGuard } from '../../components/guard/guest-guard';
import { Button } from '../../components/button/button';
import './login.css';

export function Login({}: LoginProps) {
  const { onSubmit, register } = useLogin();
  // const [isCreate, setCreate] = useState(false);

  return (
    <GuestGuard>
      <div className="Login">
        <div className="container">
          <div className="form-container sign-in-container">
            <form method="post" onSubmit={onSubmit()}>
              <h2>Se connecter</h2>
              <span className="text">Veuillez remplir les champs</span>
              <div className="inputs">
                {/* <label htmlFor="pseudo">Pseudo:</label> */}
                <div className="input-container">
                  <img className="icon" src="mail.svg" />
                  <input
                    type="text"
                    id="pseudo"
                    className="input"
                    placeholder="herydj"
                    {...register('pseudo', { required: true })}
                  />
                </div>
                <div className="input-container">
                  <img className="icon" src="lock.svg" />
                  <input
                    type="password"
                    id="password"
                    className="input"
                    placeholder="mot de passe"
                    {...register('password', { required: true })}
                  />
                </div>
              </div>

              <div>
                <Button size="lg">Se connecter</Button>
              </div>
            </form>
            {/* </div> */}
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <img src="./image/trash.jpg" alt="" className="trash" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestGuard>
  );
}

type LoginProps = PropsWithChildren<{}>;

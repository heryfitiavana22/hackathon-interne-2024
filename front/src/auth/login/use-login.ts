import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../use-auth';
import { LoginValue } from '../auth.type';
import { AuthService } from '../auth.service';
import { AccessTokenPersistence } from '../auth.persistence';

export function useLogin() {
  const { refetchUser } = useAuth();
  const { register, handleSubmit } = useForm<LoginValue>();

  const submit: SubmitHandler<LoginValue> = async ({ pseudo, password }) => {
    const response = await AuthService.login({ pseudo, password });
    if (response.data) {
      AccessTokenPersistence.save(response.data.access_token);
      return refetchUser();
    }
  };

  return {
    register,
    onSubmit: () => handleSubmit(submit),
  };
}

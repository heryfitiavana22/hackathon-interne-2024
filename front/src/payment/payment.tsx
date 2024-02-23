import './payement.css';
import { Input } from '../components/input/input';
import { Button } from '../components/button/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
export function Payment() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    reset();
  };
  return (
    <div className="payment">
      <div className="container">
        <div className="message">
          <h1>Faites partie du changement</h1>
          <h2>soutenez le développement urbain</h2>
		  <img src="trash.png" alt="" className='trash-image' />
        </div>

        <div className="form-container">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="title">
              <h2>Payer par carte</h2>
            </div>

            <div>
              <Input
                type="text"
                label="Montant:"
                className="input"
                {...register('montant', { required: true })}
              />
              {errors.montant && (
                <p className="alert ">This field is required</p>
              )}
            </div>

            <div>
              <label htmlFor="">Information de la Carte:</label>
              <Input
                type="text"
                placeholder="Numéro"
                className="input"
                {...register('cardNumber', { required: true })}
              />
              {errors.cardNumber && (
                <p className="alert ">This field is required</p>
              )}
            </div>

            <div className="item">
              <div className="item-input">
                <Input
                  placeholder="MM/AA"
                  {...register('date', { required: true })}
                />
                {errors.date && <p className="alert">This field is required</p>}
              </div>
              <div className="item-input">
                <Input
                  placeholder="Code CVC"
                  {...register('codeCVC', { required: true })}
                />
                {errors.codeCVC && (
                  <p className="alert">This field is required</p>
                )}
              </div>
            </div>
            <Button type="submit" className="button-payer" >
              Payer 
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

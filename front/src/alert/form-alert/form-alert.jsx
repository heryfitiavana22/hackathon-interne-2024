import { useState } from 'react';
import './form-alert.css';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { useForm } from 'react-hook-form';
import { AlertService } from '../alert.service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import { H1 } from '../../components/typography/typography';
function FormAlert() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const imageFile = data.files[0];
        console.log(data);
        console.log(imageFile);
        const response = await AlertService.create({
          imageFile,
          place: data.place,
          latitude,
          longitude,
        });
        if (response.status === 200) {
          toast.success('Alerte lance');
          navigate(-1);
        }
      },
      () => {
        toast.error('Veuillez autorise la localisation');
      },
    );
  };

  return (
    <>
      <div className="form-alert-contenaire">
        <div className="form-alert-image">
          <img
            src="image/form-alert-img-removebg-preview.png"
            alt="Image_alert"
            style={{ width: '70%' }}
          ></img>
        </div>
        <div className=".form">
          <H1>Des ordures ?</H1>
          <form>
            <div className="form-alert-imgLabel">
              <label
                for="imageUpload"
                style={{ marginBottom: '5px', color: ' #494949' }}
              >
                Téléchargez une image :
              </label>
              <input type="file" id="imageUpload" name="imageUpload" />
            </div>
            <div className="inp-content">
              <Input
                label="Entrez un lieu :"
                id="lieu"
                name="lieu"
                placeholder="Antsobolo, arret 147"
                className=".inp-txt"
              />
            </div>

            <Button>Soumettre</Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default FormAlert;

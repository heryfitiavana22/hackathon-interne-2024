import { useState } from 'react';
import './form-alert.css';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { H1 } from '../../components/typography/typography';
function FormAlert() {
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

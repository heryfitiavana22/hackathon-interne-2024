import { useState } from 'react';
import './form-alert.css';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
function FormAlert() {
  return (
    <div className="form-alert-contenaire">
      <div className="form-alert-image">
        <img
          src="image/form-alert-img.jpg"
          alt="Image_alert"
          style={{ width: '100%' }}
        ></img>
      </div>
      <form>
        <div className="form-alert-imgLabel">
          <label for="imageUpload">Téléchargez une image :</label>
          <input type="file" id="imageUpload" name="imageUpload" />
        </div>
        <Input
          label="Entrez un lieu :"
          id="lieu"
          name="lieu"
          placeholder="Antsobolo, arret 147"
        />

        <Button>Soumettre</Button>
      </form>
    </div>
  );
}
export default FormAlert;

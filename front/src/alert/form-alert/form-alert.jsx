import { useState } from "react";
import "./form-alert.css";
function FormAlert(){

    return(
    <div className="form-alert-contenaire">
        <div className="form-alert-image">
            <img src="image/form-alert-img.jpeg" alt="Image_alert" style={{width:"100%"}}></img>
        </div>
        <form >
            <div className="form-alert-imgLabel">
                <label for="imageUpload">Téléchargez une image :</label>
                <input type="file" id="imageUpload" name="imageUpload" />
                
            </div>
            <div className="form-alert-lieuLabel">
                <label for="lieu">Entrez un lieu :</label>
                <input type="text" id="lieu" name="lieu" placeholder="Antananarivo, 4è arrondissement, Antsobolo"/>
            </div>
            <button type="submit" id="form-alert-button">Soumettre</button>
        </form>
    </div>
    )
}
export default FormAlert
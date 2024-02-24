import { AccessTokenPersistence } from '../auth/auth.persistence';
import { useAuth } from '../auth/use-auth';
import { AuthenticatedGuard } from '../components/guard/authenticated-guard';
import './home.css';
import React, { useState, useEffect } from 'react';
import { H1, H2, H6 } from '../components/typography/typography';
import { Button } from '../components/button/button';
import CamionIcons from './../components/icons/example';
import AjoutIcons from './../components/icons/ajout';
import PayementIcons from './../components/icons/payement';
import TrashIcons from './../components/icons/trash';
import AlertIcons from './../components/icons/alert';
import { Link } from 'react-router-dom';
import FacebookIcons from './../components/icons/facebook';
import InstaIcons from '../components/icons/insta';
import ReactIcons from '../components/icons/react';
import JsIcons from '../components/icons/js';


export function Home() {
  const { refetchUser } = useAuth();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Masquer l'élément loadingWrap après 300 millisecondes
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2100);

    // Nettoyer le timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthenticatedGuard>
      {showLoading && (
        <div id="loadingWrap">
          <div id="loadingIcon"></div>
        </div>
      )}

      <div className="contenu">
        <div className="top-nav">
          <div className="logo">
            <p className="nameLogo">
              <span className="maka">Maka</span>Fako
            </p>
          </div>

          <div className='btnMilay'>
            <Button>Suivis </Button>
            <Button className="login">Connecter</Button>
  
          </div>
       </div>

        <div className="paragraphe">
          <H1 className="titre">
            NETTOYONS NOS RUES, <br />
            protégeons notre planète.
          </H1>
          <br />
          <br />
          <span className="tirer"></span>
          <br />
          <H6 className="paraKely">
            Ensemble, rendons notre monde plus propre et plus vert <br /> Unis
            dans notre engagement pour une terre plus propre.
          </H6>
        </div>

        <div className="btnListe">
          <div className="btnAlert">
            <Button variant="secondary" size="md">
              <AjoutIcons /> Lancer une alerte
            </Button>
          </div>

          <div className="btnPyement">
            <Button variant="primary" size="lg">
              <PayementIcons /> Faire un don
            </Button>
          </div>
        </div>
      </div>

      <div className="statistique">
        <H1 className="titreState">Nos stats effectuer </H1>

        <div className="liste">
          <div className="textCams">
            <div className="NombreCamion">
              <CamionIcons className="CamionIcons" />
            </div>
            <p className="nbrs">50</p>
          </div>

          <div className="textDechet">
            <div className="NombreDechet">
              <TrashIcons className="TrashIcons" />
            </div>
            <p className="nbrs">50</p>
          </div>

          <div className="textAlert">
            <div className="NombreAlert">
              <AlertIcons className="TrashIcons" />
            </div>
            <p className="nbrs">50</p>
          </div>
        </div>
        
        <div className="avantage">
          <H1 className="titreAvantage">Les avantage que  nous apportons  </H1>

              <div className="classLiText">
                < p className='LiText'>Améliore l'environnement : </p>
                <p>Une gestion plus efficace des déchets contribuera à réduire la pollution et à préserver l'écosystème local. </p>
              </div>

              <div className="classLiText">
                <br /> <br /><p className='LiText'>Transparence : </p>
                <p>Les paiements en ligne offrent une traçabilité et une transparence accrues dans la manière dont les fonds sont utilisés pour les services de collecte des déchets.</p>
              </div>


              <div className="classLiText">
                <br /> <br /><p className='LiText'>Efficacité : </p>
                <p>L'utilisation de l'IA pour optimiser les itinéraires de collecte permettra une utilisation plus efficace des ressources et réduira les coûts opérationnels.</p>
              </div>

              <div className="foteur">
                <div className="createur">
                  <p className='TitreCreateur'> Createur :</p>
                  <p className="nomCreateur">Dev.Team</p>
                  <p className="lieuCreateur">Antananarivo,101</p>
                  <p className="telCreateur">Tel : 0389029847</p>
                </div>

                <div className="liens">
                  <p className="TitreLien">Liens</p>
                  <Link to="#">Alerter</Link><br />
                  <Link to="#">Connecter</Link><br />
                  <Link to="#">Payement </Link>
                </div>
                

              </div>
              <div className="reseauSociaux">
                < FacebookIcons />
                < InstaIcons />
                < ReactIcons />
                < JsIcons />
              </div>
        </div>
      </div>
    </AuthenticatedGuard>
  );
}

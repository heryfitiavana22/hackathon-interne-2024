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
  const { status } = useAuth();
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

          <div className="btnMilay">
            {status == 'guest' ? (
              <Link to={'/login'}>
                <Button className="login" size="lg">
                  Se connecter
                </Button>
              </Link>
            ) : (
              <Link to={'/list'}>
                <Button className="login" size="lg">
                  Taches
                </Button>
              </Link>
            )}{' '}
            <Link to={'/liststate'} style={{ display: 'flex' }}>
              <Button className="login" variant="secondary">
                Suivis
              </Button>
            </Link>
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
            <Link to={'/set-alert'}>
              <Button variant="secondary" size="lg">
                <AjoutIcons /> Lancer une alerte
              </Button>
            </Link>
          </div>

          <div className="btnPyement">
            <Link to={'/payment'}>
              <Button variant="primary" size="lg">
                <PayementIcons /> Faire un don
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="avantage">
        <H1 className="titreAvantage">Les avantages que nous apportons </H1>

        <div className="classLiText">
          <p className="LiText">Améliore l'environnement : </p>
          <p>
            Une gestion plus efficace des déchets contribuera à réduire la
            pollution et à préserver l'écosystème local.{' '}
          </p>
        </div>

        <div className="classLiText">
          <br /> <br />
          <p className="LiText">Transparence : </p>
          <p>
            Les paiements en ligne offrent une traçabilité et une transparence
            accrues dans la manière dont les fonds sont utilisés pour les
            services de collecte des déchets.
          </p>
        </div>

        <div className="classLiText">
          <br /> <br />
          <p className="LiText">Efficacité : </p>
          <p>
            L'utilisation de l'IA pour optimiser les itinéraires de collecte
            permettra une utilisation plus efficace des ressources et réduira
            les coûts opérationnels.
          </p>
        </div>

        <div className="suivi">
          <H1 className="Maps">Maps pour suivre les trajets </H1>
          <div className="coloneMaps">
            <img
              className="imgMaps"
              src="GoogleMapTA.jpg"
              alt=""
              srcset=""
              width={500}
              height={280}
            />
            <div className="MapPar">
              <p>
                On peut evidament suivre les trajets des camions qui ramace les
                ordures
              </p>
              <Link to={'/tracking'}>
                <Button className="btnSuivi">Map</Button>
              </Link>
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
              <p className="nbrs">0</p>
            </div>

            <div className="textDechet">
              <div className="NombreDechet">
                <TrashIcons className="TrashIcons" />
              </div>
              <p className="nbrs">0</p>
            </div>

            <div className="textAlert">
              <div className="NombreAlert">
                <AlertIcons className="TrashIcons" />
              </div>
              <p className="nbrs">0</p>
            </div>
          </div>

          <div className="foteurClass">
            <div className="foteur">
              <div className="createur">
                <p className="TitreCreateur"> Createur :</p>
                <p className="TitreCreateur">Dev.Team</p>
                <p className="TitreCreateur">Antananarivo,101</p>
                <p className="TitreCreateur">Tel : 0389029847</p>
              </div>

              <div className="liens">
                <p className="TitreLien">Liens</p>
                <Link to="#" className='lien'>Alerter</Link>
                <br />
                <Link to="#" className='lien'>Connecter</Link>
                <br />
                <Link to="#" className='lien'>Payement </Link>
              </div>
            </div>
            <div className="reseauSociaux">
              <FacebookIcons />
              <InstaIcons />
              <ReactIcons />
              <JsIcons />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedGuard>
  );
}

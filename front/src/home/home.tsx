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
          )}
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
          <Link to={'/tracking'}>
            <Button variant="primary" size="lg">
              <PayementIcons /> track
            </Button>
          </Link>
        </div>

        <div className="btnListe">
          <div className="btnAlert">
            <Button variant="secondary" size="lg">
              <AjoutIcons /> Lancer une alerte
            </Button>
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
      </div>
    </AuthenticatedGuard>
  );
}

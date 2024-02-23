import { AccessTokenPersistence } from '../auth/auth.persistence';
import { useAuth } from '../auth/use-auth';
import { AuthenticatedGuard } from '../components/guard/authenticated-guard';
import './home.css';
import React, { useState, useEffect } from 'react';
import { H1, H3, H6 } from '../components/typography/typography';
import { Button } from '../components/button/button';

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
        <div className='top-nav'>
        <div className="logo"><p className='nameLogo'><span className='maka'>Maka</span>Fako</p></div>

        <Button className='login'>Connecter</Button>
        </div>

        <div className="paragraphe">
          <H1 className='titre'>NETTOYONS NOS RUES, <br />protégeons notre planète.</H1>
          <br />
          <br />
          <span className="tirer"></span>
          <br />
          <H6 className='paraKely'>Ensemble, rendons notre monde plus propre et plus vert <br /> Unis dans notre engagement pour une terre plus propre.</H6>
        </div>

        <div className="btnAlert">
          <Button variant='primary' >Alerter</Button>
        </div>

        <div className="statistique">
          <H3 className="titreState">Nos state effectuer </H3>

          <div className="NombreCamion">
            
          </div>
        </div>
      </div>
      
    </AuthenticatedGuard>
  );
}

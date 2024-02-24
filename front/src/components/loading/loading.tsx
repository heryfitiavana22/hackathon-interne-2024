import { PropsWithChildren } from 'react';
import './loading.css';
import { createPortal } from 'react-dom';

export function Loading({}: LoadingProps) {
  return (
    <>
      {createPortal(
        <div className="loading" data-cy="loading">
          chargement...
        </div>,
        document.body,
      )}
    </>
  );
}

type LoadingProps = PropsWithChildren<{}>;

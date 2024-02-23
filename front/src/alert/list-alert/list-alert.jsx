import React from 'react';
import { Button } from './../../components/button/button';
import './list-alert.css';
import CardAlert from './components/card-alert';
import { H1 } from '../../components/typography/typography';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { AlertService } from '../alert.service';
import { Loading } from '../../components/loading/loading';

export function ListAlert() {
  const fako = [
    {
      id: 1,
      location: 'Antsobolo, Antananarivo',
      date: '21/02/24',
      coordonne: 'lavitra',

      image: 'assets/sary.jpg',
      distance: '10m',
    },
    
  ];
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: AlertService.getNotPicked,
  });
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="list-content">
        <div className="lc-text">
          <H1> Liste des alerts</H1>
        </div>
        <div className="lc-container">
          <CardAlert data={data.data} />
        </div>
      </div>
    </>
  );
}

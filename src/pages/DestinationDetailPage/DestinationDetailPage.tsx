import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_DESTINATION_BY_ID } from '../../graphql/queries/getDestinationById';
import './DestinationDetailPage.scss';

export function DestinationDetailPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DESTINATION_BY_ID, {
    variables: { destinationId: id },
  });

  if (error) return <div>Error! ${error.message}</div>;
  if (loading) return <div>Loading...</div>;

  const destination = data.sale;

  return <div>{JSON.stringify(destination)}</div>;
}

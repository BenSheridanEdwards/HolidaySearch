import React from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { GET_HOTELS_WITH_QUERY } from '../../graphql/queries/getHotelsWithQuery';
import './DestinationListPage.scss';

export function DestinationListPage() {
  const [searchParams] = useSearchParams();
  const urlSearchQuery = searchParams.get('query');

  const { loading, error, data } = useQuery(GET_HOTELS_WITH_QUERY, {
    variables: { query: urlSearchQuery },
  });

  if (error) return <div>`Error! ${error.message}`</div>;
  if (loading) return <div>Loading...</div>;

  const { sales } = data.saleSearch;

  return <div>{JSON.stringify(sales)}</div>;
}

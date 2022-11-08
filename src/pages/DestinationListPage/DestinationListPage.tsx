import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { PageHeaderWrapper } from '../../components/PageHeaderWrapper/PageHeaderWrapper';
import type { SaleDestination } from '../../global';
import { GET_HOTELS_WITH_QUERY } from '../../graphql/queries/getHotelsWithQuery';
import './DestinationListPage.scss';

export function DestinationListPage() {
  const [offsetNumber, setOffsetNumber] = useState(0);
  const [resultCount, setResultCount] = useState(0);
  const [destinationResults, setDestinationResults] = useState<SaleDestination[]>([]);

  const [searchParams] = useSearchParams();
  const urlSearchQuery = searchParams.get('query');

  const { loading, error } = useQuery(GET_HOTELS_WITH_QUERY, {
    onCompleted: (data) => {
      const newDestinationResults = data?.saleSearch?.sales;
      setDestinationResults([...destinationResults, ...newDestinationResults]);
      setResultCount(data.saleSearch.resultCount);
    },
    variables: { query: urlSearchQuery, offsetNumber: offsetNumber },
  });

  if (error) return <div>`Error! ${error.message}`</div>;
  if (loading && !destinationResults) return <div>Loading...</div>;

  const handleLoadMoreResults = () => {
    setOffsetNumber(offsetNumber + 10);
  };

  return (
    <div className='DestinationListPage'>
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, choose the next one.
        </h1>
        <h2 className='DestinationListPage__heading-results-count'>
          Showing {destinationResults.length} of {resultCount} results
        </h2>
      </PageHeaderWrapper>
      <ul className='DestinationListPage__list'>
        {destinationResults &&
          destinationResults.length > 0 &&
          destinationResults.map((destination: SaleDestination) => {
            const { title, destinationName } = destination.editorial;
            const [coverImage] = destination.photos;
            const linkUrl = `/sale/${destination.id}`;
            return (
              <li key={destination.id} className='DestinationListPage__list-item'>
                <Card
                  coverImageUrl={coverImage.url}
                  imageDescription={destinationName}
                  linkUrl={linkUrl}
                >
                  <h4>{title}</h4>
                  <h5>{destinationName}</h5>
                </Card>
              </li>
            );
          })}
      </ul>
      <Button onClick={handleLoadMoreResults}>Load more</Button>
    </div>
  );
}

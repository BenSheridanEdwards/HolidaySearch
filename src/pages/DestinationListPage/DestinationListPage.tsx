import React from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { PageHeaderWrapper } from '../../components/PageHeaderWrapper/PageHeaderWrapper';
import type { SaleDestination } from '../../global';
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

  return (
    <div className='DestinationListPage'>
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, choose the next one.
        </h1>
      </PageHeaderWrapper>
      <ul className='DestinationListPage__list'>
        {sales &&
          sales.length > 0 &&
          sales.map((destination: SaleDestination) => {
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
    </div>
  );
}

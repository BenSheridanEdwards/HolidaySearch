import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { Carousel } from '../../components/Carousel/Carousel';
import { PageHeaderWrapper } from '../../components/PageHeaderWrapper/PageHeaderWrapper';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { PriceSquare } from '../../components/PriceSqaure/PriceSquare';
import { RichText } from '../../components/RichText/RichText';
import { Tray } from '../../components/Tray/Tray';
import { TrayHeaderWrapper } from '../../components/Tray/TrayHeaderWrapper/TrayHeaderWrapper';
import { DestinationPhoto } from '../../global';
import { GET_DESTINATION_BY_ID } from '../../graphql/queries/getDestinationById';
import './DestinationDetailPage.scss';

export function DestinationDetailPage(): ReactElement {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DESTINATION_BY_ID, {
    variables: { destinationId: id },
  });

  if (error) return <div>Error! ${error.message}</div>;
  if (loading) return <div>Loading...</div>;

  const destination = data.sale;
  const { title, destinationName } = destination.editorial;
  const displayPrice = destination.prices.leadRate.forDisplay;
  const richTextContent = destination.editorial.hotelDetails;
  const { photos } = destination;

  return (
    <PageWrapper>
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, learn all the details.
        </h1>
      </PageHeaderWrapper>
      <div className='DestinationDetailPage__content'>
        <Carousel scrollDuration={100} scrollLength={358}>
          {photos &&
            photos.length > 0 &&
            photos.map((photo: DestinationPhoto) => {
              return (
                <Card
                  coverImageUrl={photo.url}
                  imageDescription={photo.caption || destinationName}
                  key={photo.url}
                >
                  <h5>{photo.caption || destinationName}</h5>
                </Card>
              );
            })}
        </Carousel>

        <Tray>
          <TrayHeaderWrapper>
            <div>
              <h4>{title}</h4>
              <h5>{destinationName}</h5>
            </div>
            <PriceSquare pricePerNight={displayPrice} frequency='night' />
          </TrayHeaderWrapper>
          <RichText htmlString={richTextContent} />
        </Tray>
      </div>
    </PageWrapper>
  );
}

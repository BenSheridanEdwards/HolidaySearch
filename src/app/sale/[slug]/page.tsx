"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Card } from "@/components/Card/Card";
import { Carousel } from "@/components/Carousel/Carousel";
import { PageHeaderWrapper } from "@/components/PageHeaderWrapper/PageHeaderWrapper";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PriceSquare } from "@/components/PriceSqaure/PriceSquare";
import { RichText } from "@/components/RichText/RichText";
import { Tray } from "@/components/Tray/Tray";
import { TrayHeaderWrapper } from "@/components/Tray/TrayHeaderWrapper/TrayHeaderWrapper";
import { DestinationPhoto } from "@/types";
import { GET_DESTINATION_BY_ID } from "@/graphql/queries/getDestinationById";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";

export default function DestinationDetailPage({ params }): ReactElement {
  const [carouselPhotos, setCarouselPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [displayPrice, setDisplayPrice] = useState("");
  const [richTextContent, setRichTextContent] = useState("");
  const id = params.slug;
  const { loading, error, data } = useQuery(GET_DESTINATION_BY_ID, {
    variables: { destinationId: id },
  });

  useEffect(() => {
    if (data) {
      const destination = data.sale;
      setTitle(destination.editorial.title);
      setDestinationName(destination.editorial.destinationName);
      setDisplayPrice(destination && destination.prices.leadRate.forDisplay);
      setRichTextContent(destination?.editorial.hotelDetails);
      setCarouselPhotos(destination.photos);
    }
  }, [data]);

  if (error) return <div>Error! ${error.message}</div>;

  return (
    <PageWrapper>
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, learn all the details.
        </h1>
      </PageHeaderWrapper>
      <div className="flex w-full flex-col items-center">
        {loading && (
          <div className="w-full py-4 [&>svg]:mx-auto">
            <LoadingSpinner />
          </div>
        )}
        {carouselPhotos && carouselPhotos.length > 0 && (
          <Carousel scrollDuration={100} scrollLength={358}>
            {carouselPhotos.map((photo: DestinationPhoto) => (
              <Card
                coverImageUrl={photo.url}
                imageDescription={photo.caption || destinationName}
                key={photo.url}
              >
                <h5>{photo.caption || destinationName}</h5>
              </Card>
            ))}
          </Carousel>
        )}
        {title && destinationName && (
          <Tray>
            <TrayHeaderWrapper>
              <div>
                <h4>{title}</h4>
                <h5>{destinationName}</h5>
              </div>

              {displayPrice && <PriceSquare pricePerNight={displayPrice} frequency="night" />}
            </TrayHeaderWrapper>
            {richTextContent && <RichText htmlString={richTextContent} />}
          </Tray>
        )}
      </div>
    </PageWrapper>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { PageHeaderWrapper } from "../../components/PageHeaderWrapper/PageHeaderWrapper";
import type { SaleDestination } from "@/types";
import { GET_HOTELS_WITH_QUERY } from "../../graphql/queries/getHotelsWithQuery";
import { useSearchParams } from "next/navigation";

export default function DestinationListPage() {
  const [offsetNumber, setOffsetNumber] = useState(0);
  const [resultCount, setResultCount] = useState(0);
  const [destinationResults, setDestinationResults] = useState<
    SaleDestination[]
  >([]);
  const searchQuery = useSearchParams().toString();
  const searchQueryParams = searchQuery.split("=")[1];

  const { loading, error } = useQuery(GET_HOTELS_WITH_QUERY, {
    onCompleted: (data) => {
      const newDestinationResults = data?.saleSearch?.sales;
      setDestinationResults([...destinationResults, ...newDestinationResults]);
      setResultCount(data.saleSearch.resultCount);
    },
    variables: { query: searchQueryParams, offsetNumber: offsetNumber },
  });

  if (error) return <div>`Error! ${error.message}`</div>;
  if (loading && !destinationResults) return <div>Loading...</div>;

  const handleLoadMoreResults = () => {
    setOffsetNumber(offsetNumber + 10);
  };

  return (
    <main className="flex flex-col items-center">
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, choose the next one.
        </h1>
        <h2 className="mt-4 text-lg text-gray-400">
          Showing {destinationResults.length} of {resultCount} results
        </h2>
      </PageHeaderWrapper>
      <ul className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinationResults &&
          destinationResults.length > 0 &&
          destinationResults.map((destination: SaleDestination) => {
            const { title, destinationName } = destination.editorial;
            const [coverImage] = destination.photos;
            const linkUrl = `/sale/${destination.id}`;
            return (
              <li key={destination.id}>
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
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { PageHeaderWrapper } from "@/components/PageHeaderWrapper/PageHeaderWrapper";
import { GET_HOTELS_WITH_QUERY } from "@/graphql/queries/getHotelsWithQuery";
import { SaleDestination } from "@/types";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

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
    variables: { query: searchQueryParams, offsetNumber },
  });

  if (error) return <div>`Error! ${error.message}`</div>;

  const handleLoadMoreResults = () => {
    setOffsetNumber(offsetNumber + 10);
  };

  return (
    <main className="relative flex flex-col items-center">
      <ButtonLink
        href="/"
        variant="tertiary"
        className="absolute left-0 top-6"
        leadingIcon={
          <div className="mr-2 flex h-[18px] w-[18px] transform items-center justify-center duration-200 ease-in-out group-hover:translate-x-[-4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g fill="none">
                <path d="M0 0L18 0 18 18 0 18z" />
                <path
                  fill="currentColor"
                  d="M15 8.25L5.872 8.25 10.065 4.058 9 3 3 9 9 15 10.057 13.943 5.872 9.75 15 9.75z"
                />
              </g>
            </svg>
          </div>
        }
      >
        Back to search
      </ButtonLink>

      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, choose the next one.
        </h1>
        <h2 className="mt-4 text-lg text-gray-400">
          Showing {destinationResults.length} of {resultCount} results
        </h2>
      </PageHeaderWrapper>
      {loading && (
        <div className="w-full py-4 [&>svg]:mx-auto">
          <LoadingSpinner />
        </div>
      )}
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
      {destinationResults && destinationResults.length > 0 && (
        <Button onClick={handleLoadMoreResults}>Load more</Button>
      )}
    </main>
  );
}

import { gql } from '@apollo/client';

export const GET_HOTELS_WITH_QUERY = gql`
  query getHotelsWithQuery($query: String!) {
    saleSearch(query: $query, travelTypes: "HOTEL_ONLY") {
      resultCount
      sales(limit: 10) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;
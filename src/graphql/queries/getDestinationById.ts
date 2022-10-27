import { gql } from '@apollo/client';

export const GET_DESTINATION_BY_ID = gql`
  query getSale($destinationId: String!) {
    sale(saleId: $destinationId) {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
        caption
      }
    }
  }
`;
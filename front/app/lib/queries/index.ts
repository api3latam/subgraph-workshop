import { gql } from '@apollo/client';

export const GET_UPDATES = gql`
  query GetUpdates($beaconId: String!) {
    updatedBeaconWithSignedDatas(
        first: 10
        orderBy: timestamp
        orderDirection: asc
        where: {
            beaconId: $beaconId
        }
    ) {
        id
        value
        timestamp
    }
  }
`;
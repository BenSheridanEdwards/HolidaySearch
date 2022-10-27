export type DestinationPhoto = {
  url: string;
  caption?: string;
};

export type SaleDestination = {
  id: string;
  editorial: {
    title: string;
    destinationName: string;
  };
  photos: DestinationPhoto[];
};

export interface ICreateEntityAxiosInterfaceResponse {
  _links: {
    self: {
      href: string;
    };
  };
  _embedded: {
    [key: string]: {
      id: number;
      request_id: string;
      _links: {
        self: {
          href: string;
        };
      };
    }[];
  };
}

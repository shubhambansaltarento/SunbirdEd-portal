export * from './requestParam';
export * from './httpOptions';
export * from './serverResponse';
export * from './announcement';
export * from './userProfile';
export * from './caraouselData';
export * from './content';
export * from './action';
export * from './noresult';
export * from './loader';
export * from './appIdEnv';
export * from './framework';
export * from './shareLink';
export * from './playerConfig';
export * from './contentDetails';
export * from './collectionTree';
export * from './fancyTree';
export * from './card';
export * from './courseStates';
export * from './telemetryShare';
export * from './batch';
export * from './highlightText';
export * from './language';
export interface IPagination {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: Array<number>;
  }
  
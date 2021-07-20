export interface Content {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
  upperlevel?: number;
  lowerlevel?: number;
}
export interface StringObjectKey {
  [key: string]: Content;
}

export type TargetRank = "Top" | "Middle" | "Raw";

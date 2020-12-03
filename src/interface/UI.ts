interface Content {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
  upperlevel?: number;
  lowerlevel?: number;
}
interface StringObjectKey {
  [key: string]: Content;
}

export { Content, StringObjectKey };

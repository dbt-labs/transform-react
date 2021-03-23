// Note: These types are adapted directly from Nivo Serie as a relatively standard chart interface

export type DatumValue = string | number | Date;

export interface Datum {
  x?: DatumValue | null;
  y?: DatumValue | null;
  [key: string]: any;
}

export default interface Serie {
  id: string | number;
  data: Datum[];
  [key: string]: any;
}

export type SidebaOptionModel = {
  name: string;
  property: string;
  value: number;
  range: ValueRange;
  unit: "%" | "deg" | "px";
};

type ValueRange = {
  min: number;
  max: number;
};

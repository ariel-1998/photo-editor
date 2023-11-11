export const deepCopyingJson = <T>(json: T): T => {
  return JSON.parse(JSON.stringify(json));
};

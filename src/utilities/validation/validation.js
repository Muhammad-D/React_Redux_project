export const requiredField = (value) => {
  if (value) return undefined;
  return "this field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `maximum characters number is ${maxLength}`;
  }
  return undefined;
};

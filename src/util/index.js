export const cls = (params) => {
  return Object.entries(params).reduce(
    (acc, [key, valid]) => (!!valid ? `${acc} ${key}` : `${acc}`),
    ''
  );
};

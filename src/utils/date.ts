export const parseDate = (time: number) => {
  const _date = new Date(time);
  return _date.toLocaleTimeString();
};

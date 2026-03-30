export const getCurrentTimePerMinutes = (date?: Date) => {
  const currentDate = date || new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return hours * 60 + minutes + seconds / 60;
};

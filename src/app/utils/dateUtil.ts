  export function getDate(date: string) {
    return new Date(date);
  }

  export function getDateString(date: string) {
  return getDate(date).toDateString();
  }

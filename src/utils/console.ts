export const warn = (warn: unknown):boolean => {
  console.warn(`[Happy Warn]:${warn}`);
  return false;
};

export const info = (info: unknown) => {
  console.info(`%c [Happy Info]: %c${info}`, 'color:blue;', 'color:#333;');
};

export const error = (error: unknown):boolean => {
  console.error(`[Happy Error]:${error}`);
  return false;
};
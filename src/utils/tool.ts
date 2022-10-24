// eslint-disable-next-line
export const safeTimeout = (fn: Function, timeout: number) => {
  let t: any = setTimeout(() => {
    fn && fn();
    clearTimeout(t);
    t = null;
  }, timeout);
};

export function addZero(num: [number, string]) {
  return Number(num) < 10 ? `0${num}` : num;
}

// eslint-disable-next-line
export const safeTimeout = (fn: Function, timeout: number) => {
  let t: any = setTimeout(() => {
    fn && fn();
    clearTimeout(t);
    t = null;
  }, timeout);
};
// eslint-disable-next-line
export function debounce(this: any, fn: Function, delay = 500) {
  let t: any = null;
  // eslint-disable-next-line
  let _this: any = this;
  return function (...arg: any) {
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      // eslint-disable-next-line
      fn.apply(_this, arg);
      clearTimeout(t)
      t = null;
    }, delay);
  }
}
export function addZero(num: number | string) {
  return Number(num) < 10 ? `0${num}` : num;
}

/**
 * 日期格式化
 * @param date
 * @param format
 * @returns
 */
export const formatDate = (
  date: string | Date | number,
  format = 'yyyy-MM-dd  hh:mm:ss'
) => {
  const dateValue = new Date(date);
  if (!date || isNaN(dateValue.getTime())) {
    return '-'
  }
  const y = dateValue.getFullYear(),
    M = addZero(dateValue.getMonth() + 1),
    d = addZero(dateValue.getDate()),
    h = addZero(dateValue.getHours()),
    m = addZero(dateValue.getMinutes()),
    s = addZero(dateValue.getSeconds());
  let splitChar = '-';
  if (format.indexOf('.') > 0) {
    splitChar = '.';
  }
  if (format.indexOf('/') > 0) {
    splitChar = '/';
  }
  if (format.indexOf('年') > 0) {
    splitChar = '';
  }
  const dayString = `${y}${splitChar ? splitChar : '年'}${M}${splitChar ? splitChar : '月'
    }${d}${splitChar ? '' : '日'}`;

  if (format.indexOf('ss') > 0) {
    return `${dayString}  ${h}:${m}:${s}`;
  }
  if (format.indexOf('mm') > 0) {
    return `${dayString}  ${h}:${m}`;
  }
  return dayString;
};

export const notNull = (val: any) => {
  return val !== null && val !== undefined
}

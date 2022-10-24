// eslint-disable-next-line
export const safeTimeout = (fn: Function, timeout: number) => {
  let t: any = setTimeout(() => {
    fn && fn();
    clearTimeout(t);
    t = null;
  }, timeout);
};

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
  if (!date) return '-';
  const dateValue = new Date(date);
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
  const dayString = `${y}${splitChar ? splitChar : '年'}${M}${
    splitChar ? splitChar : '月'
  }${d}${splitChar ? '' : '日'}`;

  if (format.indexOf('ss') > 0) {
    return `${dayString}  ${h}:${m}:${s}`;
  }
  if (format.indexOf('mm') > 0) {
    return `${dayString}  ${h}:${m}`;
  }
  return dayString;
};

import { isDef } from './validate';
export function deepClone(obj) {
  if (!isDef(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  if (typeof obj === 'object') {
    var to = {};
    Object.keys(obj).forEach(key => {
      to[key] = deepClone(obj[key]);
    });
    return to;
  }

  return obj;
}
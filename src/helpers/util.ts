const toString = Object.prototype.toString

// 时间类型判断
export function isDate(val: any): val is Date {
  // val is Date 谓词保护
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  // val is Object 谓词保护-类型谓词
  return val != null && typeof val === 'object'
}
// 判断纯object 区分[Object formdata]
export function isPlainObject(val: any): val is Object {
  return Object.prototype.toString.call(val) === '[Object Object]'
}

// 混合对象
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

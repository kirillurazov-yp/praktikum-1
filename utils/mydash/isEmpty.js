function isEmpty(value) {
  if (value === null) {
    return true;
  }
  if (value === undefined) {
    return true;
  }
  if (value === '') {
    return true;
  }
  if (typeof value === 'boolean') {
    return true;
  }
  if (typeof value === 'number') {
    return true;
  }
  if (typeof value === 'bigint') {
    return true;
  }
  if (value instanceof Set) {
    return !value.size;
  }
  if (value instanceof Map) {
    return !value.size;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return typeof value === 'object' && Object.keys(value).length === 0;
}

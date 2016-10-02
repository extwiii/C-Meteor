// http://likerrr.ru/on-air/adding-string-with-dot-notation-as-a-key-to-javascript-objects
    
objSetPath = function (obj, path, value, notation) {
  function isObject(obj) { return (Object.prototype.toString.call(obj) === '[object Object]' && !!obj);}
  notation = notation || '.';
  var pathParts = Array.isArray(path) ? path : path.split(notation);
  pathParts.reduce(function (prev, cur, idx, arr) {
    var isLast = (idx === arr.length - 1);
    // if <cur> is last part of path
    if (isLast) return (prev[cur] = value);
    // if <cur> is not last part of path, then returns object if existing value is object or empty object
    return (isObject(prev[cur])) ? prev[cur] : (prev[cur] = {});
  }, obj);
  return obj;
};

objGetPath = function(obj, path, notation) {
  notation = notation || '.';
  var pathParts = Array.isArray(path) ? path : path.split(notation);
  return pathParts.reduce(function(prev, cur) {
    return (prev !== undefined) ? prev[cur] : undefined;
  }, obj);
};

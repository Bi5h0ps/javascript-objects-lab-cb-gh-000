var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  console.log(object);
  var new1 = Object.assign(objecct,{[key]:value});
  console.log(object);
  console.log(new1);
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var toreturn = Object.assign({},object);
  delete toreturn[key];
  return toreturn;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

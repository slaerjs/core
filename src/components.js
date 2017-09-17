
let _components = {};

export function components() {
  return Object.values(_components);
}

export function component(name, obj) {
  if (obj) {
    _components[name] = obj;
  }

  return _components[name];
}

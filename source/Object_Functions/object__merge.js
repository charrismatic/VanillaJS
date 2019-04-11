
// Contents of two or more objects together into a new object, without modifying either argument.
const object_merge = (defaults, ...overides) => {
  let empty = Object.create(null);
  return Object.assign(empty, defaults, ...overides);
}

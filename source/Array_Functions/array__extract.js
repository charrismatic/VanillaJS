function array_extract(data, where) {

  for (var key in data) {
    where[key] = data[key];
  }
  conosole.log( where  );
  return where;
}

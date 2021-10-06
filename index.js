//ex 10
const first = (str = "", len = 1) => str.slice(0, len);
//ex 11
const last = (str = "", len = 1) => str.substring(str.length - len, str.length);
//ex 12
const substr = (str = "", start, len = str.length) =>
  str.substring(start, start + len);
//ex 13
const slice = (str = "", start, endopt = str.length) =>
  str.slice(start, endopt);
//ex 14
const count = (str = "") => Array.from(str).reduce((acc, _) => acc + 1, 0);
//ex 15
const countSubstrings = (str = "", substring) => {
  const regexp = new RegExp(`\\b${substring}\\b`, "g");
  return str.match(regexp).length;
};
//ex 16
const countWords = (str = "", patternopt) => {
  const reg = /[A-Z]{1}[a-z]+/g;
  return str.match(reg).length;
};
//ex 17
const indexOf = (str = "", search, fromIndexopt = 0) => {
  return str.indexOf(search, fromIndexopt);
};
//ex 18
const lastIndexOf = (str = "", search, fromIndexopt = str.length - 1) => {
  return str.lastIndexOf(search, fromIndexopt);
};
//ex 19
const insert = (str = "", toInsertopt = "", positionopt = 0) => {
  return str.slice(0, positionopt) + toInsertopt + str.slice(positionopt);
};
//ex 20
const repeat = (str = "", timesopt = 1) => {
  return str.repeat(timesopt);
};
//ex 21
const reverse = (str = "") => Array.from(str).reverse().join("");
//ex 22
const splice = (
  str = "",
  start,
  deleteCountopt = str.length - start,
  toAppopt = ""
) => {
  start = start < 0 ? str.length - Math.abs(start) : start;
  return (
    str.slice(0, start) + toAppopt + str.slice(Math.abs(start) + deleteCountopt)
  );
};
//ex 23
const trim = (str = "", whitespaceopt = " ") => {
  let pattern = "^" + whitespaceopt + "*|" + whitespaceopt + "*$";
  return str.split(new RegExp(pattern, "g")).join("");
};
//ex 24
const endsWith = (str = "", end, positionopt = str.length) => {
  return str.endsWith(end, positionopt);
};
//ex 25
const includes = (str = "", search, positionopt = 0) => {
  return str.includes(search, positionopt);
};

import queryString from "query-string";

export default function getGueryParams(sq) {
  return queryString.parse(sq);
} // функция, которая получает значение query из адресной строки

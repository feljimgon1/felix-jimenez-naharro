export default function parseToServer(str) {
  return str.replace('í', 'i')
  .replace('ó', 'o')
  .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, '')
}
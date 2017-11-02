export default (text = 'hello world') => {
  const element = document.createElement('h1')
  element.innerText = text

  return element
}
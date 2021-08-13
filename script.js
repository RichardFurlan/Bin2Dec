function converter() {
  const binary = document.getElementById('bin').value
  if (binary === '')
    return alert('Coloque um número binário para ser convertido')

  binary.split('').map(char => {
    if ((char !== '0') & (char !== '1'))
      return alert('Coloque um um número binário para ser convertido')
  })
  const decimal = parseInt(binary, 2)
  document.getElementById('result').innerHTML = decimal
  return true
}

/* create boxes */
const boxesContainer = document.querySelector('.boxes');
for (let i = 0; i < 300; i++) {
  const box = document.createElement('div');
  box.classList.add('box');

  console.log(i, (i + 1) % 3)
  /* if is multiple of 3 = fizz */
  if (!((i + 1) % 3)) {
    box.classList.add('bg-fizz');
    console.log('Fizz')
    box.append('Fizz');
  /* if is multiple of 5 = buzz */
  } else if (!((i + 1) % 5)) {
    box.classList.add('bg-buzz');
    console.log('buzz')
    box.append('Buzz');
  /* everything else = number */
  } else {
    box.append(i + 1); // Agregar el número solo si no es un múltiplo de 3 ni de 5
  }
   /* if is fizz and buzz ant the same time *common moltiplier of 3 and 5* = FIZZ BUZZ */
  if (!((i + 1) % 3) && !((i + 1) % 5)) {
    box.classList.add('bg-fizzbuzz');
    console.log('fizz buzz')
    box.append(' ' + 'Buzz');
  }
  boxesContainer.append(box);
}
/* create boxes */
const boxesContainer2 = document.querySelector('.boxes');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  
   /* if is fizz and buzz ant the same time *common moltiplier of 3 and 5* = FIZZ BUZZ */
  if((i % 3 === 0) && (i % 5 === 0)){
    box.classList.add('bg-fizzbuzz');
    console.log('Fizz Buzz')
    box.append('Fizz Buzz');
  }
   /* if is multiple of 5 = buzz */
  else if(i % 5 === 0){
    box.classList.add('bg-buzz');
    console.log('Buzz')
    box.append('Buzz');
  }
  /* if is multiple of 3 = fizz */
  else if((i % 3 === 0)){
    box.classList.add('bg-fizz');
    console.log('Fizz')
    box.append('Fizz');
  }
  /* everything else = number */
  else{
    console.log(i)
    box.append(i)
  }
  boxesContainer2.append(box);
}
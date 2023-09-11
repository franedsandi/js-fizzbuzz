const boxesContainer = document.querySelector('.boxes');
for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  // per non visualizzare lo 0 ma partendo da uno anche se il conteggio è su base zero
  box.append(i + 1);
  // se (i + 1) è divisibile per 3 metto il bg verde
  console.log(i, (i + 1) % 3)
  if(!((i + 1) % 3)){
    box.classList.add('bg-fizz');
    const querySelector
  }
  else if(!((i + 1) % 5)){
    box.classList.add('bg-buzz');
  }
  if(!((i + 1) % 3) && !((i + 1) % 5) ){
    box.classList.add('bg-fizzbuzz');
  }
  
  boxesContainer.append(box);
}
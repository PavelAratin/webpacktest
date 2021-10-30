window.onload = () => {
  const number = document.querySelector('.number')
  const buttons = document.querySelector('.buttons')
  let counter = 0
  buttons.addEventListener('click', (e) => {
    const classLists = e.target.classList
    for (let i = 0; i < classLists.length; i++) {
      if(classLists[i] === 'button--blue'){
        number.innerHTML = counter
        counter++
      }
      if(classLists[i] === 'button--red'){
        number.innerHTML = counter
        counter--
      }   
    }
  })
};
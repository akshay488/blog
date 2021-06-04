
  const menu_btn = document.getElementById('hamburger_menu');
  const signUp = document.getElementById('sign_up');
  document.getElementById('hamburger_menu').addEventListener('click', function(){

    if (menu_btn.classList.contains('open-btn')) {
      menu_btn.classList.remove('open-btn');
      signUp.classList.add('flex');
    }else {
      menu_btn.classList.add('open-btn');
      signUp.classList.remove('flex');
    }
   });

    // counter
    var add  =(function(){var counter = 0; return function (){
    counter += 1; return counter;}
    })();

    // dropdown 

   const navbar = document.querySelector('.navbar');
   navbar.addEventListener('click', myFunction);
    function myFunction(e){
      var x = e.target;
      var y = add();
      const product = document.getElementById('a');
      const company = document.getElementById('b');
      const connect = document.getElementById('c');
      const invrt = document.querySelectorAll('.arrow');
      console.log(x.id);
      
      if (x.id === 'product' & y % 2 !== 0) {
        product.classList.remove('close');
        invrt[0].classList.add('arrow_transform');
        invrt[0].classList.remove('arrow_normal');
        
      }else {
        product.classList.add('close');
        invrt[0].classList.add('arrow_normal');
        invrt[0].classList.remove('arrow_transform');
      }
      if (x.id === 'company'& y % 2 !== 0 ){
        company.classList.remove('close');
        invrt[1].classList.add('arrow_transform');
        invrt[1].classList.remove('arrow_normal');

      }else {
        company.classList.add('close');
        invrt[1].classList.remove('arrow_normal');
        invrt[1].classList.remove('arrow_transform');
        
      }
      if (x.id === 'connect' & y % 2 !== 0) {
        connect.classList.remove('close');
        invrt[2].classList.add('arrow_transform');
        invrt[2].classList.remove('arrow_normal');

      }else {
        connect.classList.add('close');
        invrt[2].classList.remove('arrow_normal');
        invrt[2].classList.remove('arrow_transform');

      }
      
    }

    
// const width = window.matchMedia("max-width:898px");
// console.log(width);

// var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

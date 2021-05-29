
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


    function myFunction(p){
      var x = p;
      const product = document.getElementById('product');
      const company = document.getElementById('company');
      const connect = document.getElementById('connect');
      let psuedo = document.querySelectorAll('.drp-container:after');
      console.log(psuedo);
      if (x === 1) {
        product.classList.remove('close');

      }else {
        product.classList.add('close');
        
      }
      if (x === 2) {
        company.classList.remove('close');
      }else {
        company.classList.add('close');
      }
      if (x === 3) {
        connect.classList.remove('close');
      }else {
        connect.classList.add('close');
      }
    }
// const width = window.matchMedia("max-width:898px");
// console.log(width);

// var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

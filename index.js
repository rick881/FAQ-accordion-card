
const accHeaders = document.querySelectorAll('.accordion-header')

 accHeaders.forEach(accHeader => {
     accHeader.addEventListener('click', event => {
         const activeAccHeader = document.querySelector('.accordion-header.active')
         const faq = accHeader.firstElementChild;
         if(activeAccHeader && activeAccHeader !== accHeader) {
             activeAccHeader.classList.toggle("active");
             activeAccHeader.nextElementSibling.style.maxHeight = 0; 
         }

         accHeader.classList.toggle('active');
         const accBody = accHeader.nextElementSibling;
         if(accHeader.classList.contains('active')) {
             accBody.style.maxHeight = accBody.scrollHeight + 'px';
             faq.classList.add('active');
         } else {
             accBody.style.maxHeight = 0;
             faq.classList.remove('active');
         }
     })
 })


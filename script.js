const copyTextArea = document.querySelector('.copytext')
const btn = document.querySelector('.copy-btn')
 
const alert = document.querySelector('.alert')
btn.addEventListener('click' , ()=> {
    copyTextArea.select()
     
        navigator.clipboard.writeText(copyTextArea.value)
        
        alert.style.visibility = 'visible'
       
        
        setTimeout(() => {
            alert.style.visibility = 'hidden'
           
        }, 2000);
     
     
})
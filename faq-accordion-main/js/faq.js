const btns = document.querySelectorAll('.faq-question-title img');

btns.forEach(btn =>{
    btn.addEventListener("click",(e) =>{
        console.log(e.target.parentElement.parentElement)
        const question = e.target.parentElement.parentElement

        if(question.dataset.isactive == "true"){
            question.dataset.isactive = "false"
            question.querySelector("img").src = "./assets/images/icon-plus.svg"
            question.querySelector(".faq-question-text").style.display = "none"
        }else{
            question.dataset.isactive = "true"
            question.querySelector("img").src = "./assets/images/icon-minus.svg"
            question.querySelector(".faq-question-text").style.display = "block"

        }
    })
})
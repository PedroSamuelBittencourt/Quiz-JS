let resultado_final = document.getElementById("pts");
let btn = document.querySelector('.revelar');
let revelar = document.getElementById("revelar_resposta")
let fim = document.getElementById("fim")

let frase_final = document.getElementById("frase_final")
let istatus = document.getElementById("istatus")
let pontos = 0;

btn.addEventListener('click',()=>{
    pontos = 0;
    let checkbox = document.querySelectorAll('.correta');
    for (let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked){
            pontos += 1;
            console.log("foi1");
        }
    }
   
    resultado_final.innerHTML = pontos;
    revelar.style.display = "none";
    fim.style.display = "flex";
    feedback(pontos)
   
})

function nextQuestion(currentQuestion) {
    const current = document.getElementById(`pergunta${currentQuestion}`);
    const next = document.getElementById(`pergunta${currentQuestion + 1}`);
    if (next) {
        current.style.display = 'none'; 
        next.style.display = 'block'; 
    }
}
function lastQuestion(currentQuestionn) {
    const current = document.getElementById(`pergunta${currentQuestionn}`);
    const last = document.getElementById(`pergunta${currentQuestionn - 1}`);
    if (last) {
        current.style.display = 'none'; 
        last.style.display = 'block'; 
    }
}
function resultado(){
    let ultima = document.getElementById('pergunta10');
   
    revelar.style.display = 'flex';
    ultima.style.display = 'none';
    
}
function feedback(pontos){  
        if (pontos >= 7) {
            istatus.innerHTML = "Parabéns!";
            frase_final.innerHTML = "Você é um verdadeiro especialista em Javascript!";
            istatus.style.color = "#486C32";
        } else if (pontos < 7 && pontos >= 4) {
            istatus.innerHTML = "Muito bem!";
            frase_final.innerHTML = "Você está indo bem, mas precisa melhorar um pouco mais...";
            istatus.style.color= '#627C8C'
        } else if (pontos < 4) {
            istatus.innerHTML = "Ops...";
            frase_final.innerHTML = "Você precisa melhorar muito, mas não se preocupe, você pode tentar de novo :)";
        }
}

function selectOnlyOne(groupName, selectedCheckbox) {
    const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
    checkboxes.forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}
function recomeçarQuiz() {
    location.reload(); 
}

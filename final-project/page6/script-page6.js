function onQuizAnswer(params) {
    var answer = document.forms["decide-page-6go"]["quiz-answer"].value;

    //validasi empty field
    if(answer.length===0){
        alert('Tidak boleh mengosongkan jawaban');
        return false;
    }

    if(answer==='udang'){
        alert('You are right, the answer is udang but....')
        return true;
    }else if(answer!=='udang'){
        alert('Ow ow, '+answer+' is the wrong answer. \nYou will not like to see the result....')
        return true;
    }

}
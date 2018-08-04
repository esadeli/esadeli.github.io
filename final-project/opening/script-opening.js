function onStartStory() {
     
    var namaOpening = document.forms["form-enter"]["name-opening"].value;
    var angkaOpening = document.forms["form-enter"]["angka-opening"].value;

    //Cek char
    var checkAngka = [];
    var reference = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?:/_-+[]{}'
    for(var i =0;i<angkaOpening.length;i++){
        for(var j = 0;j<reference.length;j++){
            if(angkaOpening[i]===reference[j]){
                checkAngka.push(angkaOpening[i]);
            }
        }   
    }

    // console.log(checkAngka.length);

    var point = 0;

    // Check empty Field
    if(namaOpening.length===0 || angkaOpening.length===0){
        alert("Input tidak boleh kosong"+"\nSilakan ulang input")
        return false;
    }else if(namaOpening.length!==0 && angkaOpening.length!==0){
        point = point+1;
    }

    //Check if input is number
    if(checkAngka.length===0){
        var angkaNum = parseInt(angkaOpening);
        if(angkaNum>0){
            point = point+1;
        }else if(angkaNum<=0){
            alert("Input "+angkaNum+" bukan angka positif"+"\nSilakan ulang input");
        return false;
        }        
    }else {
        alert("Input "+angkaOpening+" bukan berupa angka"+"\nSilakan ulang input");
        return false;
    }
    
    // console.log(point)

    //Final check
    if(point===2){
        alert("Selamat memulai cerita "+namaOpening+"\n"+"\n"+"Pintu kantor terbuka...")
        return true;
    }else {
        alert("Mohon cek input apakah sudah sesuai");
        return false;
    }
}
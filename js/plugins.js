/**/
document.getElementById("formmail").addEventListener("submit", function (e){
    e.preventDefault();
    var erreur;
    var inputs = this.getElementsByTagName("input");
    var data = new FormData(this);

    var xhr = new XMLHttpRequest();

    for(var i = 0; i < inputs.length; i++){

        if(inputs[i].value){


            document.getElementById("erreur").classList.remove('erreur-red');
            for(var i = 0; i < inputs.length; i++){
                inputs[i].classList.remove('border-red');
            }
            document.getElementById("erreur").innerHTML = "";

            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    Swal.fire(
                        'Merci !',
                        'Votre mail a bien été envoyé',
                        'success'
                    )
                } else if (this.readyState == 4) {
                    alert("Une erreur est survenue...");
                }
            };
            xhr.open("POST", "inc/mail.php", true);
            xhr.responseType = "json";
            // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);

            return false;
        }else{

            inputs[i].classList.add('border-red');
            erreur = "Veuillez renseigner tous les champs";


        }
    }



    if (erreur){

        e.preventDefault();
        document.getElementById("erreur").classList.add('erreur-red');
        document.getElementById("erreur").innerHTML = erreur;
        return false;

    }


} )
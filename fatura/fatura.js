function hesap(){
    let su = document.getElementById("su").value
    let elektirik = document.getElementById("elektirik").value
    let gaz = document.getElementById("gaz").value
    
    let sonuc= document.getElementById("sonuc")

    let hesap =(Number(su) + Number (elektirik) + Number (gaz))

    sonuc.innerHTML="faturalarınızın toplamı"+hesap
}
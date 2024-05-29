document.getElementById("ev2").disabled = true
document.getElementById("ev3").disabled = true
document.getElementById("ev4").disabled = true

function Valtozas(){
    let vendegszam = document.getElementById("vendegszan").value
    if(vendegszam == 1){
        document.getElementById("ev2").disabled = true
        document.getElementById("ev3").disabled = true
        document.getElementById("ev4").disabled = true
    }
    else if(vendegszam == 2){
        document.getElementById("ev2").disabled = false
        document.getElementById("ev3").disabled = true
        document.getElementById("ev4").disabled = true
    }
    else if(vendegszam == 3){
        document.getElementById("ev2").disabled = false
        document.getElementById("ev3").disabled = false
        document.getElementById("ev4").disabled = true
    }
    else if(vendegszam == 4){
        document.getElementById("ev2").disabled = false
        document.getElementById("ev3").disabled = false
        document.getElementById("ev4").disabled = false
    }
}
function Kalkulal(){
    let vendegszam = document.getElementById("vendegszan").value
    let erk = new Date(document.getElementById("erkezes").value)
    let erkev = erk.getFullYear().toString()
    let erkhonap = erk.getMonth() + 1
    let erknap = erk.getDate().toString()
    let tav = new Date(document.getElementById("tavozas").value)
    let tavev = tav.getFullYear().toString()
    let tavhonap = tav.getMonth()+1
    let tavnap = tav.getDate().toString()
    let idotartam = Number((((+tav)-(+erk)) / 3600000)/24)
    let szobatipus
    let osszeg
    let ellatas
    let szolgaltatas


    if(document.getElementById("egyagy").checked == true)
    {
        szobatipus = document.getElementById("egyagy").value
        osszeg+= 9000*Number(idotartam)
    }
    else if(document.getElementById("kettoagy").checked == true)
    {
        szobatipus = document.getElementById("kettoagy").value
        osszeg+= 15000*Number(idotartam)
    }
    else if(document.getElementById("kettoagypluszegy").checked == true)
    {
        szobatipus = document.getElementById("kettoagypluszegy").value
        osszeg+= 18000*Number(idotartam)
    }
    else if(document.getElementById("kettoagypluszketto").checked == true)
    {
        szobatipus = document.getElementById("kettoagypluszketto").value
        osszeg+= 21000*Number(idotartam)
    }

    if(document.getElementById("reggeli").checked == true)
    {
        ellatas = document.getElementById("reggeli").value
        osszeg+= 900*Number(idotartam)*Number(vendegszam)
    }
    else if(document.getElementById("felpanzio").checked == true)
    {
        ellatas = document.getElementById("felpanzio").value
        osszeg+= 2900*Number(idotartam)*Number(vendegszam)
    }
    else if(document.getElementById("panzio").checked == true)
    {
        ellatas = document.getElementById("panzio").value
        osszeg+= 4900*Number(idotartam)*Number(vendegszam)
    }
    if(document.getElementById("reggeli").checked == true)
    {
        ellatas = document.getElementById("reggeli").value
        osszeg+= 900*Number(idotartam)*Number(vendegszam)
    }
    else if(document.getElementById("felpanzio").checked == true)
    {
        ellatas = document.getElementById("felpanzio").value
        osszeg+= 2900*Number(idotartam)*Number(vendegszam)
    }
    else if(document.getElementById("panzio").checked == true)
    {
        ellatas = document.getElementById("panzio").value
        osszeg+= 4900*Number(idotartam)*Number(vendegszam)
    }  
    else if(document.getElementById("panzio").checked == true)
    {
        ellatas = document.getElementById("panzio").value
        osszeg+= 4900*Number(idotartam)*Number(vendegszam)
    }

    alert("Kedves vendégünk!\n\nTájékoztatjuk sikeresfolgalásáról.\n\nÉrkezés: "+erkev+"-"+erkhonap+"-"+erknap+"\n\nTávozás: "+tavev+"-"+tavhonap+"-"+tavnap+"\n\nSzoba típusa: "+szobatipus+"\n\nVendégek száma: "+vendegszam+"\n\nEllátás: "+ellatas+"\n\nIgénylet szolgáltatások: "+szolgaltatas+"\n\nA teljes össeg: "+osszeg)
}
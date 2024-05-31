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
    if(document.getElementById("teljes").checked){
        document.getElementById("kmedence").disabled = true
        document.getElementById("bmedence").disabled = true 
        document.getElementById("szauna").disabled = true
    }
    else{
        document.getElementById("kmedence").disabled = false
        document.getElementById("bmedence").disabled = false 
        document.getElementById("szauna").disabled = false
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
    let idotartam = (((+tav)-(+erk)) / 3600000)/24
    let szobatipus
    let osszeg = 0
    let ellatas 
    let szolgaltatas = " "


    if(document.getElementById("egyagy").checked == true)
    {
        szobatipus = document.getElementById("egyagy").value
        osszeg+= 9000*idotartam
    }
    else if(document.getElementById("kettoagy").checked == true)
    {
        szobatipus = document.getElementById("kettoagy").value
        osszeg+= 15000*idotartam
    }
    else if(document.getElementById("kettoagypluszegy").checked == true)
    {
        szobatipus = document.getElementById("kettoagypluszegy").value
        osszeg+= 18000*idotartam
    }
    else if(document.getElementById("kettoagypluszketto").checked == true)
    {
        szobatipus = document.getElementById("kettoagypluszketto").value
        osszeg+= 21000*idotartam
    }

    if(document.getElementById("reggeli").checked == true)
    {
        ellatas = document.getElementById("reggeli").value
        osszeg += 900*idotartam*vendegszam
    }
    else if(document.getElementById("felpanzio").checked == true)
    {
        ellatas = document.getElementById("felpanzio").value
        osszeg += 2900*idotartam*vendegszam
    }
    else if(document.getElementById("panzio").checked == true)
    {
        ellatas = document.getElementById("panzio").value
        osszeg += 4900*idotartam*vendegszam
    }
    if(document.getElementById("bmedence").checked == true)
    {
        szolgaltatas = document.getElementById("bmedence").value
        osszeg += 900*idotartam*vendegszam
    }
    if(document.getElementById("kmedence").checked == true)
    {
        szolgaltatas += " "+document.getElementById("kmedence").value
        osszeg += 2900*idotartam*vendegszam
    }
    if(document.getElementById("szauna").checked == true)
    {
        szolgaltatas += " "+document.getElementById("szauna").value
        osszeg += 4900*idotartam*vendegszam
    }  
    if(document.getElementById("teljes").checked == true)
    {
        szolgaltatas = document.getElementById("teljes").value
        osszeg += 4900*idotartam*vendegszam
    }

    alert("Kedves vendégünk!\n\nTájékoztatjuk sikeres folgalásáról.\n\nÉrkezés: "+erkev+"-"+erkhonap+"-"+erknap+"\n\nTávozás: "+tavev+"-"+tavhonap+"-"+tavnap+"\n\nSzoba típusa: "+szobatipus+"\n\nVendégek száma: "+vendegszam+"\n\nEllátás: "+ellatas+"\n\nIgénylet szolgáltatások: "+szolgaltatas+"\n\nA teljes össeg: "+osszeg)
}
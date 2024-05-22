function Kalkulal(){
    let erk = new Date(document.getElementById("erkezes").value)
    let erkev = erk.getFullYear().toString()
    let erkhonap = erk.getMonth() + 1
    let erknap = erk.getDate().toString()
    let tav = new Date(document.getElementById("tavozas").value)
    let tavev = tav.getFullYear().toString()
    let tavhonap = tav.getMonth()+1
    let tavnap = tav.getDate().toString()
    let idotartam = (((+tav)-(+erk)) / 3600000)/24
    let vendegszam = document.getElementById("vendegszan").value
    let szobatipus
    let osszeg
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
        osszeg+= 18000*idotartam
    }
    alert("Kedves vendégünk!\n\nTájékoztatjuk sikeresfolgalásáról.\n\nÉrkezés: "+erkev+"-"+erkhonap+"-"+erknap+"\n\nTávozás:"+tavev+"-"+tavhonap+"-"+tavnap+"\n\nSzoba típusa: "+szobatipus+"\n\nVendégek száma:"+vendegszam)
}
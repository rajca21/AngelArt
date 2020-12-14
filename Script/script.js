/*čuvanje materijala na stranicama pojedinačnih skulptura*/
function sacuvajMaterijal() {
    var opt = sel.options[sel.selectedIndex]; /*opt uzima vrednost izabrane opcije u padajućem meniju čiji je naziv sel*/
    localStorage.setItem("materijal",opt.value); /*"materijal" uzima vrednost promenljive opt*/
    localStorage.setItem("cena",cena.innerHTML); /*"cena" uzima vrednost zavisa čiji je id="cena"*/
}

/*FORM VALIDATION*/
function validation() { 
    var ime = document.forms["narucivanje"]["ordername"].value; /*document.forms["naziv forme"]["id inputa"].upisana vrednost*/
    if (ime == "") {/*required*/
    alert("Unesite ime.");
    return false; /*forma se ne prosleđuje*/
    }

    var prezime = document.forms["narucivanje"]["orderlastname"].value;
    if (prezime == "") {/*required*/
        alert("Unesite prezime.");
        return false;
    }

    var mail = document.forms["narucivanje"]["ordermail"].value;
    if (mail == "") {/*required*/
        alert("Unesite e-mail.");
        return false;
    }

    var broj = document.forms["narucivanje"]["ordernum"].value;
    if (broj == "") {/*required*/
        alert("Unesite broj telefona.");
        return false;
    }
    if (broj[0] == "+") {/*ako je prvi karakter +*/
        broj = broj.slice(1); /*promenljiva broj postaje samo deo iza znaka +, tj prvog karaktera*/
        if (broj.length !== 11 && broj.length !== 12 || isNaN(broj)) { /*broj može imati 11 ili 12 karaktera ako je oblika +381, isNaN funkcija proverava da li je broj*/
            alert("Unesite tačan broj telefona.");
            return false;
        }
    } else {
        if (isNaN(broj)) {
        alert("Unesite broj.");
        return false;
        } else {
            if (broj.length !== 9 && broj.length !== 10) { /*broj može imati 9 ili 10 karaktera ako je oblika 06..*/
                alert("Unesite tačan broj telefona.");
                return false;
            }
        }
    }

    var ulica = document.forms["narucivanje"]["orderstreet"].value;
    if (ulica == "") {/*required*/
        alert("Unesite adresu naručivanja.");
        return false;
    }

    var ulicabr = document.forms["narucivanje"]["orderstnum"].value;
    if (ulicabr == "") {/*required*/
        alert("Unesite broj ulice.");
        return false;
    }

    //Poslednji char u broju ulice može biti slovo
    if((/[a-zA-Z]/).test(ulicabr.charAt(ulicabr.length-1))){ /*provera da li je poslednji karakter slovo*/
        ulicabr = ulicabr.slice(0,ulicabr.length-1); /*odsečak broja bez poslednjeg karaktera(slova)*/
    }
    if (isNaN(ulicabr)) { /*provera odsečka*/
        alert("Unesite broj ulice ispravno.");
        return false;
    }

    var post = document.forms["narucivanje"]["orderpost"].value;
    if (post == "") {/*required*/
        alert("Unesite poštanski broj.");
        return false;
    }
    if(isNaN(post)) {
        alert("Unesite ispravan poštanski kod.");
        return false;
    }

    var grad = document.forms["narucivanje"]["ordercity"].value;
    if (grad == "") {/*required*/
        alert("Unesite ime grada.");
        return false;
    }

    var drzava = document.forms["narucivanje"]["ordercountry"].value;
    if (drzava == "") {/*required*/
        alert("Unesite ime države.");
        return false;
    }

    alert("Uspešno ste obavili porudžbinu.");
    return true; /*forma se prosleđuje*/
}
/*END OF FORM VALIDATION*/

/*JQUERY PLUGIN*/
$( function() {
    $( "#accordion" ).accordion();
  } );
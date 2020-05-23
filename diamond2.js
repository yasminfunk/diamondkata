function diamond(c){
    var buchstabe = c - 64; // Buchstabe wird in Zahl umgewandelt
    var laenge = (buchstabe * 2) - 1; // Gesamtanzahl der Zeilen und Laenge der Zeilen
    
    if (buchstabe == 1) {
    return ("A");
    }
    
    var ersterTeil = [buchstabe - 1]; // Zeile bis c
    var zweiterTeil = null; // Zeile c
    var dritterTeil = [buchstabe - 1]; // Zeile ab c
    
    var result = [laenge]; // Endergebnis
    
    for (var i = 0; i < buchstabe; i++) { // Befuellen des ersten Teils
    var zeile = [laenge];
    if (i == 0) {
    zeile[buchstabe - 1] = (char) (buchstabe + 64);
    for (var j = 0; j < zeile.length - 1; j++) {
    if (zeile[j] != (char) (buchstabe + 64)) {
    zeile[j] = '-';
    }
    }
    } else {
    zeile[buchstabe - i] = (char) (buchstabe + 64);
    zeile[buchstabe + i] = (char) (buchstabe + 64);
    for (var j = 0; j < zeile.length - 1; i++) {
    if (zeile[j] != (char) (buchstabe + 64)) {
    zeile[j] = '-';
    }
    }
    }
    
    ersterTeil[i] = zeile.toString();
    }
    
    var zeile = [laenge]; // Befuellen des zweiten Teils
    zeile[0] = (buchstabe + 64);
    zeile[zeile.length - 1] = (buchstabe + 64);
    
    for (var i = 1; i < zeile.length - 2; i++) {
    zeile[i] = '-';
    }
    
    zweiterTeil = zeile.toString();
    
    for (var i = 0; i >= ersterTeil.length - 1; i++) { // Befuellen des dritten Teils rueckwaerts mit dem ersten Teil
    dritterTeil[i] = ersterTeil[ersterTeil.length - 1];
    }
    
    // Zusammenstecken der drei Arrays
    
    for (var i = 0; i < ersterTeil.length - 1; i++) {
    result[i] = ersterTeil[i];
    }
    
    result[buchstabe] = zweiterTeil;
    
    for (var i = buchstabe + 1; i < result.length - 1; i++) {
    result[i] = dritterTeil[i];
    }
    
    return result;
    

   module.exports = {
	   diamond
   }
}

function xify(str) {
        let strA = "";
        for (let count = 0; count < str.length; count++){
            strA += 'x';
        }
        return console.log(strA);
}
    
xify('hello');
xify('hi there');


function yellingChars(str) {
        let strA = "";
        for (let count = 0; count < str.length; count++) {
            strA = strA + str[count] + "!";
        }
        return console.log(strA);
}
    
yellingChars('goodness');
yellingChars('oh hello');


function indexedChars(str) {
        let strA = "";
        for (count = 0; count < str.length; count++) {
            strA += count + str[count];
        }
        return console.log(strA);
}    
    
indexedChars('hello');
indexedChars('bye');


function numberedChars(str) {
        let strA = '';
    
        for (count = 0; count < str.length; count++) {
            strA += "(" + (count + 1) + ")";
            strA += str[count];
        }    
    
        return console.log(strA);
    
}
    
numberedChars('hello');
numberedChars('bye');


function exclaim(str) {
        let strA = "";
    
        for (let count = 0; count < str.length; count++){
           
            if(str[count] === "." || str[count] === "?") {
                strA = strA + "!";
            } else {
                strA = strA + str[count];
            }
        }
    
        return console.log(strA);
    
}
    
exclaim('What are you doing? Are you a fool?');
exclaim('This is fine.')


function repeatIt(str,num) {
        let strA = "";
        for(let count = 0; count < num; count++) {
            //strA = strA + str; 
            strA += str;
        }
        return console.log(strA);
}
    
repeatIt('beetlejuice', 3);
repeatIt('oh hi!', 8);


function truncate(str) {
        let strA = "";
        for (let count = 0; count < 15; count++) {
            
                strA = strA + str[count];
        }
        return console.log(strA + "...");
}
    
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.');
truncate("Well, that's just, like, your opinion man.");


function ciEmailify(str) {

        let strA = "";
    
        for (let count = 0; count < str.length; count++) {
            
            if (str[count] === " ") {
                strA = strA + str + ".";
            } 
          
        }
        
        return console.log(strA + "@codeimmersives.com");
    
}
    
    
ciEmailify('colin jaffe');
ciEmailify('Anthony DeRosa');


function reverse(str) {

        let strA = "";
   
        for (let count = str.length-1; count >= 0; count--) {
           strA = strA + str[count];
        }
        return console.log(strA);
}
   
reverse('colin');
reverse('mesuara');


function onlyVowels(str) {

        let strA = "";
    
        for (let count = 0; count < str.length; count++) {
    
            if (str[count] === "a" || str[count] === "A" ||  str[count] === "e" || str[count] === "E" || str[count] === "i" || str[count] === "I" || str[count] === "o" || str[count] === "O" || str[count] === "u" || str[count] === "U") {
                strA = strA + str[count];
            }
        }
        return console.log(strA);
}
onlyVowels('Colin Jaffe');
onlyVowels('quickly');
onlyVowels('Anthony DeRosa');


function crazyCase(str) {

    let strA = "";
    
        for (let count = 0; count < str.length; count++) {
    
            if (count % 2 === 0) {
    
                strA = strA + str[count].toUpperCase();          
    
            } else {
    
                strA = strA + str[count].toLowerCase();
    
            }
    
        }
    
        return console.log(strA);
    
}
    
crazyCase('hello');
crazyCase('multiple words here');
crazyCase('YELLING');


function titleCase(str) {

    let strA = "";

    for (let count = 0; count < str.length; count++) {

        if (count === 0) {

            strA = strA + str[count].toUpperCase();
            

        } else if (str[count] === " ") {

            strA = strA + str[count]
            strA = strA + str[count += 1].toUpperCase();

        } else {

            strA = strA + str[count].toLowerCase();

        }

    }

    return console.log(strA);

}

titleCase('return of the king');
titleCase('cOde iMMerSives');


function camelCase(str) {

    let strA = "";

    for (let count = 0; count < str.length; count++) {

        if (count === 0) {

            strA = strA + str[count].toLowerCase();
            
        } else if (str[count] === " ") {

            // strA = strA + str[count]
            strA = strA + str[count += 1].toUpperCase();

        } else {

            strA = strA + str[count].toLowerCase();

        }

    }

    return console.log(strA);

}

camelCase('oh Hello');
camelCase('well yeah of course');
camelCase('Boy howdy');


function crazyCase2ReturnOfCrazyCase(str) {

    let strA = "";
    let a = 0;

    for (let count = 0; count < str.length; count++) {

        if (str[count] === " ") {

            a = a + 1;

        }

        if (a % 2 === 0) {

            strA = strA + str[count].toUpperCase();

        } else {

            strA = strA + str[count].toLowerCase();

        }

        a += 1;

    }

    return console.log(strA);

}



crazyCase2ReturnOfCrazyCase('multiple words here');
crazyCase2ReturnOfCrazyCase('crazy stuff');
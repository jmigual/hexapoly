var myArray = new Array();

myArray.push({ name: 'abc', value: 'def', hola: new Array() });
for (var i = 0; i < 10; ++i) myArray[0].hola.push(i);
for (var i = 0; i < myArray[0].hola.length; ++i) document.write(myArray[0].hola[i]);
myArray[0].hola = new Array(0);
for (var i = 0; i < myArray[0].hola.length; ++i) document.write(myArray[0].hola[i]);
document.write("<br>Hola");
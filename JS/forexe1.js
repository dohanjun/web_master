//forexe1.js

// //3 * 1 = 3

//   document.write('<table border="2" ')
// // <table border="2">
// // <tr><td>3 * 1</td><td>=</td><td>3</td></tr>
// // <tr><td>3 * 2</td><td>=</td><td>6</td></tr>
// // </table>
// const num = 3;
// for (let i = 1; i <= 9; i++) {

//   document.write(num + ' * ' + i + ' = ' + num * i + '<br>');
// }
// document.write('</table>');


const num = 3;
document.write('<table border="2"')
for (let i = 1; i <= 9; i++) {
  if(i % 2 == 0){
    document.write('<tr style="background: red; color: #fff;"><td>' + num + ' * ' + i +'</td><td> = </td><td>' + num * i + '</td></tr>')  
  } 
  else{
    document.write('<tr style="background: blue; color: #fff;"><td>' + num + ' * ' + i +'</td><td> = </td><td>' + num * i + '</td></tr>') 
  }
} 






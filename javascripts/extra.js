// (function () {
//     const div = document.createElement('div');
  
//     div.className = 'row';
  
//     div.innerHTML = `
//     <img src="img/palavra-rico.png">
//     `;
  
//     // document.getElementById("bem-vindo-a-rico").appendChild(div);

//     // var anchor= document.createElementByClassName("md-logo");
//     // anchor.href='/';
//     // var element = document.createElement("img");
//     // element.setAttribute("src", "img/home.png");
//     // anchor.appendChild(element);
//     // cell.appendChild(anchor);
//   })();
  
// function removeRow(input) {
//     document.getElementById('content').removeChild(input.parentNode);
// }

// // addRow();

(function () {
    var matches = document.querySelectorAll("h1");
    for(var index in matches) {
        if (matches[index].textContent === "Home") {
            matches[index].textContent = "";
        }
        else if (matches[index].textContent === "Lexicos") {
            matches[index].textContent = "Léxicos";
        }
    }
})();
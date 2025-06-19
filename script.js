function digitalshow() {
    let wideprint = document.getElementById("wprint");
    let volume = document.getElementById("sumid");
    let cost = document.getElementById("sumaid");
    let vprint = document.getElementById("vprint");
    let bprint = document.getElementById("bprint");
    let fbprint = document.getElementById("fbprint");
    let digit = document.getElementById("dprint");
    let phoprint = document.getElementById("pprint");
    let sides = document.getElementById("4+0");
    let glossbut = document.querySelectorAll(".bum");
    let gloss = document.getElementById("gloss");
    let lams = document.getElementById("nonelam");
    let nonebut1 = document.querySelectorAll(".lamb");
    let sizeidp = document.getElementById("sizeidp");
    let densityidw = document.getElementById("densityidw");
    let width123 = document.getElementById("width1");
    let lenght123 = document.getElementById("length1");
    if (digit.classList.contains("active")) {
        let container = document.getElementById("digitalprint");
        let huyinya = document.getElementById("densityid");
        let elements = container.querySelectorAll('*');
        huyinya.value = "";
        let huy = document.getElementById("sizeid");
        huy.value = "";
        elements.forEach(function(element) {
            element.classList.remove("active");
        });
         
        sides.classList.add("active");
        lams.classList.add("active");
        nonebut1.forEach(function(btn) {
            btn.classList.add("inactive");
            btn.classList.remove("active");
            btn.setAttribute("disabled", "disabled");
        volume.min = 10;
        volume.classList.add("active");
        volume.step = 10;
        volume.value = 10;
        });
        document.getElementById("sumaid").value = "0";
        costremove();
        
    } else if(phoprint.classList.contains("active")) {
       glossbut.forEach(function(bbq) {
        bbq.classList.remove("active");
       })
     sizeidp.value = "";
     sizeidp.classList.remove("active");
     gloss.classList.add("active"); 
     document.getElementById("sumaid").value = "0";
     costremove();
    }  else if (wideprint.classList.contains("active")){
    densityidw.value = "";
    densityidw.classList.remove("active");
    width123.value = "0";
    lenght123.value = "0";
    lenght123.classList.remove("active");
    width123.classList.remove("active");
    document.getElementById("sumaid").value = "0";
    document.getElementById("sumaid").classList.remove("active");
    
    costremove();
    } else if (vprint.classList.contains("active")) {
        let matev = document.getElementById("matev");
        let nonelamv = document.getElementById("nonelamv");
        let oneside = document.getElementById("4+0v");
        let container = document.getElementById("viscardprint");
        let elements = container.querySelectorAll('*');
        elements.forEach(function(element) {
            element.classList.remove("active");
        });
        matev.classList.add("active");
        oneside.classList.add("active");
        nonelamv.classList.add("active");
        nonebut1.forEach(function(btn) {
            btn.classList.add("inactive");
            btn.classList.remove("active");
            btn.setAttribute("disabled", "disabled");

           
        });
        document.getElementById("sumaid").value = "0";
        document.getElementById("sumaid").classList.remove("active");
        
        costremove();
    } else if (bprint.classList.contains("active")) {
     let sizebookid = document.getElementById("sizebookid");
     let soft = document.getElementById("soft");
     let hard = document.getElementById("hard");
     let black = document.getElementById("black");
     let colorly = document.getElementById("colorly");
     let pages = document.getElementById("pages");
     sizebookid.value = "";
     sizebookid.classList.remove("active");
     soft.classList.add("active");
     hard.classList.remove("active");
     black.classList.add("active");
     colorly.classList.remove("active");
     pages.value = "50";
     document.getElementById("sumaid").value = "0";
document.getElementById("sumaid").classList.remove("active");

     costremove();
    } else if (fbprint.classList.contains("active")) {
        let sizefbookid = document.getElementById("sizefbookid");
        let softf = document.getElementById("softf");
        let hardf = document.getElementById("hardf");
        let pagesf = document.getElementById("pagesf");
        sizefbookid.value = "";
        sizefbookid.classList.remove("active");
        softf.classList.add("active");
        hardf.classList.remove("active");
        pagesf.value = "1";
        document.getElementById("sumaid").value = "0";
document.getElementById("sumaid").classList.remove("active");

        costremove();
       }

}
function showDiv(divId) {
    var divsToHide = document.getElementsByClassName("content-div");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
        bsumma.value = "0";
        bsumma.classList.remove("active")
        digitalshow()
        
    }

    var divToShow = document.getElementById(divId);
    if (divToShow) {
        divToShow.style.display = "block";
        digitalshow()
    }
}
let buttons = document.querySelectorAll(".genbutton");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        digitalshow();
        calculate();
    });
});



let bsumma = document.getElementById("sumid");

let cost1 = document.getElementById("sumaid");

function costremove() {
    if (cost1.value === "0") {
        cost1.classList.remove("active");
    } else {
        cost1.classList.add("active");
    }
};

bsumma.addEventListener("change", function() {
    if (bsumma.value === "0") {
        bsumma.classList.remove("active");
    } else {
        bsumma.classList.add("active");
    }
    calculate();
  });
  
  let density = document.getElementById("densityid");

  density.addEventListener("change", function() {
    if (density.value === "") {
      density.classList.remove("active");
  } else {density.classList.add("active")}
  calculate();
  });

  let densityw = document.getElementById("densityidw");

  densityw.addEventListener("change", function() {
    if (densityw.value === "") {
      densityw.classList.remove("active");
  } else {densityw.classList.add("active")}
  calculate();
  });
  


  let size = document.getElementById("sizeid");

  size.addEventListener("change", function() {
    if (size.value === "") {
      size.classList.remove("active");
  } else {size.classList.add("active")}
  calculate();
  });
  
  let cover1 = document.querySelectorAll(".cover1");

  cover1.forEach(function(button) {
    button.addEventListener("click", function() {
        cover1.forEach(function(btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        calculate();
    });
  });

  let coverf = document.querySelectorAll(".coverf");

  coverf.forEach(function(button) {
    button.addEventListener("click", function() {
        coverf.forEach(function(btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        calculate();
    });
  });

  let color1 = document.querySelectorAll(".color1");

  color1.forEach(function(button) {
    button.addEventListener("click", function() {
        color1.forEach(function(btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        calculate();
    });
  });

  let bum = document.querySelectorAll(".bum");

  bum.forEach(function(button) {
    button.addEventListener("click", function() {
       bum.forEach(function(btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        calculate();
    });
  });
   
  let sizefbookid = document.getElementById("sizefbookid");

  sizefbookid.addEventListener("change", function() {
    if (sizefbookid.value === "") {
        sizefbookid.classList.remove("active");
  } else {sizefbookid.classList.add("active")}
  calculate();
  });

  let sizebookid = document.getElementById("sizebookid");

  sizebookid.addEventListener("change", function() {
    if (sizebookid.value === "") {
        sizebookid.classList.remove("active");
  } else {sizebookid.classList.add("active")}
  calculate();
  });

  let sizeidp = document.getElementById("sizeidp");

  sizeidp.addEventListener("change", function() {
    if (sizeidp.value === "") {
        sizeidp.classList.remove("active");
  } else {sizeidp.classList.add("active")}
  calculate();  
  });


  let sides = document.querySelectorAll(".sideb");
  
  sides.forEach(function(button) {
    button.addEventListener("click", function() {
        sides.forEach(function(btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        calculate();
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    let width12 = document.getElementById("width1");
    let length12 = document.getElementById("length1");

    width12.addEventListener("change", function() {
        if (width12.value === "0") {
            width12.classList.remove("active");
        } else {
            width12.classList.add("active");
        }
        calculate();
    });

    length12.addEventListener("change", function() {
        if (length12.value === "0") {
            length12.classList.remove("active");
        } else {
            length12.classList.add("active");
        }
        calculate();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let lambbut = document.querySelectorAll(".lamb1");
    let nonelam = document.getElementById("nonelam");
    let nonebut = document.querySelectorAll(".lamb");
    let matelam = document.getElementById("matelam");
    let matelamv = document.getElementById("matelamv");
    let foil = document.getElementById("foil");
    let glosslam = document.getElementById("glosslam");
    let glosslamv = document.getElementById("glosslamv");
    let nonelamv = document.getElementById("nonelamv");
    let foilv = document.getElementById("foilv");

    function nonv() {
        if (nonelamv.classList.contains("active") || foilv.classList.contains("active") || nonelam.classList.contains("active") || foil.classList.contains("active")) {
            nonebut.forEach(function(btn) {
                btn.classList.add("inactive");
                btn.classList.remove("active");
                btn.setAttribute("disabled", "disabled");
            });
        } else {
            nonebut.forEach(function(btn) {
                btn.classList.remove("inactive");
                matelamv.classList.add("active");
                glosslamv.classList.remove("active");
                matelam.classList.add("active");
                glosslam.classList.remove("active");
                btn.removeAttribute("disabled");
            });
        }
    }

   
   


    
    nonebut.forEach(function(button) {
        button.addEventListener("click", function() {
            nonebut.forEach(function(btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
            calculate(); 
        });
    });

    lambbut.forEach(function(button) {
        button.addEventListener("click", function() {
            lambbut.forEach(function(btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
            calculate(); 
            nonv();
        });
    });
});



function calculate() {
 let price = 0;
 let volumes = document.getElementById("sumid");
 let volume = volumes.value;
 let costs = document.getElementById("sumaid");
 let cost = costs.value;
 let dprint = document.getElementById("dprint");
 let pprint = document.getElementById("pprint");
 let wprint = document.getElementById("wprint");
 let vprint = document.getElementById("vprint");
 let bprint = document.getElementById("bprint");
 let fbprint = document.getElementById("fbprint");
 let density = document.getElementById("densityid");
 let size  = document.getElementById("sizeid");
 let x2 = document.getElementById("4+4");
 let boxlam = document.getElementById("boxlam");
 let pripress = document.getElementById("pripress");
 let foil = document.getElementById("foil");
 let matelam = document.getElementById("matelam");
 let glosslam = document.getElementById("glosslam");
 let lamprice = 450;
 costremove();
  switch (true) {
    case(dprint.classList.contains("active")):
       switch (true) {
        case(density.value === "80"):
         price = 75;
        break;
        case(density.value ==="130"):
        price = 80;
        break;
        case(density.value === "raflatak"):
        price = 85;
        break;
        case(density.value === "150"):
        price = 90;
        break;
        case(density.value === "170"):
        price = 95;
        break;
        case(density.value === "200"):
        price = 100;
        break;
        case(density.value === "250"):
        price = 105;
        break;
        case(density.value === "300"):
        price = 110;
        break;
        case(density.value === "350"):
        price = 115;
        break;
       }


       switch (true) {
        case(size.value === ""):
        price = 0;
        lamprice = 0;
        case(size.value === "a3"):
        price *= 1; 
        lamprice = 300;
       break;
        case(size.value === "a4"):
        price *= 0.5;
        lamprice = 150;
       break;
       case(size.value === "a5"):
        price *= 0.25;
        lamprice = 75;
       break;
       case(size.value === "a6"):
        price *= 0.125;
        lamprice = 40;
       break;
       }
 
        if (x2.classList.contains("active")) {
            price *= 1.6;
        }
    
        if (boxlam.classList.contains("active")) {
            price += lamprice;
        } else if (pripress.classList.contains("active")) {
            lamprice *= 0.6;
            price += lamprice; 
        } else if (foil.classList.contains("active")) {
            lamprice *= 0.9;
            price += lamprice;
        }

        if (boxlam.classList.contains("active")&&matelam.classList.contains("active")) {
            lamprice *= 0.6;
            price += lamprice;
        } 
        
        let endcost = volume * price;
        costs.value = endcost;

        break;
    case(pprint.classList.contains("active")):

    break;
    case(wprint.classList.contains("active")):

    break;
    case(vprint.classList.contains("active")):

    break;
    case(bprint.classList.contains("active")):

    break;
    case(fbprint.classList.contains("active")):

    break;
  }
}

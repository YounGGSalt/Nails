let iIMG_1 = document.querySelector(".I1");
let iIMG_2 = document.querySelector(".I2");
let iIMG_3 = document.querySelector(".I3");

let ProgressBar_1 = document.querySelector(".Pr1");
let ProgressBar_2 = document.querySelector(".Pr2");
let ProgressBar_3 = document.querySelector(".Pr3");

function ChangeIMG() {
  let i1 = 0;
  var PrInt1 = setInterval(() => {
    i1++;
    if (i1 === 800) {
      clearInterval(PrInt1);
      ProgressBar_1.classList.add("cl");
    } else {
      ProgressBar_1.style.width = i1/6.5 + "%";
    }
  }, 1);

  ProgressBar_1.classList.remove("cl");

  setTimeout(() => {
    iIMG_1.classList.add("cl");
    iIMG_2.classList.add("cl");
    iIMG_3.classList.add("cl");

    let i2 = 0;
    var PrInt2 = setInterval(() => {
      i2++;
      if (i2 === 800) {
        clearInterval(PrInt2);
        ProgressBar_2.classList.add("cl");
      } else {
        ProgressBar_2.style.width = i2/6.5 + "%";
      }
    }, 1);
    
    ProgressBar_2.classList.remove("cl");
  
    setTimeout(() => {
      iIMG_1.classList.add("cl1");
      iIMG_2.classList.add("cl1");
      iIMG_3.classList.add("cl1");

      let i3 = 0;
      var PrInt3 = setInterval(() => {
        i3++;
        if (i3 === 800) {
          clearInterval(PrInt3);
          ProgressBar_3.classList.add("cl");
        } else {
          ProgressBar_3.style.width = i3/6.5 + "%";
        }
      }, 1);

      ProgressBar_3.classList.remove("cl");
  

      setTimeout(() => {
        iIMG_1.classList.remove("cl");
        iIMG_2.classList.remove("cl");
        iIMG_3.classList.remove("cl");
        iIMG_1.classList.remove("cl1");
        iIMG_2.classList.remove("cl1");
        iIMG_3.classList.remove("cl1");

        

      }, 3000);
    }, 3000);
  }, 3000);
}

window.onload = () => {
  setTimeout(() => {
    ChangeIMG();
      setInterval(() => {
    ChangeIMG();
  }, 9000);
  }, 500);
}

let M_ServicesBt = document.querySelector(".M_ServicesBt");
let M_ServicesBody = document.querySelector(".M_ServicesBody");

M_ServicesBt.onclick = () => {
  M_ServicesBt.classList.add("hover");
  B_ServicesBody.classList.remove("cl");
  B_ServicesBt.classList.remove("hover");
  M_ServicesBody.classList.remove("cl");
}

let B_ServicesBt = document.querySelector(".B_ServicesBt");
let B_ServicesBody = document.querySelector(".B_ServicesBody");

B_ServicesBt.onclick = () => {
  B_ServicesBt.classList.add("hover");
  M_ServicesBody.classList.add("cl");
  M_ServicesBt.classList.remove("hover");
  B_ServicesBody.classList.add("cl");
}
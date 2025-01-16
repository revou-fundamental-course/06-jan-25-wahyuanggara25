// ini file javascript

function replaceName() {
  let nama = prompt("Siapakah nama anda?", "");
  document.getElementById("nama").innerHTML = nama;
}

document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});

function formValidation() {
  let nameInput = document.getElementById("name-input").value;
  console.log(nameInput);

  //kondisi
  if (nameInput == "") {
    alert("Nama tidak boleh kosong");
  } else {
    document.getElementById("result-form").innerHTML = nameInput;
  }
}

document.getElementById("submit-btn").addEventListener("click", formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner = indexBanner + 1;
  changeBackground();
}

//function to change background
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");

  if (indexBanner > bannerList.length - 1) {
    //reset indexbanner
    indexBanner = 0;
  }

  // looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);

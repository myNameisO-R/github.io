const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dogs.jpg") {
    myImage.setAttribute("src", "images/dogcafe.jpg");
  } else {
    myImage.setAttribute("src", "images/dogs.jpg");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'I LOVE DOGS, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'I LOVE DOGS, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
  
  

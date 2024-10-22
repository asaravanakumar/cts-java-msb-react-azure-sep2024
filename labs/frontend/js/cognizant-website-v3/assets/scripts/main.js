// event handler fn 
function handleClick(event){ // event object
  alert('Started learning JS');
  console.log(event);
  // let's do dom manipulation
  event.target.innerText = 'Learning JS';

  // TODO: disable the button
  // TODO: change the bg color of the button 
  // TODO: change the text color of the button
}

const savePincodeBtn = document.getElementById('savePincodeBtn');
savePincodeBtn.addEventListener('click', function() {
  const enteredPincode = document.getElementById('pincodeInput').value;
  console.log(enteredPincode);
  localStorage.setItem('pincode', enteredPincode);
  alert(' Pincode has been Saved');
});


const locateMeBtn = document.getElementById('locateMeBtn');
locateMeBtn.addEventListener('click', function() {
  console.log('will access location upon consent from user')
  if(navigator.geolocation){
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(geolocationAccessGranted, geolocationAccessDenied)
  }
});

function geolocationAccessGranted(location){
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  document.getElementById('locationBox').innerText = `You are here => 
      Latitude: ${location.coords.latitude} and 
      Longitude: ${location.coords.longitude}`;
}

function geolocationAccessDenied(){
  alert('can not access location');
}


/* Custom Components */
// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create spans
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    // Take attribute content and put it inside the info span
    const text = this.getAttribute('data-text');
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 36px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 32px;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
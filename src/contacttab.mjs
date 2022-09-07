export const createContactPage = (wrapper) => {
  // phone content

  const phonePara = document.createElement('p');
  phonePara.textContent = 'TELEPHONE';
  phonePara.classList.add('bigtext');
  phonePara.style.textAlign = 'center';

  wrapper.appendChild(phonePara);

  const phoneWrapper = document.createElement('div');
  phoneWrapper.classList.add('phonewrapper');

  wrapper.appendChild(phoneWrapper);

  const phoneIcon = document.createElement('img');
  phoneIcon.src = 'style/images/phone.svg';
  phoneIcon.style.width = '25px';

  const paraNumber = document.createElement('p');
  paraNumber.classList.add('description');
  paraNumber.textContent = '123 345 678';
  paraNumber.style.fontSize = '1.5rem';

  phoneWrapper.appendChild(phoneIcon);
  phoneWrapper.appendChild(paraNumber);

  // adress content

  const addressPara = document.createElement('p');
  addressPara.textContent = 'ADRESS';
  addressPara.classList.add('bigtext');
  addressPara.style.textAlign = 'center';

  const paraAdress = document.createElement('p');
  paraAdress.classList.add('description');
  paraAdress.textContent = 'Unknown...';
  paraAdress.style.textAlign = 'center';

  wrapper.appendChild(addressPara);
  wrapper.appendChild(paraAdress);
};

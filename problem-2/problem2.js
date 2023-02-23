// create a new element and append it to the DOM in order to display the offer.
const nodeElement = document.createElement('p');
nodeElement.style.backgroundColor = '#77FFC2';
nodeElement.style.width = 'fit-content';
nodeElement.style.padding = '0.5rem';
nodeElement.setAttribute('id','offerText');
nodeElement.style.display = 'none';
document.querySelector('.product__price').parentElement.parentElement.insertAdjacentElement('afterend',nodeElement);

// create function that calculates the offer that applies
const calculateOffer = () => {
  // productsToApply: 18-24, 2T, 3T
  const productsToApply = ['18-24 months', '2T', '3T'];
  const selectedNode = document.querySelector('.pdp-variant-select-label.tw-text-center.pdp-variant-select-label-active').innerText;
  nodeElement.style.display = 'none';
  if (productsToApply.includes(selectedNode)) {
    const quantity = document.querySelectorAll('.tw-hidden.tw-text-night.tw-text-xl.tw-font-galano.tw-font-medium.tw-h-fit.tw-p-0.tw-border-0.tw-text-center.tw-leading-4.pdp-quantity-input.js-pdp-quantity-input.js-qty')[0].value;
    nodeElement.style.display = 'block';
    switch (quantity) {
      case '1':
        document.querySelector('#offerText').innerHTML = 'Add 2 of this product and the third one is free!';
        break;
      case '2':
        document.querySelector('#offerText').innerHTML = 'Add another one free to your cart';
        break;
      case '3':
        document.querySelector('#offerText').innerHTML = 'Congrats! add to cart now!';
        break;
      default:
        nodeElement.style.display = 'none';
    }
  }
};

// find the buttons that trigger the function of the offer
const buttons = document.querySelectorAll('.pdp-variant-select-label');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    calculateOffer();
  });
}
document.querySelector('[data-minus="true"]').addEventListener('click', function() {
  calculateOffer();
});
document.querySelector('[data-plus="true"]').addEventListener('click', function() {
  calculateOffer();
});

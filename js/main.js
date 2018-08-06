// select all inputs on screen
// when input value changes --> JS elements will update the CSS values

// NOTE: querySelector and querySelectorAll return a nodeList and not an array
// CANNOT call array methods on nodeList
// in the future will need to learn how to covert nodeLists into arrays
const inputs = document.querySelectorAll('.controls input');


function handleChange() {
    // console.log(this.value);

    // dataset is an OBJECT that contains all data-values on the element
    const suffix = this.dataset.sizing || this.dataset.degree || ''; // accessing SIZING data-set
    // console.log(suffix);
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 



    // const img = document.querySelector('img');
    // img.style.setProperty('--spacing', this.value + suffix);
    // img.style.setProperty('--base', this.value);
    // img.style.setProperty('--blur', this.value + suffix);


}

// use forEach to loop through nodeList
inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
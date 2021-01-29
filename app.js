let gm = document.getElementById('gmOutput');
let kg = document.getElementById('kgOutput');
let oz = document.getElementById('ozOutput');
let output = document.getElementById('output');

output.style.visibility = 'hidden';

document.getElementById('inputLbs').addEventListener('input', function (e) {
    let lbs = e.target.value;
    output.style.visibility = 'visible';
    gm.innerHTML = `<hr> <h5>${lbs / 0.0022046}</h5>`;
    kg.innerHTML = `<hr> <h5>${lbs / 2.205}</h5>`;
    oz.innerHTML = `<hr> <h5>${lbs * 16}</h5>`;
})
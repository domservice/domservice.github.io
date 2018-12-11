// Init vars
const btn =  document.querySelector('.btn');
const input = document.querySelector('.form-control');
const resultEl = document.querySelector('.panel');
let result;
let gCal;
const coefficient = 0.00086;

// Rate in UAH from MikromegasServis per 1 Gcal;
const rate = 1678.76;


// Hide DOM result by default
resultEl.style.display = 'none';


btn.addEventListener('click', function() {
  maceCalc(input.value);
  showResult();
});

input.addEventListener('input', function() {
  if(this.value.length > 0) {
    resultEl.style.display = 'none';
  }
});

// Calc input
const maceCalc =  function(value) {
  let convertToGcal = value * coefficient;
  gCal = convertToGcal;
  result = Math.round(convertToGcal * rate);
  return result;
};

const showResult = function() {
  if(result > 0) {
    document.querySelector('.panel-body p').innerHTML = '<strong>' + result + '</strong> грн' + 
    '<br>' + '<strong>' + gCal + '</strong> Гкал';
    resultEl.style.display = 'block';
  }
}


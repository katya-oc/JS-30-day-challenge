const inputs = document.querySelectorAll('.controls input');

const sizeSlider = document.querySelector('.size');

sizeSlider.addEventListener('mousemove', function () {
  const val = sizeSlider.value / 3;
  const color = 'linear-gradient(90deg,var(--base)' + val + '%,rgb(255, 255, 255)' + val + '%)';
  sizeSlider.style.background = color;
});

const cornerSlider = document.querySelector('.corner');

cornerSlider.addEventListener('mousemove', function () {
  const val = cornerSlider.value * 2;
  const color = 'linear-gradient(90deg,var(--base)' + val + '%,rgb(255, 255, 255)' + val + '%)';
  cornerSlider.style.background = color;
});

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
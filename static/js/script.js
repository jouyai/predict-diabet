document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('test-mode-toggle');
    const testButtonsWrapper = document.getElementById('test-buttons-wrapper');

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            testButtonsWrapper.style.display = 'flex';
        } else {
            testButtonsWrapper.style.display = 'none';
        }
    });
});

function fillFormNegative() {
    document.getElementById('pregnancies').value = 1;
    document.getElementById('glucose').value = 85;
    document.getElementById('blood_pressure').value = 66;
    document.getElementById('skin_thickness').value = 29;
    document.getElementById('insulin').value = 0;
    document.getElementById('bmi').value = 26.6;
    document.getElementById('dpf').value = 0.351;
    document.getElementById('age').value = 31;
}

function fillFormPositive() {
    document.getElementById('pregnancies').value = 8;
    document.getElementById('glucose').value = 183;
    document.getElementById('blood_pressure').value = 64;
    document.getElementById('skin_thickness').value = 0;
    document.getElementById('insulin').value = 0;
    document.getElementById('bmi').value = 23.3;
    document.getElementById('dpf').value = 0.672;
    document.getElementById('age').value = 32;
}

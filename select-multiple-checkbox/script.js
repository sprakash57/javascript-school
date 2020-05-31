
const checkboxes = document.querySelectorAll('input');
let lastChecked;
function detectCheck(e) {
    let between = false
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(c => {
            if (c === this || c === lastChecked) between = !between;
            if (between) c.checked = true;
        })
    }
    lastChecked = this
}
checkboxes.forEach(c => c.addEventListener('click', detectCheck))
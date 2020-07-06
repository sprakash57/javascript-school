const addForm = document.querySelector('.add-items');
const plates = document.querySelector('.plates');

const dishes = JSON.parse(localStorage.getItem('dishes')) || [];

function renderList(dishes) {
    return dishes.map((dish, i) => `
    <li>
        <input type="checkbox" data-index=${i} id="dish${i}" ${dish.done ? "checked" : ""}/>
        <label for="dish${i}">${dish.name}</label>
    </li>
`).join('');
}

plates.innerHTML = renderList(dishes);

function handleSubmit(e) {
    e.preventDefault();
    dishes.push({ name: this.item.value, done: false });
    localStorage.setItem('dishes', JSON.stringify(dishes));
    plates.innerHTML = renderList(dishes);
    this.reset();
}

function toggleCheck(e) {
    if (!e.target.matches('input')) return;
    const selected = this.dataset.index;
    dishes[selected].done = !dishes[selected].done;
    localStorage.setItem('dishes', JSON.stringify(dishes));
}

addForm.addEventListener('submit', handleSubmit);
plates.addEventListener('click', toggleCheck)
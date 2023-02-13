document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('[data-el=block]');
    const controlCollention = document.querySelectorAll('[data-el=input]');
    const selectPositionElement = document.querySelector('[data-el=position]');

    selectPositionElement.addEventListener('change', (event) => {
        element.style.position = event.target.value;

        controlCollention.forEach(input => {
            const type = input.dataset.type;

            element.style[type] = `${input.value}px`;
        });
    });

    controlCollention.forEach(input => {
        input.addEventListener('change', () => {
            const type = input.dataset.type;

            element.style[type] = `${input.value}px`;
        })
    });
})

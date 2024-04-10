interact('.draggable')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        listeners: {
            start(event) {
                const original = event.target;
                const clone = original.cloneNode(true); // Deep clone the node

                // Generating a simple unique identifier for each clone
                const uniqueId = `clone-${Date.now()}-${Math.random().toString(16).substring(2)}`;
                clone.setAttribute('data-clone-id', uniqueId);

                clone.style.opacity = '0.6';
                clone.classList.add('clone');

                const rect = original.getBoundingClientRect();
                clone.style.position = 'absolute';
                clone.style.left = `${rect.left}px`;
                clone.style.top = `${rect.top}px`;

                document.body.appendChild(clone);

                // Restore the position if it exists
                const savedPosition = localStorage.getItem(uniqueId);
                if (savedPosition) {
                    const { x, y } = JSON.parse(savedPosition);
                    clone.style.transform = `translate(${x}px, ${y}px)`;
                    clone.setAttribute('data-x', x);
                    clone.setAttribute('data-y', y);
                }

                event.interactable.clone = clone;
            },
            move(event) {
                const target = event.interactable.clone;
                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                target.style.transform = `translate(${x}px, ${y}px)`;
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
            end(event) {
                const target = event.interactable.clone;
                var textEl = target.querySelector('p');

                if (textEl) {
                    textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px';
                }

                // Save the final position
                const uniqueId = target.getAttribute('data-clone-id');
                const x = target.getAttribute('data-x');
                const y = target.getAttribute('data-y');
                localStorage.setItem(uniqueId, JSON.stringify({ x, y }));
            }
        }
    });

function getPositionFromLocalStorage(uniqueId) {
    // Retrieve the position object from localStorage
    const positionJson = localStorage.getItem(uniqueId);
    if (positionJson) {
        return JSON.parse(positionJson);
    }
    return null;
}


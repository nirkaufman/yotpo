
// Helper function to v=create Element (Object)
function createElement(type, props, ...children) {
  return { type, props, children };
}

// Component: Function that return an element (object)
function Button({ text, onClick }) {
  return createElement('button', {onClick}, text);
}

const App = createElement('div', null,
  createElement('input', { type: 'text' }),
  Button({ text: 'submit', onClick: function () {alert(2)} }),
  createElement('ul', null,
    createElement('li', null, '#1'),
    createElement('li', null, '#2'),
    createElement('li', null, '#3'),
  ),
)

console.log(App);


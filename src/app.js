import { createElement } from '../libs/react.js';


// Component: Function that return an element (object)
function Button({ onClick, label }) {
  return createElement('button', { onClick }, label);
}

const colors = ['red', 'green', 'blue'];

function List({ items }) {
  return (
    createElement('ul', null,
      ...items.map( item =>  createElement('li', null, item))
    )
  )
}

// ----------------------------------------------------

const App = createElement('div', null,
  // <input type={} />
  createElement('input', { type: 'text' }),
  // <Button onClick={}>click</Button>
  createElement(Button, {
    label: 'click', onClick: function () {
      alert(2)
    }
  }),
  createElement(List, { items: colors }),
)

export default App;


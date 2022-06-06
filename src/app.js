import {createElement} from '../libs/react.js';


// Component: Function that return an element (object)
function Button({ onClick, label}) {
  return createElement('button', {onClick}, label );
}

const colors = ['red', 'green', 'blue'];

function List() {

}

// ----------------------------------------------------

const App = createElement('div', null,
  // <input type={} />
  createElement('input', { type: 'text' }),
  // <Button onClick={}>click</Button>
  createElement(Button, {label: 'click', onClick: function () {alert(2)} }),
  createElement(List, {items: colors}),
  createElement('ul', null,
    createElement('li', null, '#1'),
    createElement('li', null, '#2'),
    createElement('li', null, '#3'),
  ),
)

export default App;


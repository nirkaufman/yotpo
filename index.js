function createElement(type, props, ...children) {
  return { type, props, children };
}

const App = createElement('div', null,
  createElement('input', { type: 'text' }),
  createElement('button', null, 'click'),
  createElement('ul', null,
    createElement('li', null, '#1'),
    createElement('li', null, '#2'),
    createElement('li', null, '#3'),
  ),
)


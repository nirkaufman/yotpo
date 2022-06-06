
function renderElement(element) {
  const {type, props, children} = element;

  if(typeof type === 'function') {
    return renderElement(type(props));
  }

  const domElement = document.createElement(type);

  children.forEach(child => {

    if(typeof child === 'string') {
      domElement.appendChild(document.createTextNode(child));
    } else {
      domElement.appendChild(renderElement(child));
    }
  })

  for(const prop in props) {
    if(typeof prop === 'string' &&
       prop.startsWith('on')) {
      const eventName = prop.slice(2).toLowerCase();
      domElement.addEventListener(eventName, props[prop])
    }
  }

  return domElement;
}

export function render(container, rootElement) {
  const dom = renderElement(rootElement);
  container.appendChild(dom);
}

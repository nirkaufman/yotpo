
const App = {
  type: 'div',
  children: [
    {
      type: 'input',
      props: { type: 'test', id: 'username' },
      children: []
    },
    {
      type:'button',
      props: {},
      children: ['click']
    },
    {
      type: 'ul',
      props: null,
      children: [
        {type: 'li', props: null, children: ['#1']},
        {type: 'li', props: null, children: ['#2']},
        {type: 'li', props: null, children: ['#3']},
      ]
    }
  ]
}

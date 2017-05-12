import 'preact/devtools'
import {hydrateInitialState} from 'reshape-preact-ssr'
import {render} from 'preact'
import Example from './components/example'

const el = document.querySelector('.g-example')
const vdom = hydrateInitialState(el.dataset.state, {
  'example-component': Example
})
render(vdom, el.parentElement, el)

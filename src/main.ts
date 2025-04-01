import m from 'mithril'
import App from './App'

const root = document.getElementById('root')
if (root) {
  m.mount(root, App)
} else {
  console.log('please enable javascript')
}

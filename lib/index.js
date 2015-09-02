import dom from 'dekujs/virtual-element'
import {render, tree} from 'dekujs/deku'
import routes from './routes'
import actions from './actions'
import seeds from './stores/seed'
import App from './app'

let app = tree(dom(App))
app.use(actions)
app.use(routes)
app.use(seeds())

render(app, document.getElementById('app'))
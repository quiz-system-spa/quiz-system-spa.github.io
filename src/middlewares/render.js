import { render } from '../../lit-html/lit-html.js'
import { navTemplate } from '../views/nav.js';
import { getUserData } from '../views/utils.js';
const root = document.querySelector('#titlebar')

export function addRenderer(ctx, next) {
    const user = getUserData();
    if (user != null) {
        render(navTemplate(true), root)
    } else {
        render(navTemplate(false), root)
    }
    const container = document.querySelector('#content')
    ctx.show = (html) => container.innerHTML = html
    ctx.render = (content) => render(content, container)
    next()
}
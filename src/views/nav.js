import { html } from '../../lib/lit-html/lit-html.js'
import { logoutUser } from '../api/auth.js'
import page from '../../lib/page.mjs'

export const navTemplate = (isUser) => html`
            <nav>
                <a class="logotype" href="/"><i class="fas fa-question-circle"></i><i
                        class="merge fas fa-check-circle"></i><span>Quiz Fever</span></a>
                <div class="navigation">
                    <a class="nav-link" href="/browse">Browse</a>
                    ${isUser ? userNav : guestNav}
                </div>
            </nav>`

const userNav = html`
<div id="user-nav" style="display:block">
                        <a class="nav-link" href="/edit">Create</a>
                        <a class="nav-link profile-link" href="#"><i class="fas fa-user-circle"></i></a>
                        <a id="logoutBtn" @click=${logoutSubmit} class="nav-link" href="javascript:void(0)">Logout</a>
                    </div>`

const guestNav = html`
            
            <div id="guest-nav"style="display:block">
                        <a class="nav-link" href="/login">Sign in</a>
                    </div>`

function logoutSubmit() {
    logoutUser();
    page.redirect('/')
}

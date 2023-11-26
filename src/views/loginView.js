import { loginUser } from "../api/auth.js";
import { createSubmitHandler } from "./utils.js";
import { html } from '../../lib/lit-html/lit-html.js'

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="pad-large">
        <div class="glass narrow">
            <header class="tab layout">
                <h1 class="tab-item active">Login</h1>
                <a class="tab-item" href="/register">Register</a>
            </header>
            <form @submit=${onSubmit} class="pad-med centered">
                <label class="block centered">Email: <input class="auth-input input" type="text"
                        name="email" /></label>
                <label class="block centered">Password: <input class="auth-input input" type="password"
                        name="password" /></label>
                <input class="block action cta" type="submit" value="Sign In" />
            </form>
            <footer class="tab-footer">
                Don't have an account? <a class="invert" href="/register">Create one here</a>.
            </footer>
        </div>
    </div>
</section>`

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)))

    async function onLogin({ email, password }) {
        let error = ''
        if (!email || !password) {
            error = 'All fields are required!';
        }
        if (error) {
            ctx.render(loginTemplate(createSubmitHandler(onLogin), error));
            return
        }
        await loginUser(email, password);
        ctx.page.redirect('/');
    }
}

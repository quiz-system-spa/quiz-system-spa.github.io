import { registerUser } from "../api/auth.js";
import { createSubmitHandler } from "./utils.js";
import { html } from '../../lib/lit-html/lit-html.js'

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="pad-large">
        <div class="glass narrow">
            <header class="tab layout">
                <a class="tab-item" href="/login">Login</a>
                <h1 class="tab-item active">Register</h1>
            </header>
            <form @submit=${onSubmit} class="pad-med centered">
                <label class="block centered">Username: <input class="auth-input input" type="text"
                        name="username" /></label>
                <label class="block centered">Email: <input class="auth-input input" type="text"
                        name="email" /></label>
                <label class="block centered">Password: <input class="auth-input input" type="password"
                        name="password" /></label>
                <label class="block centered">Repeat: <input class="auth-input input" type="password"
                        name="repass" /></label>
                <input class="block action cta" type="submit" value="Create Account" />
            </form>
            <footer class="tab-footer">
                Already have an account? <a class="invert" href="/login">Sign in here</a>.
            </footer>
        </div>
    </div>
</section>`

export function registerPage(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onRegister)))

  async function onRegister({ username, email, password, repass }) {
    let error = ''
    if (!username || !email || !password) {
      error = 'All fields are required!';
    }
    if (password != repass) {
      error = "Passwords don't match!"
    }
    if (error) {
      ctx.render(registerTemplate(createSubmitHandler(onRegister), error));
      return
    }
    await registerUser(username, email, password);
    ctx.page.redirect('/');
  }
}

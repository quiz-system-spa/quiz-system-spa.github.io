console.log('works');
import page from '../../page/page.mjs'
import { addRenderer } from '../middlewares/render.js';
import { homePage } from './homeView.js';
import { registerPage } from './registerView.js';
import { loginPage } from './loginView.js';
import { browsePage } from './browseView.js';
import { contestPage } from './contestView.js';
import { detailsPage } from './detailsView.js';
import { editPage } from './editView.js';
import { resultPage } from './resultView.js';
import { loaderMiddleware } from '../middlewares/loader.js';


page(addRenderer);
page(loaderMiddleware);
page('/index.html', '/');
page('/', homePage);
page('/browse', browsePage);
page('/contest', contestPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/result', resultPage)
page('/register', registerPage)
page('/login', loginPage)
page('*', '/');
page.start()
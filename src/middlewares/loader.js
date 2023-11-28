const loader = document.querySelector('#loader')
export function loaderMiddleware(ctx, next) {
    loader.style.display = 'none';
    next();
}
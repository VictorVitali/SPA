function handle(){
    const {pathname} = window.location
    const route = routes[pathname] || routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#app').innerHTML = html)

}

export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault() /* previne que os eventos padrões do navegador ocorram, nesse caso, ele não irá redirecionar para uma outra página (como uma multi page application), mas ficará na mesma */
    
        window.history.pushState({}, "", event.target.href)       
    
        this.handle()/* O 'this' referencia alguma função que se encontra dentro do par de chaves */
    }
    
    handle() {
        const { pathname } = window.location /* Essa maneira de descrever a ação que o location deve realizar, chama-se desestruturação. Evitamos de escrever: pathname = window.location.pathname */
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route) /* A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises. Fetch significa buscar*/
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })

        console.log(pathname)

        switch(pathname) {
            case "/":
                document.body.style.backgroundImage = 'url(/images/home_img.png)'
                break;
            case "/universe":
                document.body.style.backgroundImage = 'url(/images/universe_img.png)'
                break;
            case "/exploration":
                document.body.style.backgroundImage = 'url(/images/exploration_img.png)'
                break;
            default:
                document.body.style.backgroundImage = 'url(/images/home_img.png)'
        }
    } 
    
    
}



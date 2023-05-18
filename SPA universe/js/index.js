import { Router } from './router.js'

const router = new Router()/* Aqui ele receberá a classe que está no módulo Router */

/* Refere-se ao add que está no  router */
router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
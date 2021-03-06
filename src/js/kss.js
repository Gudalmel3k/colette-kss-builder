import ScrollSpy from 'scrollspy-js'
import Headroom from 'headroom.js'
import Tablist from 'accedeweb-tablist'
import kssStateGenerator from './modules/kssStateGenerator'
import kssNav from './modules/kssNav'

const kss = {}

kss.stateGenerator = kssStateGenerator()

kss.scrollSpy = new ScrollSpy('body', {
  nav: '.co_sidebar-active .co_sidebar-children > li > a',
  className: 'co_sidebar-active',
})

kss.headroom = new Headroom(document.querySelector('.co_navbar'), {
  offset: 50,
  tolerance: 5,
  classes: {
    initial: 'co_navbar-animated',
    pinned: 'co_navbar-pinned',
    unpinned: 'co_navbar-unpinned',
  },
})

// init headroom
kss.headroom.init()

const markupTabs = []
Array.prototype.forEach.call(document.querySelectorAll('.co_tabpanel-list'), (item) => {
  markupTabs.push(new Tablist(item))
})

kss.nav = kssNav()

export { kss }

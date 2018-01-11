const Client             = require('./client');
const getElementById     = require('../../_common/common_functions').getElementById;
const applyToAllElements = require('../../_common/utility').applyToAllElements;
const findParent         = require('../../_common/utility').findParent;
require('../../_common/lib/mmenu/jquery.mmenu.min.all.js');

const Menu = (() => {
    let main_menu,
        menu_top,
        items;

    const init = () => {
        main_menu = getElementById('main-menu');
        menu_top  = getElementById('menu-top');

        items = main_menu.getElementsByClassName('item');

        applyToAllElements('li', (el) => { el.classList.remove('active'); }, '', menu_top);
        hideMainMenu();

        activeMenuTop();

        if (Client.isLoggedIn() || /\/(cashier|resources|trading|trading_beta|multi_barriers_trading)/i.test(window.location.pathname)) {
            showMainMenu();
        }
    };

    const showMainMenu = () => {
        if (main_menu) {
            main_menu.setVisibility(1);
        }
        activateMainMenu();
        Client.activateByClientType('main-menu');
    };

    const hideMainMenu = () => {
        if (main_menu) {
            main_menu.setVisibility(0);
        }
    };

    const activateMainMenu = () => {
        // First unset everything.
        applyToAllElements(items, (el) => { el.classList.remove('active', 'hover'); });
        applyToAllElements('.sub_item a', (el) => { el.classList.remove('a-active'); }, '', main_menu);

        const active         = activeMainMenu();
        const active_item    = active.item;
        const active_subitem = active.subitem;
        if (active_subitem) {
            active_subitem.classList.add('a-active');
        }

        if (active_item) {
            active_item.classList.add('active', 'hover');
            onMouseHover(active_item);
        }
    };

    const onUnload = () => {
        if (main_menu) {
            main_menu.removeEventListener('mouseleave', onMouseLeave);
        }
        applyToAllElements(items, (el) => { el.removeEventListener('mouseenter', onMouseEnter); });
    };

    const removeHover = () => {
        applyToAllElements(items, (el) => { el.classList.remove('hover'); });
    };

    const onMouseHover = (active_item) => {
        main_menu.addEventListener('mouseleave', () => {
            onMouseLeave(active_item);
        });
        applyToAllElements(items, (el) => { el.addEventListener('mouseenter', onMouseEnter); });
    };

    const onMouseLeave = (active_item) => {
        removeHover();
        if (/active/.test(active_item.classList)) active_item.classList.add('hover');
    };

    const onMouseEnter = (e) => {
        removeHover();
        e.target.classList.add('hover');
    };

    const activeMenuTop = () => {
        const path       = window.location.pathname;
        const menu_items = Array.from(menu_top.getElementsByTagName('a'));
        const active     = menu_items.find(link => link.offsetParent && path.indexOf(link.pathname.replace(/\.html/, '')) >= 0);

        if (active) {
            findParent(active, 'li').classList.add('active');
        }
    };

    const activeMainMenu = () => {
        let pathname = window.location.pathname;
        if (/cashier/i.test(pathname) && !(/cashier_password|payment_methods/.test(pathname))) {
            const cashier = getElementById('topMenuCashier');
            const link = cashier.getElementsByTagName('a')[0];
            if (link) {
                pathname = link.getAttribute('href');
            }
        }
        if (!main_menu) {
            return {};
        }
        let subitem;
        let item = main_menu.querySelector(`a[href*="${pathname}"]`);

        if (item) {
            const parent = findParent(item, 'li');
            // Is something selected in main items list
            if (parent && parent.classList.contains('sub_item')) {
                subitem = item;
                item    = findParent(subitem, '.item');
            } else {
                item = parent;
            }
        }

        return { item, subitem };
    };

    const makeMobileMenu = () => {
        // avoid creating mobile menu in desktop view as it duplicates menu items with the same id
        if (getElementById('mobile-menu-container').offsetParent) {
            $('#mobile-menu').mmenu({
                position       : 'right',
                zposition      : 'front',
                slidingSubmenus: false,
                searchfield    : true,
                onClick        : { close: true },
            }, { selectedClass: 'active' });
        }
    };

    return {
        init,
        onUnload,
        makeMobileMenu,
        activeMenuTop,
    };
})();

module.exports = Menu;

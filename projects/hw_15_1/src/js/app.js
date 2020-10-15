const installHeaderStyles = () => {
    const $nav = $(".nav");

    if ($nav.length) {
        $(document).on("scroll", (e, d) => {
            const offset = $(document).scrollTop();
            if (offset > 40 && !$nav.hasClass("_shadow")) {
                $nav.addClass("_shadow");
            } else if (offset <= 40 && $nav.hasClass("_shadow")) {
                $nav.removeClass("_shadow");
            }
        });
    }
};

window.onload = () => installHeaderStyles();

AOS.init({ duration: 1000 });

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu__button");
    let links = menu.find(".burger-menu__link");
    let overlay = menu.find(".burger-menu__overlay");

    button.on("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on("click", () => toggleMenu());
    overlay.on("click", () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass("burger-menu_active");
        if (menu.hasClass("burger-menu_active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "visible");
        }
    }
}

burgerMenu(".burger-menu");
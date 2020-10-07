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
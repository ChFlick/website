
function main() {
    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        // skills chart
        $(document).ready(function (e) {
            //var windowBottom = $(window).height();
            var index = 0;
            $(document).scroll(function () {
                var top = $('.skills-section').height() - $(window).scrollTop();
                if (top < -300) {
                    if (index == 0) {

                        $('.chart').easyPieChart({
                            barColor: '#121D1F',
                            scaleColor: false,
                            lineWidth: '5',
                            onStep: function (from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });

                    }
                    index++;
                }
            })
        });
    }());
}
main();
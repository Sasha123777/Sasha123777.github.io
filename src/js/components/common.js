export default new (class Common {
    constructor() {
        const _this = this;

        $(document).ready(function() {
            _this.initHandler();
        });
    }

    /**
     * @description Init handler.
     */
    initHandler() {
        $('header .button').on('click', function() {
            $('html, body').animate({
                scrollTop: $("footer").offset().top
            }, 700);
        })
    }
})()

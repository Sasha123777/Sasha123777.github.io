export default new (class Pagination {
    constructor() {
        this.pagination = 'pagination';
        this.itemHidden = 'pagination__hidden';
        this.moreBtn = 'pagination__more';

        const _this = this;

        $(document).ready(function() {
            _this.initHandler();
        });
    }

    /**
     * @description Init handler.
     */
    initHandler() {
        const _this = this;

        $(`.${_this.moreBtn}`).on('click', function() {
            const paginationThis = $(this).closest(`.${_this.pagination}`)
            const btnMore = $(this)

            btnMore.toggleClass('active')
            if(btnMore.hasClass('active')) {
                // paginationThis.find(`.${_this.itemHidden}`).slideDown(300)


                    paginationThis.find(`.${_this.itemHidden}`).each(function (index, element) {
                        setTimeout(() => {
                            $(element).slideDown(300)
                        }, index*300);
                    });

            }
            else {
                // paginationThis.find(`.${_this.itemHidden}`).slideUp(300)
                $(paginationThis.find(`.${_this.itemHidden}`).get().reverse()).each(function (index, element) {
                    setTimeout(() => {
                        $(element).slideUp(300)
                    }, index*300);
                });
            }
        })
    }

    /**
     * @description Close handler.
     */
    closeAll() {
        $(`.${this.itemHidden}`).hide()
        $(`.${this.moreBtn}`).removeClass('active')
    }
})()

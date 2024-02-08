import Pagination from './paginationList';
export default new (class Tab {
    constructor() {
        this.tab = 'tab';
        this.tabItem = 'tab__menu-item';
        this.tabContentItem = 'tab__content-item';

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

        $(`.${_this.tabItem}`).on('click', function() {
            if(!$(this).hasClass('active')) {
                Pagination.closeAll()

                const tabThis = $(this).closest(`.${_this.tab}`)
                const tabId = $(this).attr('data-tab')

                //menu
                tabThis.find(`.${_this.tabItem}`).removeClass('active')
                $(this).addClass('active')

                //content
                tabThis.find(`.${_this.tabContentItem}`).removeClass('active')
                tabThis.find(`.${_this.tabContentItem}`).removeClass('active-animate')
                tabThis.find(`.${_this.tabContentItem}[data-tab="${tabId}"]`).addClass('active')
                tabThis.find(`.${_this.tabContentItem}[data-tab="${tabId}"]`).addClass('active-animate')
            }
        })
    }
})()

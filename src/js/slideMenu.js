window.onload = function (e) {
    //***************************************  Open Left Menu **********************************/
    let openLeftMenu = document.getElementById("openLeftMenu");
    let openLeftMenuMobile = document.getElementById("openLeftMenuMobile");
    const sideBarText = document.querySelectorAll(".sideBarText");
    const container = document.querySelector(".container");
    const overlay = document.querySelector(".overlay");
    const extraHeaderMobile = document.querySelector(".extraHeaderMobile");
    const subHiddenText = document.querySelector(".subHiddenText");
    let width = window.getComputedStyle(container).getPropertyValue('width');
    const mobileNavBar = document.querySelector('.mobileNavBar');
    const headerSearchButton = document.querySelector('.headerSearchButton');


    if (width > 990 && container.classList.contains('open-menu')) {// For getting container width and delete margin-Left (sidebarMenu)
        container.classList.remove('open-menu');
    }


    openLeftMenu.addEventListener('click', funcCloseAndOpenLeftMenu);
    openLeftMenuMobile.addEventListener('click', funcOpenLeftMenuMobile);
    overlay.addEventListener('click', funcCloseLeftMenuMobile);

    function funcCloseAndOpenLeftMenu() {
        container.classList.toggle("open-menu");
        sideBarText.forEach(sideBarTextName => {
            sideBarTextName.classList.toggle("hiddenText");
        });
        openLeftMenu.classList.toggle("active");
    }

    function funcOpenLeftMenuMobile() {
        container.classList.add("leftMenuInMobile");
        overlay.classList.add("active");
    }

    function funcCloseLeftMenuMobile() {
        container.classList.remove("leftMenuInMobile");
        overlay.classList.remove("active");
    }

    //**************************************  End Open Left Menu **********************************/ 

    //***************************************  Open Sub(Accordion) Menu On The SideBar **********************************/
    let accordionMenu = document.getElementsByClassName("item-");
    let i;

    for (i = 0; i < accordionMenu.length; i++) {
            accordionMenu[i].addEventListener("click", function () {
                for (let i = 0; i < accordionMenu.length; i++) {
                    accordionMenu[i].classList.remove('active');
                    accordionMenu[i].style.maxHeight = null;
                    accordionMenu[i].nextElementSibling.style.maxHeight = null;
                }
                this.style.maxHeight = this.scrollHeight+'px';
                this.classList.add('active');
                var panel = this.nextElementSibling;
                panel.style.maxHeight = panel.scrollHeight + 'px'
                
            });
            // this.classList.toggle("active");
            // let panel = this.nextElementSibling;
            // if (panel.style.maxHeight) {
            //     panel.style.maxHeight = null;
            //     subHiddenText.classList.toggle(".active");
            // } else {
            //     panel.style.maxHeight = panel.scrollHeight + "px";
            //     subHiddenText.style.display = 'block !important';
            // }
        }


    //***************************************  End Open Sub Menu On The SideBar **********************************/

    //***************************************  Open Popup Login **********************************/
    let popupLogin = document.querySelector(".popupLogin");
    let signupButton = document.querySelector(".signupButton");
    let closePopup = document.getElementById("closePopup");

    signupButton.addEventListener('click' , showPopupModal);
    closePopup.addEventListener('click' , closePopupModal);
    overlay.addEventListener('click' , closePopupModal);

    function showPopupModal() {
        popupLogin.classList.add("active");
        overlay.classList.add("active");
    }
    function closePopupModal() {
        popupLogin.classList.remove("active");
        overlay.classList.remove("active");
        mobileNavBar.classList.remove("active");
        modalProfile.classList.remove("active");
        modalMainMenu.classList.remove("active");
    }

    //***************************************  End Open Popup Login **********************************/

    //***************************************  Header Button Popup  **********************************/
    let searchButton = document.querySelector(".headerSearchButton");
    const inputSearchGroup = document.querySelector(".inputGroup");
    const searchGroup = document.querySelector(".searchGroup");
    const closeSearch = document.querySelector(".closeSearch");
    const headerButtons = document.querySelector(".mobileNavBar .headerButtons");
    const searchInput = document.querySelector(".search-input")


    searchButton.addEventListener('click', openSearchBox);
    closeSearch.addEventListener('click', closeSearchBox);

    function openSearchBox() {
        searchInput.classList.add("active");
        inputSearchGroup.style.display = 'block';
        headerButtons.style.display = 'none';
        headerSearchButton.style.display = 'none';
    }

    function closeSearchBox() {
        searchInput.classList.remove("active");
        inputSearchGroup.style.display = 'none';
        headerButtons.style.display = 'flex';
        headerSearchButton.style.display = 'inline-block';
    }

    //***************************************  End Header Button Popup  **********************************/

    //***************************************   Header Extra Button Popup Mobile **********************************/
    extraHeaderMobile.addEventListener('click', funcOpenExtraHeaderMobile);

    function funcOpenExtraHeaderMobile() {
        mobileNavBar.classList.toggle("active");
        overlay.classList.add("active");
    }

    //***************************************   Header Extra Button Popup Mobile **********************************/

    //***************************************   Header User Profile Mobile **********************************/

    const userProfile = document.getElementById('userProfile');
    const modalProfile = document.querySelector('.modalProfile');

    userProfile.addEventListener('click', funcOpenUserProfile);

    function funcOpenUserProfile() {
        modalProfile.classList.toggle("active");
        modalMainMenu.classList.remove("active");
    }

    //***************************************   End Header User Profile Mobile **********************************/

    //***************************************   Header Main Menu Mobile **********************************/
    let headerMobileOpenMainMenu = document.querySelector('.headerMobileOpenMainMenu');
    let modalMainMenu = document.querySelector('.modalMainMenu');

    headerMobileOpenMainMenu.addEventListener('click', funcOpenMainMenuMobile); //contain home,add Item, Service, About

    function funcOpenMainMenuMobile() {
        modalMainMenu.classList.toggle("active");
        modalProfile.classList.remove("active");
    }

    //***************************************   End Header Main Menu Mobile **********************************/
    let addItems = document.querySelector(".addItems");
    let modalMenuTablet = document.querySelector(".modalMenuTablet");

    addItems.addEventListener('click' , funcShowMoreMenu);

    function funcShowMoreMenu() {
        modalMenuTablet.classList.toggle("active");
    }
}

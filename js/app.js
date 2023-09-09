const navTabs = document.querySelector(".nav-tabs");

navTabs.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("nav-link")) {
    e.preventDefault();

    const activeTab = navTabs.querySelector(".nav-link.active");

    if (activeTab) {
      activeTab.classList.remove("active");
    }

    e.target.classList.add("active");

    const activeContent = document.querySelector(".content-item.active");

    if (activeContent) {
      activeContent.classList.remove("active");
    }

    const contentItemId = e.target.getAttribute("data-target");

    console.log(contentItemId);

    const contentItem = document.querySelector(`.${contentItemId}`);

    if (contentItem) {
      contentItem.classList.add("active");
    }
  }
});

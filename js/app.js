const navTabs = document.querySelector(".nav-tabs");
const blockInlineContainer = document.querySelector("#block-inline");
const sample1 = document.querySelector(".sample-1");

navTabs.addEventListener("click", (e) => {
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

    const contentItem = document.querySelector(`.${contentItemId}`);

    if (contentItem) {
      contentItem.classList.add("active");
    }
  }
});

// BLOCK & INLINE
blockInlineContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.preventDefault();

    const activeButton = blockInlineContainer.querySelector(".btn-primary");
    activeButton.classList.replace("btn-primary", "btn-secondary");

    e.target.classList.replace("btn-secondary", "btn-primary");

    const targetClass = e.target.getAttribute("data-class");

    sample1.classList.remove("block", "inline-block", "inline");
    sample1.classList.add(targetClass);
  }
});

const navTabs = document.querySelector(".nav-tabs");

// BLOCK & INLINE
const blockInlineContainer = document.querySelector("#block-inline");
const sample1 = document.querySelector(".sample-1");

// FLEX
const flexDirectionBtnContainer = document.querySelector("#flex-direction");
const flexJustifyBtnContainer = document.querySelector("#justify-content");
const flexAlignBtnContainer = document.querySelector("#align-items");
const sample2Container = document.querySelector(".content-sample-flex");

// GRID
const gridColBtnContainer = document.querySelector("#grid-columns");
const gridRowBtnContainer = document.querySelector("#grid-rows");
const sample3Container = document.querySelector(".content-sample-grid");

const changeActiveButton = (btnContainer, currentActiveBtn) => {
  const activeBtn = btnContainer.querySelector(".btn-primary");
  activeBtn.classList.replace("btn-primary", "btn-secondary");

  currentActiveBtn.classList.replace("btn-secondary", "btn-primary");
};

const changeElClass = (btn, target, removeClass) => {
  const targetClass = btn.getAttribute("data-class");
  target.classList.remove(...removeClass);
  target.classList.add(targetClass);
};

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
// blockInlineContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn")) {
//     e.preventDefault();

//     changeActiveButton(blockInlineContainer, e.target);

//     changeElClass(e.target, sample1, ["block", "inline-block"]);
//   }
// });

// flexDirectionBtnContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn")) {
//     e.preventDefault();

//     changeActiveButton(flexDirectionBtnContainer, e.target);
//     changeElClass(e.target, sample2Container, ["flex-row", "flex-column"]);
//   }
// });

// flexJustifyBtnContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn")) {
//     e.preventDefault();

//     changeActiveButton(flexJustifyBtnContainer, e.target);
//     changeElClass(e.target, sample2Container, [
//       "flex-justify-start",
//       "flex-justify-center",
//       "flex-justify-end",
//       "flex-space-around",
//       "flex-space-between",
//       "flex-space-evenly",
//     ]);
//   }
// });

// flexAlignBtnContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn")) {
//     e.preventDefault();

//     changeActiveButton(flexAlignBtnContainer, e.target);
//     changeElClass(e.target, sample2Container, [
//       "align-center",
//       "align-start",
//       "align-end",
//     ]);
//   }
// });

gridColBtnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.preventDefault();

    changeActiveButton(gridColBtnContainer, e.target);
    changeElClass(e.target, sample3Container, [
      "grid-col--1",
      "grid-col--2",
      "grid-col--3",
    ]);
  }
});

gridRowBtnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.preventDefault();

    changeActiveButton(gridRowBtnContainer, e.target);
    changeElClass(e.target, sample3Container, [
      "grid-row--1",
      "grid-row--2",
      "grid-row--3",
    ]);
  }
});

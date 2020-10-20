(function () {
  let accordion = document.querySelector("#accordion");
  let accordionItems = accordion.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    let title = item.querySelector(".accordion-title");
    let content = item.querySelector(".accordion-content");
    let text = item.querySelector(".accordion-text");
    let itemContentHight = text.offsetHeight;

    title.addEventListener("click", function (event) {
      event.preventDefault();
      accordionItems.forEach(function (subItem) {
        let content = subItem.querySelector(".accordion-content");
        content.style.height = "";
        subItem.classList.remove("accordion-item-active");
      });
      content.style.height = itemContentHight + "px";
      item.classList.add("accordion-item-active");
    });
  });
})();

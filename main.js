// about section tabs

(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", () => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {

      console.log(
        "event.target contains 'tab-item' class and not contains 'active' class "
      );
      console.log(event.target);
    }
  });
})();

function navigation(){
  navigation_id=document.getElementById("nav_id")
  navigation_id.style.opacity=1
  navigation_id.style.visibility="visible"
  navigation_id.style.zIndex="1"


}
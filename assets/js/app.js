const searchbtn     = document.querySelector('.clickSearch');
const searchSection = document.querySelector("#search__section");
const searchClose   = document.querySelector('.search__close');
      searchbtn.addEventListener("click", () => {

      searchSection.style.transform = "scale(1)";

      });

      searchClose.addEventListener("click", () => {

        searchSection.style.transform = "scale(0)";
  
        });
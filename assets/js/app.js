
const animatedSearch = () => {
const searchbtn     = document.querySelector('.clickSearch');
const searchSection = document.querySelector("#search__section");
const searchClose   = document.querySelector('.search__close');
      searchbtn.addEventListener("click", () => {

      searchSection.style.transform = "scale(1)";

      });

      searchClose.addEventListener("click", () => {

        searchSection.style.transform = "scale(0)";
  
        });

}



        // loader function

        const runLoader = () => {

                const loader = document.getElementById("loader");
                setTimeout(() => {
                     loader.style.opacity = "0";
                     loader.style.zIndex = "0";   
                }, 3000);

        }

        runLoader();
        animatedSearch();
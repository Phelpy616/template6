/*Show/ hide LOCATION options dropdown and change the "select" text to the desired location */
const searchingLocation = document.querySelector(".searchingLocation");
const dropLocation = document.querySelector(".dropLocation");
const locationOptions = document.querySelectorAll(".dropLocation p");
const locationH3 = document.querySelector(".location h3");

try {
  searchingLocation.addEventListener("click", () => {
    dropLocation.classList.toggle("active");
  });
  locationOptions.forEach((element) => {
    element.addEventListener("click", () => {
      locationH3.textContent = element.textContent;
    });
  });
} catch (error) {
  console.log(error);
}

/*Show/ hide TYPE options dropdown and change the "select" text to the desired type */
const searchingType = document.querySelector(".searchingType");
const dropType = document.querySelector(".dropType");
const typeOptions = document.querySelectorAll(".dropType p");
const typeH3 = document.querySelector(".type h3");
try {
  searchingType.addEventListener("click", () => {
    dropType.classList.toggle("active");
  });
  typeOptions.forEach((element) => {
    element.addEventListener("click", () => {
      typeH3.textContent = element.textContent;
    });
  });
} catch (error) {
  console.log(error);
}

/*go to respective city page in select location when is chosen*/
const searchBtn = document.querySelector(".searchBtn");
try {
  searchBtn.addEventListener("click", () => {
    if (locationH3.textContent === "New York City, NY") {
      window.location.href = "newyork.html";
    }
  });

  searchBtn.addEventListener("click", () => {
    if (locationH3.textContent === "Seattle, WA") {
      window.location.href = "seattle.html";
    }
  });

  searchBtn.addEventListener("click", () => {
    if (locationH3.textContent === "Chicago, IL") {
      window.location.href = "chicago.html";
    }
  });
} catch (error) {
  console.log(error);
}

/*When in nyc, seattle or chicago page, and click on the,
 city button at the top, will take u to respective page*/
const cityElements = document.querySelectorAll(".cities div");
try {
  cityElements.forEach((element) => {
    element.addEventListener("click", () => {
      window.location.href = element.dataset.url;
    });
  });
} catch (error) {
  console.log(error);
}

/*clickin "about" in the .header will take u to "about" in the home*/
const headerAbout = document.querySelector(".header .goToAbout");
const url = window.location.href;
const url2 = `file:///Users/cristianmcknight/Desktop/STELLARwebdev/template6/index.html#about`;
headerAbout.addEventListener("click", () => {
  if (url != window.location.href || url2 != window.location.href) {
    window.location.href = headerAbout.dataset.url;
  } else {
    return;
  }
});

/*clicking one of the properties in newyork, seattle or chicago will take to respective page*/
const type = document.querySelectorAll(".type .buildingPreview");
type.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*clicking the logo will take u to home page*/
const logo = document.querySelector(".header .logo");
logo.addEventListener("click", () => {
  window.location.href = logo.dataset.url;
});

/*clicking of the services at the bottom will take you to respective page*/
const services = document.querySelectorAll(".services div");
services.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*clickin houses, apartments and commercial at the top will take u to respective page*/
const goToBuildings = document.querySelectorAll(".header div .building");
goToBuildings.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*when in the home page go to respective building page in the search*/
try {
  searchBtn.addEventListener("click", () => {
    if (typeH3.textContent === "Apartment") {
      window.location.href = "apartments.html";
    }
  });

  searchBtn.addEventListener("click", () => {
    if (typeH3.textContent === "House") {
      window.location.href = "houses.html";
    }
  });

  searchBtn.addEventListener("click", () => {
    if (typeH3.textContent === "Commercial") {
      window.location.href = "commercial.html";
    }
  });
} catch (error) {
  console.log(error);
}

/*hide/show the .menu on mobile*/
const menuBtn = document.querySelector(".header2 img");
const menu = document.querySelector(".menu");
try {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
} catch (error) {
  console.log(error);
}

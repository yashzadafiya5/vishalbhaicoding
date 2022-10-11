
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
crossorigin="anonymous"
/* navbar */
window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  // Target elements
  const navBar = document.getElementById("navBar");
  const links = document.querySelectorAll("#navBar");

  if (document.documentElement.scrollTop > 20) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add("text-black");
    }
  } else {
    navBar.classList.remove("pa-fixed-header");

    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.remove("text-black");
    }
  }
};

/* navbar */

/* JavaScript Bundle with Popper */
src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js";
integrity =
  "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa";
crossorigin = "anonymous";

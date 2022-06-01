///////////////////////////////////////////////////////////
// Navigation on mobile button
///////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth Behavior
///////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to the top//

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //fixing the problem with href link to profiles

    if (href.startsWith("http")) {
      window.open(href);
    }

    //close mobile navigation
    if (link.classList.contains("NavigationLink"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation
///////////////////////////////////////////////////////////
const logoEl = document.querySelector(".logo");
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      logoEl.innerHTML = "Go UP !";
    } else {
      logoEl.innerHTML = "SOBHAN";
    }

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

function myFunction() {
  alert("Haven't written a blog yet but comming soon");
}
// $(window).resize(function () {
//   var nav = $(".js--main-nav");
//   var icon = $(".js--nav-icon i");
//   if ($(window).width() > 767) {
//     nav.css("display", "block");
//     icon.addClass("ion-close-round");
//     icon.removeClass("ion-navicon-round");
//   } else {
//     nav.css("display", "none");
//     icon.addClass("ion-navicon-round");
//     icon.removeClass("ion-close-round");
//   }
// });
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////////

// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

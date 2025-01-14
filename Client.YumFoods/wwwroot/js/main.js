$(function () {
  "use strict";

  //======menu fix js======
  var navoff = $(".main_menu").offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $(".main_menu").addClass("menu_fix");
    } else {
      $(".main_menu").removeClass("menu_fix");
    }
  });
  //=========NICE SELECT=========
  $(".select_js").niceSelect();

  //=======OFFER ITEM SLIDER======

  //*==========ISOTOPE==============
  var $grid = $(".grid").isotope({});

  $(".menu_filter").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  //active class
  $(".menu_filter button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  //=======COUNTER JS=======
  $(".counter").countUp();
  //*=======SCROLL BUTTON=======
  $(".scroll_btn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 500) {
      $(".scroll_btn").fadeIn();
    } else {
      $(".scroll_btn").fadeOut();
    }
  });

  //======= VENOBOX.JS.=========
  $(".venobox").venobox();

  //*========STICKY SIDEBAR=======
  $("#sticky_sidebar").stickit({
    top: 10,
  });

  //======wow js=======
  new WOW().init();

  //=======PRODUCT DETAILS SLIDER======
  if ($("#exzoom").length > 0) {
    $("#exzoom").exzoom({
      autoPlay: true,
    });
  }

  //=======SMALL DEVICE MENU ICON======
  $(".navbar-toggler").on("click", function () {
    $(".navbar-toggler").toggleClass("show");
  });
});

//make header and footer reusable in different html pages
function Header() {
  let header = document.getElementById("header");

  header.innerHTML = `
  <nav class="navbar navbar-expland-lg main_menu">
      <div class="container">
        <div class="navbar-left">
          <!--logo info-->
          <a class="navbar-brand" href="/">
            <img rel="preload" as="image" src="images/logo.png" alt="logo" class="img-fluid logo" />
          </a>

        <!-- language button-->
        <!--
        <div class="langBtn">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" onclick="myFunction()" class="dropbtn" >
                <span class="icone"> <img src="./images/fontawesome-icons/globe.svg" class="fa-globe"/> </span>
                <span id="current-lang">SV</span>
                <span class="icone"> <img src="./images/fontawesome-icons/arrow-down.svg" class="fa-angle-down"/></span>
              </a>
              <ul class="droap_menu">
                <li><a href="#">Swedish</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </li>
          </ul>
        </div>
        -->

        <!-- company button -->
        <!--
        <div class="companyBtn">
          <button class="company" onclick="window.location.href='contact.html'"> För företag </button>
        </div>
        -->
      </div>
      <div class="navbar-left">
        <!--login button-->
        <!--
        <div class="loginBtn">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a id="logIn" href="#" class="dropbtn">
                <img src="./images/fontawesome-icons/user.svg" class="far fa-user" /> Logga in
              </a>
              <ul class="droap_menu">
                <li><a href="sign_in.html">Login</a></li>
                <li><a href="sign_up.html">Register</a></li>
              </ul>
            </li>
          </ul>
        </div>
           -->
        <ul>
        <!--
          <li>
                <a href="sign_in.html"><i class="fas fa-user"></i></a>
          </li>
          -->
        <li>
          <a class="cart" href="cart_view.html"
            ><img src="./images/fontawesome-icons/cart.svg" class="fa-shopping-basket"/>
            <span id="count"></span
          ></a>
        </li>
        </ul>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars menu_icon_bar"></i>
          <i class="fa fa-times close_icon_close"></i>
        </button>
        <div class="collapse navbar-collapse wow" id="navbarNav">
          <ul class="navbar-nav" style="align-items: center;">
            <li class="nav-item">
              <a class="nav-link" href="yum_menu.html"
                >Meny <!--<i class="fa fa-angle-down"></i
              >--></a>
              <!--
              <ul class="droap_menu">
                <li><a href="baguette_menu.html">Baguetter</a></li>
                <li><a href="bamba_menu.html">Bamba-rätter</a></li>
                <li><a href="yum_menu.html">Yum</a></li>
              <li><a href="daily_menu.html">Dagens</a></li>
                <li><a href="premium_menu.html">Premium</a></li>
              </ul>
              -->
            </li>
            <!--
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Våra tjänster <i class="fa fa-angle-down"></i
              ></a>
              <ul class="droap_menu">
                <li><a href="office.html">Kontor</a></li>
                <li><a href="private.html">Privat</a></li>
                <li><a href="events.html">Evenemang</a></li>
              </ul>
            </li>
            --
              <li class="nav-item">
                <a class="nav-link" href="subscription.html">Prenumerationer</a>
              </li>
              -->
            <li class="nav-item">
              <a class="nav-link" href="about.html">Om oss</a>
            </li>
            <!--
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">Blog/Podcast</a>
              </li>
              -->
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Kontakta oss</a>
            </li>
            <!--
            <li class="nav-item" id="logInDrop">
              <a class="nav-link" href="sign_in.html">Logga In</a>
                <ul class="droap_menu">
                 <li><a href="sign_in.html">Login</a></li>
                 <li><a href="sign_up.html">Register</a></li>
              </ul>
            </li>
            -->
          </ul>
          </div>
        </div>
      </div>
  </nav>
    `;
  /*
  let authToken = localStorage.getItem("authToken");
  if (authToken !== null) {
    //const savedUserData = JSON.parse(localStorage.getItem("userData"));

    document.querySelector("#logInDrop").innerHTML = `
    <a class="nav-link" href="dashboard.html">
    Inloggad
    </a>
    `;
    document.querySelector(".loginBtn").innerHTML = `
    <ul class="navbar-nav">
    <li class="nav-item">
        <a id="logIn" href="dashboard.html" class="dropbtn">
        <img src="./images/fontawesome-icons/user.svg" class="fa-user" />
        </a>
    </li>
  </ul>
`;
  } else {
    document.querySelector(".loginBtn").innerHTML = `
          <ul class="navbar-nav">
            <li class="nav-item">
              <a id="logIn" href="#" class="dropbtn">
                <img src="./images/fontawesome-icons/user.svg" class="fa-user" /> Logga in
              </a>
              <ul class="droap_menu">
                <li><a href="sign_in.html">Login</a></li>
                <li><a href="sign_up.html">Register</a></li>
              </ul>
            </li>
          </ul>
`;
  }
*/
}

Header();

function loggedIn() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));

    document.querySelector(".loginBtn").innerHTML = `
          <ul class="navbar-nav">
          <li class="nav-item">
              <a id="logIn" href="dashboard.html" class="dropbtn">
              <i class="far fa-user">${savedUserData.förnamn
                .charAt(0)
                .toUpperCase()}</i>
              </a>
          </li>
        </ul>
    `;

    document.querySelector("#logIn").addEventListener("click", function () {
      console.log("come on, log in!");
    });
  }
}

// Check for logged in user
document.addEventListener("DOMContentLoaded", function () {
  loggedIn();
});

// js for language button in navbar
function setLanguage(lang) {
  document.getElementById("current-lang").textContent = lang.toUpperCase();
  var elements = document.querySelectorAll("[data-lang-en]");
  elements.forEach(function (element) {
    if (lang === "en") {
      element.textContent = element.getAttribute("data-lang-en");
    } else if (lang === "sv") {
      element.textContent = element.getAttribute("data-lang-sv");
    }
  });
  closeDropdown();
}
function closeDropdown() {
  document.getElementById("dropdown-content").classList.remove("show");
}
function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");

  document.getElementById("current-lang").textContent = lang.toUpperCase();
  var elements = document.querySelectorAll("[data-lang-en]");
  elements.forEach(function (element) {
    if (lang === "en") {
      element.textContent = element.getAttribute("data-lang-en");
    } else if (lang === "sv") {
      element.textContent = element.getAttribute("data-lang-sv");
    }
  });
  closeDropdown();
}
function closeDropdown() {
  document.getElementById("dropdown-content").classList.remove("show");
}
function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

function navigateToMenuPage() {
  window.location.href = "/yum_menu.html";
}

// SIGN UP - Funktion för att visa rätt formulär beroende på kontotyp
function toggleAccountType(isPersonal) {
  document.getElementById("personalForm").style.display = isPersonal
    ? "block"
    : "none";
  document.getElementById("businessForm").style.display = isPersonal
    ? "none"
    : "block";
}

function checkCartLength() {
  let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  let totalQuantity = parseInt(localStorage.getItem("totalQuantity"));
  let orderButton = document.getElementById("orderButton");
  if (formDataArry !== null && orderButton !== null) {
    console.log(totalQuantity);
    if (totalQuantity >= 10) {
      orderButton.removeAttribute("disabled");
    } else {
      orderButton.setAttribute("disabled", "disabled");
    }
  }
}
checkCartLength();
//spara purcahse form
async function saveAndProceed() {
  if (cartValidation(event)) {
    // Försök att spara formulärdata
    await registerGuest();
    await savePurchaseData();
    window.location.href = "payment.html";
  } else {
    return null;
  }
}

// Purchase form
async function savePurchaseData() {
  let houseType = "";
  const purchaseData = {};
  const missingFields = [];

  //lägg till leverans datum och tid
  purchaseData.Adress = document.getElementById("addressInput").value.trim();
  purchaseData.PostalCode = document
    .getElementById("postalCodeInput")
    .value.trim();
  purchaseData.ort = document.getElementById("cityInput").value.trim();
  const apartment = document.getElementById("lägenhet").checked;
  const house = document.getElementById("villa_hus").checked;
  const radhus = document.getElementById("radhus").checked;
  const LeaveAtDoor = document.getElementById("flexSwitchCheckDefault").checked;
  //purchaseData.Text = document.getElementById("floatingTextarea").value.trim();
  purchaseData.firstName = document
    .getElementById("firstNameInput")
    .value.trim();
  purchaseData.lastName = document.getElementById("lastNameInput").value.trim();
  purchaseData.phone = document.getElementById("phoneInput").value.trim();
  purchaseData.email = document.getElementById("mailInput").value.trim();

  if (!purchaseData.Adress) missingFields.push("adress");
  if (!purchaseData.PostalCode) missingFields.push("postnummer");
  if (!purchaseData.ort) missingFields.push("Ort");

  if (!purchaseData.firstName) missingFields.push("förnamn");
  if (!purchaseData.lastName) missingFields.push("efternamn");
  if (!purchaseData.phone) missingFields.push("telefonnummer");
  if (!purchaseData.email) missingFields.push("email");

  if (apartment) {
    houseType = "Lägenhet";
    purchaseData.Port = document.getElementById("portInput").value.trim();
    purchaseData.Floor = document.getElementById("floorInput").value.trim();

    //if (!purchaseData.Port) missingFields.push("portkod");
    //if (!purchaseData.Floor) missingFields.push("våningsplan");
  } else if (house) {
    houseType = "Villa/Hus";
  } else if (radhus) {
    houseType = "Radhus";
  }
  purchaseData.houseType = houseType;

  console.log(purchaseData);
  localStorage.setItem("purchaseData", JSON.stringify(purchaseData));
}

function checkNumberInputLenght() {
  let postalCode = document.getElementById("postalCodeInput");
  let phone = document.getElementById("phoneInput");
  let doorCode = document.getElementById("portInput");
  let floor = document.getElementById("floorInput");

  if (postalCode.value.length !== 5) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Skriv ett odentlig postnummer";
    paragraph.style.color = "red";
    paragraph.classList.add("warning");
    postalCode.after(paragraph);
  } else if (phone.value.length !== 10) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Skriv ett odentlig telefonnummer";
    paragraph.style.color = "red";
    paragraph.classList.add("warning");
    phone.after(paragraph);
  } else if (doorCode.value.length !== 5) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Skriv ett odentlig dörrkod";
    paragraph.style.color = "red";
    paragraph.classList.add("warning");
    doorCode.after(paragraph);
  } else if (floor.value.length !== 1 || floor.value.length !== 2) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Skriv ett odentlig våning";
    paragraph.style.color = "red";
    paragraph.classList.add("warning");
    doorCode.after(paragraph);
  }
}

//Cart validation
function cartValidation(event) {
  event.preventDefault();

  const purchaseData = {};

  // För de utkommenterade fälten för användare namn
  // userData.username = document.getElementById("username").value.trim();
  const selectedTime = document.querySelector(".tid-box.tid-box-selected");
  if (selectedTime) {
    const deliverClock = selectedTime.querySelector(".time").textContent;
    const deliverShipping = selectedTime.querySelector(".price").textContent;
    purchaseData.deliveryTime = deliverClock;
    purchaseData.deliveryPrice = deliverShipping;
  }
  purchaseData.deliveryDate =
    document.getElementById("deliveryDateSpan").textContent;
  purchaseData.Adress = document.getElementById("addressInput").value.trim();
  purchaseData.PostalCode = document
    .getElementById("postalCodeInput")
    .value.trim();
  purchaseData.ort = document.getElementById("cityInput").value.trim();
  const apartment = document.getElementById("lägenhet").checked;
  const house = document.getElementById("villa_hus").checked;
  const radhus = document.getElementById("radhus").checked;
  const LeaveAtDoor = document.getElementById("flexSwitchCheckDefault").checked;
  //purchaseData.Text = document.getElementById("floatingTextarea").value.trim();
  purchaseData.firstName = document
    .getElementById("firstNameInput")
    .value.trim();
  purchaseData.lastName = document.getElementById("lastNameInput").value.trim();
  purchaseData.phone = document.getElementById("phoneInput").value.trim();
  purchaseData.email = document.getElementById("mailInput").value.trim();
  if (apartment) {
    houseType = "Lägenhet";
    purchaseData.houseType = houseType;
    purchaseData.Port = document.getElementById("portInput").value.trim();
    purchaseData.Floor = document.getElementById("floorInput").value.trim();

    //if (!purchaseData.Port) missingFields.push("portkod");
    //if (!purchaseData.Floor) missingFields.push("våningsplan");
  } else if (house) {
    houseType = "Villa/Hus";
    purchaseData.houseType = houseType;
  } else if (radhus) {
    houseType = "Radhus";
    purchaseData.houseType = houseType;
  }
  let currentForm = document.getElementById("purchase");
  let allInputs = currentForm.querySelectorAll("input");

  // Validering
  // !userData.username ||
  if (
    !purchaseData.Adress ||
    !purchaseData.PostalCode ||
    !purchaseData.ort ||
    !purchaseData.houseType ||
    !purchaseData.firstName ||
    !purchaseData.lastName ||
    !purchaseData.phone ||
    !purchaseData.email
  ) {
    const missingFields = [];

    function checkDayAndTime() {
      let searchEles = document.getElementById("date");
      let searchTime = document.getElementById("time");
      if (!searchEles.classList.contains("box-selected")) {
        const dates = document.getElementById("dates");
        const times = document.getElementById("times");
        const warningDate = dates.nextElementSibling;
        const warningTime = times.nextElementSibling;

        if (!warningDate || !warningDate.classList.contains("warning")) {
          const paragraph = document.createElement("p");
          paragraph.textContent = "Välj ett datum";
          paragraph.style.color = "red";
          paragraph.classList.add("warning");
          dates.after(paragraph);
        } else {
          const warningDate = dates.nextElementSibling;

          if (warningDate && warningDate.classList.contains("warning")) {
            warningDate.remove();
          }
        }

        if (!warningTime || !warningTime.classList.contains("warning")) {
          const paragraph = document.createElement("p");
          paragraph.textContent = "Välj en tid";
          paragraph.style.color = "red";
          paragraph.classList.add("warning");
          times.after(paragraph);
        } else {
          const warningTime = times.nextElementSibling;

          if (warningTime && warningTime.classList.contains("warning")) {
            warningTime.remove();
          }
        }
      }
    }

    function checkRadioButtons() {
      for (i = 0; i < document.getElementsByName("housing").length; i++) {
        if (!document.getElementsByName("housing")[i].checked) {
          const houseType = document.getElementById("houseTypeBtn");
          const warning = houseType.nextElementSibling;

          if (!warning || !warning.classList.contains("warning")) {
            const paragraph = document.createElement("p");
            paragraph.textContent = "Välj en bostadstyp";
            paragraph.style.color = "red";
            paragraph.classList.add("warning");
            houseType.after(paragraph);
          }
        } else {
          const warning = houseType.nextElementSibling;

          if (warning && warning.classList.contains("warning")) {
            warning.remove();
          }
        }
      }
    }

    allInputs.forEach((input) => {
      if (!input.value) {
        const warning = input.nextElementSibling;

        missingFields.push(input.id);

        if (!warning || !warning.classList.contains("warning")) {
          const paragraph = document.createElement("p");
          paragraph.textContent = "Fält får inte lämnas tomt!";
          paragraph.style.color = "red";
          paragraph.classList.add("warning");
          input.after(paragraph);
        }
      } else {
        const warning = input.nextElementSibling;

        if (warning && warning.classList.contains("warning")) {
          warning.remove();
        }
      }
    });
    console.error(`field missing value! ` + missingFields.join(","));

    alert("Alla fält måste fyllas i!");
    checkRadioButtons();
    checkDayAndTime();
    checkNumberInputLenght();
    return false;
  } else {
    return true;
  }
}

//Personal Form
function saveUserData(event) {
  event.preventDefault();

  const accountType = "personal";
  const userData = {};

  // För de utkommenterade fälten för användare namn
  // userData.username = document.getElementById("username").value.trim();

  userData.email = document.getElementById("field2").value.trim();
  userData.lösenord = document.getElementById("field3").value.trim();
  const upprepaLösenord = document.getElementById("field4").value.trim();
  userData.gatuadress = document.getElementById("field5").value.trim();
  userData.postnummer = document.getElementById("postnummer").value.trim();
  userData.ort = document.getElementById("ort").value.trim();
  const termsAccepted = document.getElementById("terms1").checked;
  let currentForm = document.getElementById("signupFormPersonal");
  let allInputs = currentForm.querySelectorAll("input");

  // Validering
  // !userData.username ||
  if (
    !userData.email ||
    !userData.lösenord ||
    !upprepaLösenord ||
    !userData.gatuadress ||
    !userData.postnummer ||
    !userData.ort
  ) {
    const missingFields = [];

    allInputs.forEach((input) => {
      if (!input.value) {
        const warning = input.nextElementSibling;

        missingFields.push(input.id);

        if (!warning || !warning.classList.contains("warning")) {
          const paragraph = document.createElement("p");
          paragraph.textContent = "Fält får inte lämnas tomt!";
          paragraph.style.color = "red";
          paragraph.classList.add("warning");
          input.after(paragraph);
        }
      } else {
        const warning = input.nextElementSibling;

        if (warning && warning.classList.contains("warning")) {
          warning.remove();
        }
      }
    });

    console.error(`field missing value! ` + missingFields.join(","));

    alert("Alla fält måste fyllas i!");
    return;
  }

  if (userData.lösenord !== upprepaLösenord) {
    alert("Lösenorden matchar inte!");
    return;
  }

  if (!termsAccepted) {
    allInputs.forEach((input) => {
      const warning = input.nextElementSibling;
      if (warning && warning.classList.contains("warning")) {
        warning.remove();
      }
    });
    alert(
      "Du måste acceptera Användarvillkor och Integritetspolicy för att fortsätta."
    );
    return;
  }

  if (accountType === "personal") {
    userData.kontoTyp = "personal";
    userData.förnamn = document.getElementById("field1").value.trim();
  }

  // Spara användardata i localStorage
  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Dina personliga uppgifter har sparats!");
  window.location.href = "sign_in.html";
}

// Business Form
function saveUserDataBusiness(event) {
  event.preventDefault();

  const accountType = "Business";
  const userData = {};

  // För de utkommenterade fälten för användare namn
  // userData.username = document.getElementById("username").value.trim();

  userData.email = document.getElementById("field2B").value.trim();
  userData.lösenord = document.getElementById("field3B").value.trim();
  const upprepaLösenord = document.getElementById("field4B").value.trim();
  userData.gatuadress = document.getElementById("field5B").value.trim();
  userData.postnummer = document.getElementById("contactName").value.trim();
  userData.telefon = document.getElementById("phoneB").value.trim();
  userData.kontakt = document.getElementById("postnummerB").value.trim();
  userData.ort = document.getElementById("ortB").value.trim();
  const termsAccepted = document.getElementById("terms1B").checked;
  let currentForm = document.getElementById("signupFormBusiness");
  let allInputs = currentForm.querySelectorAll("input");

  // Validering
  // !userData.username ||
  if (
    !userData.email ||
    !userData.lösenord ||
    !upprepaLösenord ||
    !userData.gatuadress ||
    !userData.postnummer ||
    !userData.ort ||
    !userData.kontakt ||
    !userData.telefon
  ) {
    const missingFields = [];
    allInputs.forEach((input) => {
      if (!input.value) {
        const warning = input.nextElementSibling;

        missingFields.push(input.id);

        if (!warning || !warning.classList.contains("warning")) {
          const paragraph = document.createElement("p");
          paragraph.textContent = "Fält får inte lämnas tomt!";
          paragraph.style.color = "red";
          paragraph.classList.add("warning");
          input.after(paragraph);
        }
      } else {
        const warning = input.nextElementSibling;

        if (warning && warning.classList.contains("warning")) {
          warning.remove();
        }
      }
    });
    console.error(`field missing value! ` + missingFields.join(","));

    alert("Alla fält måste fyllas i!");
    return;
  }

  if (userData.lösenord !== upprepaLösenord) {
    alert("Lösenorden matchar inte!");
    return;
  }

  if (!termsAccepted) {
    allInputs.forEach((input) => {
      const warning = input.nextElementSibling;
      if (warning && warning.classList.contains("warning")) {
        warning.remove();
      }
    });
    alert(
      "Du måste acceptera Användarvillkor och Integritetspolicy för att fortsätta."
    );
    return;
  }

  if (accountType === "business") {
    userData.kontoTyp = "business";
    userData.företagsnamn = document
      .getElementById("businessName")
      .value.trim();
    userData.orgNummer = document.getElementById("orgNumber").value.trim();
    userData.kontaktperson = document
      .getElementById("contactName")
      .value.trim();
  }

  // Spara användardata i localStorage
  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Dina företagsuppgifter har sparats!");
  window.location.href = "sign_in.html";
}

// Kontakta oss form
function sendUserQuery(event) {
  event.preventDefault();

  const contactData = {};

  contactData.name = document.getElementById("name").value.trim();
  contactData.email = document.getElementById("email").value.trim();
  contactData.telefon = document.getElementById("phone").value.trim();
  contactData.amne = document.getElementById("subject").value.trim();
  contactData.meddelande = document.getElementById("message").value.trim();
  let currentForm = document.getElementById("contact-form");
  let allInputs = currentForm.querySelectorAll("input");

  // Validering
  // !userData.username ||
  if (
    !contactData.name ||
    !contactData.email ||
    !contactData.telefon ||
    !contactData.amne ||
    !contactData.meddelande
  ) {
    const missingFields = [];

    allInputs.forEach((input) => {
      if (!input.value) {
        const warning = input.nextElementSibling;

        missingFields.push(input.id);

        if (!warning || !warning.classList.contains("warning")) {
          const paragraph = document.createElement("p");
          paragraph.textContent = "Fält får inte lämnas tomt!";
          paragraph.style.color = "red";
          paragraph.classList.add("warning");
          input.after(paragraph);
        }
      } else {
        const warning = input.nextElementSibling;

        if (warning && warning.classList.contains("warning")) {
          warning.remove();
        }
      }
    });

    console.error(`field missing value! ` + missingFields.join(","));

    alert("Alla fält måste fyllas i!");
    return;
  }

  // if (userData.lösenord !== upprepaLösenord) {
  //   alert("Lösenorden matchar inte!");
  //   return;
  // }

  // if (!termsAccepted) {
  //   allInputs.forEach((input) => {
  //     const warning = input.nextElementSibling;
  //     if (warning && warning.classList.contains("warning")) {
  //       warning.remove();
  //     }
  //   });
  //   alert(
  //     "Du måste acceptera Användarvillkor och Integritetspolicy för att fortsätta."
  //   );
  //   return;
  // }

  // if (accountType === "personal") {
  //   userData.kontoTyp = "personal";
  //   userData.förnamn = document.getElementById("field1").value.trim();
  // }

  // Spara användardata i localStorage
  localStorage.setItem("contactData", JSON.stringify(contactData));

  // alert("Dina personliga uppgifter har sparats!");
  // window.location.href = "sign_in.html";
}

// Event listeners för att växla mellan kontotyper
document.addEventListener("DOMContentLoaded", function () {
  const btnPersonal = document.getElementById("btnPersonal");
  const btnBusiness = document.getElementById("btnBusiness");
  const foodBoxes = document.getElementById("yum");
  const bundles = document.getElementById("bundles");
  const payingOrder = document.getElementById("orderNowButton");
  const requestOrder = document.getElementById("requestOrderButton");

  if (btnPersonal) {
    btnPersonal.addEventListener("click", function () {
      toggleAccountType(true);
      document.getElementById("accountTitle").textContent = "Skapa konto";
    });
  }

  if (btnBusiness) {
    btnBusiness.addEventListener("click", function () {
      toggleAccountType(false);
      document.getElementById("accountTitle").textContent =
        "Skapa företagskonto";
    });
  }

  if (foodBoxes) {
    foodBoxes.addEventListener("click", function () {
      toggleMenuType(true);
    });
  }

  if (bundles) {
    bundles.addEventListener("click", function () {
      toggleMenuType(false);
    });
  }

  if (payingOrder) {
    payingOrder.addEventListener("click", function () {
      togglePaymentsMethods(true);
    });
  }

  if (requestOrder) {
    requestOrder.addEventListener("click", function () {
      togglePaymentsMethods(false);
    });
  }
});

//LOGIN SIDA

//function validateLogin(event) {
//  event.preventDefault();

//  const email = document.getElementById("email-login").value.trim();
//  const password = document.getElementById("password-login").value.trim();

//  const savedUserData = JSON.parse(localStorage.getItem("userData"));

//  if (!savedUserData) {
//    alert("Det finns ingen registrerad användare. Vänligen skapa ett konto.");
//    return;
//  }

//  //  || !username
//  if (!email || !password) {
//    alert("Vänligen fyll i alla fält.");
//    return;
//  }

//  // && username === savedUserData.username
//  if (email === savedUserData.email && password === savedUserData.lösenord) {
//    if (document.getElementById("rememberMe").checked) {
//      localStorage.setItem(
//        "rememberedUser",
//        JSON.stringify({
//          email: email,
//          lösenord: password,
//          användare: username,
//        })
//      );
//    } else {
//      localStorage.removeItem("rememberedUser");
//    }
//    localStorage.setItem("isLoggedIn", "true");
//    loggedIn();
//    window.location.href = "dashboard.html";
//  } else {
//    alert("Fel e-postadress, lösenord eller användarnamn.");
//  }
//}

// Event listener för inloggningsformuläret
//let loginForm = document.getElementById("loginForm");
//if (loginForm) {
//  loginForm.addEventListener("submit", validateLogin);
//}

// FORGOT PASSWORD IN SIGN IN SIDA
function showForgotPassword() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("forgotPasswordBox").style.display = "block";
}

function showLogin() {
  document.getElementById("forgotPasswordBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

// secound part of start page
const infoBox = document.querySelector(".info-box");
if (infoBox !== null) {
  infoBox.style.display = "none";
}

const close = document.querySelector(".close");
if (close !== null) {
  close.addEventListener("click", function () {
    infoBox.style.display = "none";
  });
}

let selectedCategory = null;
let selectedQuantity = 10;

// categori boxes
const dietBoxes = document.querySelectorAll(".box2");
const chooseDietBox = dietBoxes.forEach((box, index) => {
  box.addEventListener("click", function () {
    this.classList.add("selected");
    this.classList.add("selected-border");

    dietBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      } else {
        b.classList.add("selected");
        b.classList.add("selected-border");
      }
    });
  });
});

// quantity boxes
const antalBoxes = document.querySelectorAll(".box4");
const chooseAntalbox = antalBoxes.forEach((box, index) => {
  box.addEventListener("click", function () {
    this.classList.add("selected");
    this.classList.toggle("selected-border");
    infoBox.style.display = "block";

    antalBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      } else {
        b.classList.add("selected");
        b.classList.add("selected-border");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const quantitySpan = document.querySelector(".quantity-btn span");
  const increaseButton = document.querySelector(
    ".quantity-btn button:nth-of-type(2)"
  );
  const decreaseButton = document.querySelector(
    ".quantity-btn button:nth-of-type(1)"
  );
  const infoBox = document.querySelector(".info-box");

  if (quantitySpan !== null) {
    function updateQuantity(newQuantity) {
      if (newQuantity >= 10 && newQuantity <= 20) {
        currentQuantity = newQuantity;
        quantitySpan.textContent = currentQuantity;
        updateBox4Selection();
      }
    }
  }
  // update quantity boxes
  function updateBox4Selection() {
    document.querySelectorAll(".box4").forEach((box) => {
      const boxValue = parseInt(box.getAttribute("data-value"), 10);
      if (boxValue === currentQuantity) {
        box.classList.add("selected", "selected-border");
      } else {
        box.classList.remove("selected", "selected-border");
      }
    });
  }

  // update categorie boxes
  const boxes2 = document.querySelectorAll(".box2");
  function updateBoxSelection(currentCategory) {
    boxes2.forEach((box) => {
      const boxValue = box.getAttribute("data-category");

      if (boxValue === currentCategory) {
        box.classList.add("selected");
        box.classList.add("selected-border");
      } else {
        box.classList.remove("selected");
        box.classList.remove("selected-border");
      }
    });
  }
  const boxes4 = document.querySelectorAll(".box4");
  boxes2.forEach((box) => {
    box.addEventListener("click", () => {
      const currentCategory = box.getAttribute("data-category");
      updateBoxSelection(currentCategory);
      boxes4.forEach((box4) => {
        box4.addEventListener("click", () => {
          const currentQuantity = parseInt(box4.getAttribute("data-value"), 10);
          updateBox4Selection(currentQuantity);
        });
      });
    });
  });

  // currentQuantity, increase , decrease
  document.querySelectorAll(".row .box").forEach((box) => {
    box.addEventListener("click", function () {
      const boxValue = parseInt(this.textContent, 10);
      updateQuantity(boxValue);
    });
  });
  if (increaseButton !== null) {
    increaseButton.addEventListener("click", function () {
      updateQuantity(currentQuantity + 5);
    });
  }
  if (decreaseButton !== null) {
    decreaseButton.addEventListener("click", function () {
      updateQuantity(currentQuantity - 5);
    });
  }
});

//handle click on quantity buttons
//Display vegetarian Alternatives
const vegetarianAlternatives = () => {
  const dishList = document.getElementById("dish-list");
  dishList.innerHTML = "";
  let htmlString = "";

  yumProductsList.map((veg) => {
    let veggie = veg.dietRef;
    if (veggie === "images/icons/vegetarian.png") {
      const cleanTitle = veg.title.replace(/^'(.*)'$/, "$1").trim();
      htmlString += `<li> ${cleanTitle}- <span class="pricedetail">${veg.price} kr</span></li>`;
    }
  });
  dishList.innerHTML += htmlString;
};

const updateDishList = () => {
  vegetarianAlternatives();
};

//end of secound part

// fixed media query
// function updateMargin() {
//     const infoBox = document.querySelector('.info-box');
//     const rightPart = document.querySelector('.right-part');

//     if (window.getComputedStyle(infoBox).display === 'none') {
//       if (window.matchMedia("(min-width: 768px) and (max-width: 991.99px)").matches) {
//         rightPart.style.marginTop = '-200px';
//       } else {
//         rightPart.style.marginTop = '';
//       }
//   }
// }

//Get elements from the DOM
let summary = document.getElementById("cost_summary");
//let products = document.getElementById("products");
let yum = document.getElementById("yum");
let bundles = document.getElementById("bundles");
let daily = document.getElementById("daily");
let premium = document.getElementById("premium");
let subscriptions = document.getElementById("subscription");
let categories = document.getElementById("categories");
let services = document.getElementById("services");
let baguetter = document.getElementById("baguetter");
let popup = document.getElementById("popup");
const searchBar = document.getElementById("searchbar");
let cartItem = document.getElementById("cart-item");
let option3Checked = document.getElementById("payment3isChecked");
let yumSearchMessage = document.getElementById("search-yum-message");
let dailySearchMessage = document.getElementById("search-daily-message");
let premiumSearchMessage = document.getElementById("search-premium-message");
let baguetterSearchMessage = document.getElementById(
  "search-baguetter-message"
);
let yumFilterMessage = document.getElementById("filter-yum-message");
let dailyFilterMessage = document.getElementById("filter-daily-message");
let premiumFilterMessage = document.getElementById("filter-premium-message");
let baguetterFilterMessage = document.getElementById(
  "filter-baguetter-message"
);
let payingOrder = document.getElementById("orderNow");
let requestOrder = document.getElementById("requestOrder");

//Create empty array to populate with products
let yumProductsList = [];
let bundlesList = [];
let dailyProductsList = [];
let premiumProductsList = [];
let subscriptionsProductsList = [];
let categoriesProductsList = [];
let baguetterProductsList = [];
let offeredServicesList = [];
let yumFiltered = [];
let dailyFiltered = [];
let premiumFiltered = [];
let subscriptionsFiltered = [];
let baguetterFiltered = [];
let allProducts1 = [];

//The saved user details (passwords and other sensitive data to be excluded in the future)
let loggedInUser;

//Create a function to enable text field if appropriate radio button is checked
function ifChecked() {
  // option3Checked.getElementById("payment3isChecked");
  // checks to see if the radio button is checked or not, if checked true, if not false
  // also make sure it exists to prevent missing values (null) in other pages
  if (option3Checked) {
    const isChecked = option3Checked.checked;
    // set the disabled attribute to false should the button be checked
    document.getElementById("cardNumber").disabled = !isChecked;
    document.getElementById("expiration").disabled = !isChecked;
    document.getElementById("cvc").disabled = !isChecked;
  }
  isChanged();
}
// Run the function on "change" on each radio button, checking to see if the payment option 3 is picked or not
function isChanged() {
  if (option3Checked) {
    document.getElementById("payment1").addEventListener("change", ifChecked);
    document.getElementById("payment2").addEventListener("change", ifChecked);
    document
      .getElementById("payment3isChecked")
      .addEventListener("change", ifChecked);
    document.getElementById("payment4").addEventListener("change", ifChecked);
  }
}
ifChecked();

// Implement search bar function
const search = () => {
  searchBar.addEventListener("keyup", (e) => {
    let searchMessage = document.getElementById("search-message");
    const searchString = e.target.value.toLowerCase();
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    yumProducts(filteredYumProducts);

    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    dailyProducts(filteredDailyProducts);

    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    premiumProducts(filteredPremiumProducts);

    const filteredSubscriptions = subscriptionsProductsList.filter(
      (product) => {
        return product.title.toLowerCase().includes(searchString);
      }
    );
    subscriptionsProducts(filteredSubscriptions);
    const filteredBaguetter = baguetterProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    baguetterProducts(filteredBaguetter);
    if (yum && yum.innerHTML === "") {
      yumSearchMessage.classList.remove("hide");
      yumSearchMessage.classList.add("show");
    } else {
      yumSearchMessage.classList.remove("show");
      yumSearchMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailySearchMessage.classList.remove("hide");
      dailySearchMessage.classList.add("show");
    } else {
      dailySearchMessage.classList.remove("show");
      dailySearchMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumSearchMessage.classList.remove("hide");
      premiumSearchMessage.classList.add("show");
    } else {
      premiumSearchMessage.classList.remove("show");
      premiumSearchMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterSearchMessage.classList.remove("hide");
      baguetterSearchMessage.classList.add("show");
    } else {
      baguetterSearchMessage.classList.remove("show");
      baguetterSearchMessage.classList.add("hide");
    }
  });
};
if (searchBar !== null) {
  searchBar.addEventListener("input", search);
} else {
  removeEventListener("keyup", search);
}

//Fetch items from database
const loadProducts = async () => {
  try {
    const API_KEY = variables();
    // Fetch the products from the API

    //const response = await fetch(`https://localhost:7216/products`);

    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    // Filter the products into different categories
    yumProductsList = allProducts.filter(
      (product) => product.category === "Yum"
    );
    dailyProductsList = allProducts.filter(
      (product) => product.category === "Dagens"
    );
    premiumProductsList = allProducts.filter(
      (product) => product.category === "Premium"
    );
    subscriptionsProductsList = allProducts.filter(
      (product) => product.category === "Subscriptions"
    );
    baguetterProductsList = allProducts.filter(
      (product) => product.category === "Baguetter"
    );
    bundlesList = allProducts.filter(
      (product) => product.category === "Bundles"
    );

    // Further filtering or categorization
    yumFiltered = yumProductsList;
    dailyFiltered = dailyProductsList;
    premiumFiltered = premiumProductsList;
    subscriptionsFiltered = subscriptionsProductsList;
    baguetterFiltered = baguetterProductsList;
    bundlesListFiltered = bundlesList;

    // Combine all categories into one list
    const allProducts1 = [
      ...yumProductsList,
      ...dailyProductsList,
      ...premiumProductsList,
      ...subscriptionsProductsList,
      ...baguetterProductsList,
      ...bundlesList,
    ];

    // Pass the lists to UI functions
    yumProducts(yumProductsList);
    dailyProducts(dailyProductsList);
    premiumProducts(premiumProductsList);
    subscriptionsProducts(subscriptionsProductsList);
    baguetterProducts(baguetterProductsList);
    CarouselFoodBoxes(yumProductsList);
    CarouselFoodBoxes2(baguetterProductsList);
    CarouselDietButtons(yumProductsList);
    BundlesList(bundlesList);
  } catch (err) {
    // Handle errors gracefully
    console.error("Error fetching products:", err);
  }
};

// Call the function to load the products
loadProducts();

function showHealthyImage() {
  let bundleImage = document.getElementById("bundleImage");
  let healthyButton = document.querySelector("#healthyButton");
  console.log(healthyButton);
  const htmlString = bundlesList
    .map((bundle) => {
      if (bundle.id == 38) {
        return `
            <img class="img-fluid w-100" src="${bundle.imgRef}" alt="bundle-image" />
      `;
      }
    })
    .join("");
  bundleImage.innerHTML = htmlString;
  localStorage.setItem("bundle", htmlString);
}
function showFamilyImage() {
  let bundleImage = document.getElementById("bundleImage");
  let familyButton = document.querySelector("#familyButton");
  const htmlString = bundlesList
    .map((bundle) => {
      if (bundle.id == 39) {
        return `
            <img class="img-fluid w-100" src="${bundle.imgRef}" alt="bundle-image" />
      `;
      }
    })
    .join("");
  bundleImage.innerHTML = htmlString;
  localStorage.setItem("bundle", htmlString);
}
function showHalalImage() {
  let bundleImage = document.getElementById("bundleImage");
  let halalButton = document.querySelector("#halalButton");
  console.log(halalButton);
  const htmlString = bundlesList
    .map((bundle) => {
      if (bundle.id == 40) {
        return `
            <img class="img-fluid w-100" src="${bundle.imgRef}" alt="bundle-image" />
      `;
      }
    })
    .join("");
  bundleImage.innerHTML = htmlString;
  localStorage.setItem("bundle", htmlString);
}
async function Healthy() {
  if (formDataArry === null) {
    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    allProducts.map((category) => {
      if (
        category.id === 3 ||
        category.id === 6 ||
        category.id === 10 ||
        category.id === 13 ||
        category.id === 7
      ) {
        quantity = 1;
        formDataArry.push({
          id: category.id,
          description: category.description,
          diet: category.dietRef,
          img: category.imgRef,
          price: category.price,
          quantity: quantity,
          quantityPrice: category.price * quantity,
          title: category.title,
        });
        localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      }
    });
    showHealthyImage();
  } else if (formDataArry !== null) {
    formDataArry = [];
    antalBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      }
    });
    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    allProducts.map((category) => {
      if (
        category.id === 3 ||
        category.id === 6 ||
        category.id === 10 ||
        category.id === 13 ||
        category.id === 7
      ) {
        quantity = 1;
        formDataArry.push({
          id: category.id,
          description: category.description,
          diet: category.dietRef,
          img: category.imgRef,
          price: category.price,
          quantity: quantity,
          quantityPrice: category.price * quantity,
          title: category.title,
        });
        localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      }
    });
    showHealthyImage();
  }
}

async function Family() {
  if (formDataArry === null) {
    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    allProducts.map((category) => {
      if (
        category.id === 3 ||
        category.id === 16 ||
        category.id === 28 ||
        category.id === 2 ||
        category.id === 41
      ) {
        quantity = 1;
        formDataArry.push({
          id: category.id,
          description: category.description,
          diet: category.dietRef,
          img: category.imgRef,
          price: category.price,
          quantity: quantity,
          quantityPrice: category.price * quantity,
          title: category.title,
        });
        localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      }
    });
    showFamilyImage();
  } else if (formDataArry !== null) {
    formDataArry = [];
    antalBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      }
    });
    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    allProducts.map((category) => {
      if (
        category.id === 3 ||
        category.id === 16 ||
        category.id === 28 ||
        category.id === 2 ||
        category.id === 41
      ) {
        quantity = 1;
        formDataArry.push({
          id: category.id,
          description: category.description,
          diet: category.dietRef,
          img: category.imgRef,
          price: category.price,
          quantity: quantity,
          quantityPrice: category.price * quantity,
          title: category.title,
        });
        localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      }
    });
  }
  showFamilyImage();
}

async function Halal() {
  if (formDataArry === null) {
    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    allProducts.map((category) => {
      if (
        category.id === 2 ||
        category.id === 6 ||
        category.id === 13 ||
        category.id === 16 ||
        category.id === 14
      ) {
        quantity = 1;
        formDataArry.push({
          id: category.id,
          description: category.description,
          diet: category.dietRef,
          img: category.imgRef,
          price: category.price,
          quantity: quantity,
          quantityPrice: category.price * quantity,
          title: category.title,
        });
        localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      }
    });
    showHalalImage();
  } else if (formDataArry !== null) {
    formDataArry = [];
    antalBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      }
    });
    const response = await fetch(`https://${API_KEY}/products`);

    const data = await response.json();

    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
    const allProducts = data;

    allProducts.map((category) => {
      if (
        category.id === 2 ||
        category.id === 6 ||
        category.id === 13 ||
        category.id === 16 ||
        category.id === 14
      ) {
        quantity = 1;
        formDataArry.push({
          id: category.id,
          description: category.description,
          diet: category.dietRef,
          img: category.imgRef,
          price: category.price,
          quantity: quantity,
          quantityPrice: category.price * quantity,
          title: category.title,
        });
        localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      }
    });
    showHalalImage();
  }
}

function chooseQuantity10() {
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  formDataArry.map((dish) => {
    dish.quantity = 1;
    dish.quantityPrice = 75;
    dish.quantity = dish.quantity * 2;
    dish.quantityPrice = dish.quantityPrice * 2;
  });
  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
  displayOrderItems();
}

function chooseQuantity15() {
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  formDataArry.map((dish) => {
    dish.quantity = 1;
    dish.quantityPrice = 75;
    dish.quantity = dish.quantity * 3;
    dish.quantityPrice = dish.quantityPrice * 3;
  });
  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
  displayOrderItems();
}

function chooseQuantity20() {
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  formDataArry.map((dish) => {
    dish.quantity = 1;
    dish.quantityPrice = 75;
    dish.quantity = dish.quantity * 4;
    dish.quantityPrice = dish.quantityPrice * 4;
  });
  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
  displayOrderItems();
}
function displayOrderItems() {
  if (JSON.parse(localStorage.getItem("formDataArry")) !== null) {
    let productOrder = document.getElementById("product-container");
    let orderSum = document.getElementById("order-sum");
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    let mergedTitleArray = [];
    let mergedPriceArray = [];
    let mergedQuantityArray = [];
    let sum = 0;
    for (i = 0; i < formDataArry.length; i++) {
      let titleArray = formDataArry[i].title;
      let quantityArray = formDataArry[i].quantity;
      let priceArray = formDataArry[i].price;
      mergedTitleArray.push(JSON.stringify(titleArray));
      mergedQuantityArray.push(JSON.stringify(quantityArray));
      mergedPriceArray.push(JSON.stringify(priceArray + "kr"));
      sum += formDataArry[i].quantityPrice;
    }
    let titleValue = mergedTitleArray.join(", ");
    let quantityValue = mergedQuantityArray.join(", ");
    let priceValue = mergedPriceArray.join(", ");
    let htmlString = `
            <div class="container2">
            <div class="tbl_content">
              <table class="tbl">
                <thead id="table_head">
                  <tr>
                    <th class="pro_name1">Namn</th>
                    <th class="pro_select1">Kvantitet</th>
                    <th class="pro_status1">Pris</th>
                    </tr>
                </thead>
                </tbody>
        `;

    // Loop through each product in the array to generate table rows
    formDataArry.forEach((item) => {
      let title = truncateDescrip(item.title, 15);
      htmlString += `
                <tr>
                    <td data-label="Namn" class="pro_name1">${title}</td>
                    <td data-label="Kvantitet" class="pro_select1">${item.quantity}</td>
                    <td  data-label="Pris" class="pro_status1">${item.price} kr</td>
                </tr>
            `;
    });

    // Close the table structure
    htmlString += `
                </tbody>
            </table>
            </div>
            </div>
        `;

    // Insert the generated HTML into the container element
    if (productOrder !== null) {
      productOrder.innerHTML = htmlString;
      orderSum.textContent = sum + " kr";
    }
  }
}
/*

/*
// Dispay all products
const showAllProducts = (allProducts) => {
  if (products !== null) {
    allProducts.map((yum) => {
      let filteredProducts = allProducts.filter((products) => {
        return products.diet.includes(yum.diet)
      })
      const htmlString = filteredProducts.map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let ingredients = JSON.stringify(yum.ingredients);
        return (`
        <div class="d-flex">
        <div>
            ${yum.diet}
            </div> -
             <img alt="dagens-meny-bild" class="img-fluid diet_img" src="${yum.dietRef}" /></div>
             ${filteredProducts}
             <div
          class="wow fadeInUp "
          data-wow-duration="1s"
                      >
        <div class="menu_item yum_product_display_item"
                style="border: 1px solid var(--Stroke, #CED3D2); box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); width:364px; height:330px; border-radius:12px;"
                 >

                <div class="yum_item_buttons d-flex flex-column align-items-center">
                  <button
                  data-id=` +
          yum.id +
          `
                  data-yum-id=${yum.id}
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-diet=${yum.dietRef}
                  onclick='realAddToCart(event); openSidebar(); '
                  class="yum_btn"
                  style="border-radius: 12px;
                  padding: 18px 16px;
                  border: 1px solid white;
                  color: white;
                  background: var(--Complementary-color, #DD3902);"><i class="fas fa-shopping-basket"></i>Lägg i varukorg</button>

                  <button
                    data-yum-id=${yum.id}
                    data-yum-title=${title}
                    data-yum-price=${yum.price}
                    data-yum-img=${yum.imgRef}
                    data-yum-quantity-price=${yum.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${yum.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                  class="yum_btn aboutYumItem"
                  style="border-radius: 12px;
                  padding: 13px 7px;
                  border: 1px solid black;">Läs mer om produkten</button>
                </div>

                <div class="backOpacity">
                <div class="menu_item_img" style="border-bottom:solid 1px grey;">
                  <img
                    src=` +
          yum.imgRef +
          `
                    alt="yum-meny-bild"
                    class="img-fluid w-100"
                    class="title"
                    href="#"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center">

            </div>

                <div class="menu_item_text m-4">
                  <a
                    class="title"
                    href="#"
                    data-yum-id=${yum.id}
                    data-yum-title=${title}
                    data-yum-price=${yum.price}
                    data-yum-img=${yum.imgRef}
                    data-yum-quantity-price=${yum.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${yum.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    >` +
          yum.title +
          `</a>
                  <div class="d-flex justify-content-between">
                            <h5 class="price">` +
          yum.price +
          `kr</h5>
                            <img src=` +
          yum.dietRef +
          `
                            alt="dagens-meny-bild"
                            class="img-fluid diet_img"
                            href="#"/>
                    </div>
            <!--
            <ul class="d-flex flex-wrap justify-content-end">
                    <li>
                      <a href="#"><i class="fa fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                    </li>
                  </ul>
                  -->

                </div>
                </div>
          </div>
        </div>
        ` );
      })
        .join("");
      products.innerHTML = htmlString;
    })
  } else {
    return null;
  }
};
*/

// MENY - Funktion för att visa matlådor eller matkassor beroende på knappen
function toggleMenuType(isPersonal) {
  document.getElementById("yum").style.display = isPersonal ? "grid" : "none";
  document.getElementById("bundles").style.display = isPersonal
    ? "none"
    : "grid";
}
// MENY - Funktion för att visa betalning eller förfrågan beroende på knappen
function togglePaymentMethods(isPersonal) {
  document.getElementById("orderNow").style.display = isPersonal
    ? "block"
    : "none";
  document.getElementById("requestOrder").style.display = isPersonal
    ? "none"
    : "block";
}

//Display yum items
const yumProducts = (yumProductsList) => {
  if (yum !== null) {
    const htmlString = yumProductsList
      .map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let ingredients = JSON.stringify(yum.ingredients);
        return (
          `

          <div
          class="wow fadeInUp "
          data-wow-duration="1s"
                      >
        <div class="mobile_grid menu_item yum_product_display_item"
                style="border: 1px solid var(--Stroke, #CED3D2); box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); width:364px; height:330px; border-radius:12px;"
                 >

                <div class="yum_item_buttons d-flex flex-column align-items-center">
                  <button
                  data-id=` +
          yum.id +
          `
                  data-yum-id=${yum.id}
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-diet=${yum.dietRef}
                  onclick='realAddToCart(event)'
                  class="yum_btn"
                  style="border-radius: 12px;
                  padding: 18px 16px;
                  border: 1px solid white;
                  color: white;
                  background: var(--Complementary-color, #DD3902);"><i class="fas fa-shopping-basket"></i>Lägg i varukorg</button>

                  <button
                    data-yum-id=${yum.id}
                    data-yum-title=${title}
                    data-yum-price=${yum.price}
                    data-yum-img=${yum.imgRef}
                    data-yum-quantity-price=${yum.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${yum.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                  class="yum_btn aboutYumItem"
                  style="border-radius: 12px;
                  padding: 13px 7px;
                  border: 1px solid black;">Läs mer om produkten</button>
                </div>

                <div class="backOpacity">
                <div class="menu_item_img" style="border-bottom:solid 1px grey;">
                  <img
                    src=` +
          yum.imgRef +
          `
                    alt="yum-meny-bild"
                    class="img-fluid w-100"
                    class="title"
                    href="#"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center">

            </div>

                <div class="menu_item_text m-4">
                  <a
                    class="title"
                    href="#"
                    data-yum-id=${yum.id}
                    data-yum-title=${title}
                    data-yum-price=${yum.price}
                    data-yum-img=${yum.imgRef}
                    data-yum-quantity-price=${yum.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${yum.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    >` +
          yum.title +
          `</a>
                  <div class="d-flex justify-content-between">
                            <h5 class="price">` +
          yum.price +
          `kr</h5>
                            <img src=` +
          yum.dietRef +
          `
                            alt="dagens-meny-bild"
                            class="img-fluid diet_img"
                            href="#"/>
                    </div>
            <!--
            <ul class="d-flex flex-wrap justify-content-end">
                    <li>
                      <a href="#"><i class="fa fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                    </li>
                  </ul>
                  -->

                </div>

                </div>

          </div>
        </div>

        `

          /////////////////////////////// Backup start /////////////////////////////

          // `<div
          //   class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
          //   data-wow-duration="1s"
          //               >
          // <div class="menu_item"
          //         data-yum-id=${yum.id}
          //         data-yum-title=${title}
          //         data-yum-price=${yum.price}
          //         data-yum-img=${yum.imgRef}
          //         data-yum-quantity-price=${yum.price}
          //         data-yum-description=${description}
          //         data-yum-ingredients=${ingredients}
          //         data-yum-diet=${yum.dietRef}
          //         data-bs-toggle="modal"
          //         data-bs-target="#modal">
          //     <div class="menu_item_img">
          //       <img
          //         src=` +
          // yum.imgRef +
          // `
          //         alt="yum-meny-bild"
          //         class="img-fluid w-100"
          //         class="title"
          //         href="#"
          //       />
          //     </div>
          //     <div class="d-flex justify-content-between align-items-center">
          //     <div class="d-flex"><img
          //         src=` +
          // yum.dietRef +
          // `
          //         alt="dagens-meny-bild"
          //         class="img-fluid w-100 diet_img"
          //         href="#"

          //       /></div>
          //       <a class="category" href="#">` +
          // yum.category +
          // `</a>
          // </div>
          //     <div class="menu_item_text">
          //       <a
          //         class="title"
          //         href="#"
          //         data-yum-id=${yum.id}
          //         data-yum-title=${title}
          //         data-yum-price=${yum.price}
          //         data-yum-img=${yum.imgRef}
          //         data-yum-quantity-price=${yum.price}
          //         data-yum-description=${description}
          //         data-yum-ingredients=${ingredients}
          //         data-yum-diet=${yum.dietRef}
          //         data-bs-toggle="modal"
          //         data-bs-target="#modal"
          //         >` +
          // yum.title +
          // `</a
          //       >
          //       <h5 class="price">` +
          // yum.price +
          // `kr</h5>
          // <!--
          // <ul class="d-flex flex-wrap justify-content-end">
          //         <li>
          //           <a href="#"><i class="fa fa-heart"></i></a>
          //         </li>
          //         <li>
          //           <a href="menu_details.html"><i class="fa fa-eye"></i></a>
          //         </li>
          //       </ul>
          //       -->
          //     </div>
          //   </div>
          //   ` +
          // "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          // yum.id +
          // `
          // data-yum-id=${yum.id}
          // data-yum-title=${title}
          // data-yum-price=${yum.price}
          // data-yum-img=${yum.imgRef}
          // data-yum-quantity-price=${yum.price}
          // data-yum-description=${description}
          // data-yum-diet=${yum.dietRef}
          // ` +
          // ") onclick='realAddToCart(event)''>Lägg till <i class='fas fa-cart-plus' ></i></button>" +
          // `
          // </div>`

          /////////////////////////////// Backup end /////////////////////////////
        );
      })
      .join("");
    yum.innerHTML = htmlString;
  } else {
    return null;
  }
};

function realAddToCartBundle(event) {
  var buttonId = event.target.closest("button").dataset.id;
  console.log(buttonId);
  if (buttonId == 38) {
    Healthy();
    setTimeout(function () {
      chooseQuantity10();
    }, 150);
  } else if (buttonId == 39) {
    Family();
    setTimeout(function () {
      chooseQuantity10();
    }, 150);
  }
  if (buttonId == 40) {
    Halal();
    setTimeout(function () {
      chooseQuantity10();
    }, 150);
  }
}

function realAddToCartBundleModal() {
  var modalId = localStorage.getItem("id");
  console.log(modalId);
  if (modalId == 38) {
    Healthy();
    setTimeout(function () {
      chooseQuantity10();
    }, 150);
    closeBudlesModal();
  } else if (modalId == 39) {
    Family();
    setTimeout(function () {
      chooseQuantity10();
    }, 150);
    closeBudlesModal();
  } else if (modalId == 40) {
    Halal();
    setTimeout(function () {
      chooseQuantity10();
    }, 150);
    closeBudlesModal();
  }
}

function closeBudlesModal() {
  setTimeout(() => {
    var myModal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById("bundlePop"),
      {
        keyboard: false,
      }
    );
    myModal.hide();
  }, 150);
}

const BundlesList = (bundlesList) => {
  if (bundles !== null) {
    const htmlString = bundlesList
      .map((bundle) => {
        let title = JSON.stringify(bundle.title);
        let description = JSON.stringify(bundle.description);
        let ingredients = JSON.stringify(bundle.ingredients);
        return (
          `
          <div
          class="wow fadeInUp "
          data-wow-duration="1s"
                      >
        <div class="mobile_grid menu_item yum_product_display_item"
                style="border: 1px solid var(--Stroke, #CED3D2); box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); width:364px; height:330px; border-radius:12px;"
                 >

                <div class="yum_item_buttons d-flex flex-column align-items-center">
                  <button
                  data-id=` +
          bundle.id +
          `
                  data-yum-id=${bundle.id}
                  data-yum-title=${title}
                  data-yum-price=${bundle.price}
                  data-yum-img=${bundle.imgRef}
                  data-yum-quantity-price=${bundle.price}
                  data-yum-description=${description}
                  data-yum-diet=${bundle.dietRef}
                  onclick='realAddToCartBundle(event)'
                  class="yum_btn"
                  style="border-radius: 12px;
                  padding: 18px 16px;
                  border: 1px solid white;
                  color: white;
                  background: var(--Complementary-color, #DD3902);"><i class="fas fa-shopping-basket"></i>Lägg i varukorg</button>

                  <button
                    data-yum-id=${bundle.id}
                    data-yum-title=${title}
                    data-yum-price=${bundle.price}
                    data-yum-img=${bundle.imgRef}
                    data-yum-quantity-price=${bundle.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${bundle.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#bundlePop"
                  class="yum_btn aboutYumItem"
                  style="border-radius: 12px;
                  padding: 13px 7px;
                  border: 1px solid black;">Läs mer om produkten</button>
                </div>

                <div class="backOpacity">
                <div class="menu_item_img" style="border-bottom:solid 1px grey;">
                  <img
                    src=` +
          bundle.imgRef +
          `
                    alt="yum-meny-bild"
                    class="img-fluid w-100"
                    class="title"
                    href="#"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center">

            </div>

                <div class="menu_item_text m-4">
                  <a
                    class="title"
                    href="#"
                    data-yum-id=${bundle.id}
                    data-yum-title=${title}
                    data-yum-price=${bundle.price}
                    data-yum-img=${bundle.imgRef}
                    data-yum-quantity-price=${bundle.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${bundle.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#bundlePop"
                    >` +
          bundle.title +
          `</a>
                  <div class="d-flex justify-content-between">
                            <h5 class="price">` +
          bundle.price +
          `kr</h5>
                            <img src=` +
          bundle.dietRef +
          `
                            alt="dagens-meny-bild"
                            class="img-fluid diet_img"
                            href="#"/>
                    </div>
            <!--
            <ul class="d-flex flex-wrap justify-content-end">
                    <li>
                      <a href="#"><i class="fa fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                    </li>
                  </ul>
                  -->

                </div>

                </div>

          </div>
        </div>

        `

          /////////////////////////////// Backup start /////////////////////////////

          // `<div
          //   class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
          //   data-wow-duration="1s"
          //               >
          // <div class="menu_item"
          //         data-yum-id=${yum.id}
          //         data-yum-title=${title}
          //         data-yum-price=${yum.price}
          //         data-yum-img=${yum.imgRef}
          //         data-yum-quantity-price=${yum.price}
          //         data-yum-description=${description}
          //         data-yum-ingredients=${ingredients}
          //         data-yum-diet=${yum.dietRef}
          //         data-bs-toggle="modal"
          //         data-bs-target="#modal">
          //     <div class="menu_item_img">
          //       <img
          //         src=` +
          // yum.imgRef +
          // `
          //         alt="yum-meny-bild"
          //         class="img-fluid w-100"
          //         class="title"
          //         href="#"
          //       />
          //     </div>
          //     <div class="d-flex justify-content-between align-items-center">
          //     <div class="d-flex"><img
          //         src=` +
          // yum.dietRef +
          // `
          //         alt="dagens-meny-bild"
          //         class="img-fluid w-100 diet_img"
          //         href="#"

          //       /></div>
          //       <a class="category" href="#">` +
          // yum.category +
          // `</a>
          // </div>
          //     <div class="menu_item_text">
          //       <a
          //         class="title"
          //         href="#"
          //         data-yum-id=${yum.id}
          //         data-yum-title=${title}
          //         data-yum-price=${yum.price}
          //         data-yum-img=${yum.imgRef}
          //         data-yum-quantity-price=${yum.price}
          //         data-yum-description=${description}
          //         data-yum-ingredients=${ingredients}
          //         data-yum-diet=${yum.dietRef}
          //         data-bs-toggle="modal"
          //         data-bs-target="#modal"
          //         >` +
          // yum.title +
          // `</a
          //       >
          //       <h5 class="price">` +
          // yum.price +
          // `kr</h5>
          // <!--
          // <ul class="d-flex flex-wrap justify-content-end">
          //         <li>
          //           <a href="#"><i class="fa fa-heart"></i></a>
          //         </li>
          //         <li>
          //           <a href="menu_details.html"><i class="fa fa-eye"></i></a>
          //         </li>
          //       </ul>
          //       -->
          //     </div>
          //   </div>
          //   ` +
          // "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          // yum.id +
          // `
          // data-yum-id=${yum.id}
          // data-yum-title=${title}
          // data-yum-price=${yum.price}
          // data-yum-img=${yum.imgRef}
          // data-yum-quantity-price=${yum.price}
          // data-yum-description=${description}
          // data-yum-diet=${yum.dietRef}
          // ` +
          // ") onclick='realAddToCart(event)''>Lägg till <i class='fas fa-cart-plus' ></i></button>" +
          // `
          // </div>`

          /////////////////////////////// Backup end /////////////////////////////
        );
      })
      .join("");
    bundles.innerHTML = htmlString;
  } else {
    return null;
  }
};

const carouselContainer = document.getElementById("container");
const carouselContainer2 = document.getElementById("container2");
const carouselDietButtons = document.getElementById("dietButtons");

const CarouselFoodBoxes = (yumProductsList) => {
  if (carouselContainer !== null) {
    const htmlString = yumProductsList
      .map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let newDescription = truncateDescrip(description, 40);
        let ingredients = JSON.stringify(yum.ingredients);
        return (
          `
          <div class="swiper-slide">
            <div class="menu_item_slider"
                data-yum-id=${yum.id} 
                data-yum-title=${title}
                data-yum-price=${yum.price}
                data-yum-img=${yum.imgRef}
                data-yum-quantity-price=${yum.price}
                data-yum-description=${description}
                data-yum-ingredients=${ingredients}
                data-yum-diet=${yum.dietRef}
                data-bs-toggle="modal"
                data-bs-target="#modal">
              
              <div class="menu_item_slider_img">
                <img
                  src=` +
          yum.imgRef +
          `
                  alt="yum-meny-bild"
                  class="img-fluid w-100"
                />
              </div>

              <div class="menu_item_slider_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${yum.id} 
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${yum.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          yum.title.replace(/'/g, "") +
          `</a>
                <p class="description">${newDescription}</p>
                <h5 class="price">` +
          yum.price +
          ` kr</h5>
              </div>
            </div>
            <button id='cart-button' class='menu_add_to_cart' data-id=` +
          yum.id +
          `
              data-yum-id=${yum.id} 
              data-yum-title=${title}
              data-yum-price=${yum.price}
              data-yum-img=${yum.imgRef}
              data-yum-quantity-price=${yum.price}
              data-yum-description=${description}
              data-yum-diet=${yum.dietRef}
              onclick='realAddToCart(event)'"><i class='fas fa-cart-plus'></i> Lägg i varukorg 
            </button>
          </div>
        `
        );
      })
      .join("");
    carouselContainer.innerHTML = htmlString;
  } else {
    return null;
  }
};

const CarouselFoodBoxes2 = (baguetterProductsList) => {
  if (carouselContainer2 !== null) {
    const htmlString = baguetterProductsList
      .map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let newDescription = truncateDescrip(description, 40);
        let ingredients = JSON.stringify(yum.ingredients);
        return (
          `
          <div class="swiper-slide">
            <div class="menu_item_slider"
                data-yum-id=${yum.id} 
                data-yum-title=${title}
                data-yum-price=${yum.price}
                data-yum-img=${yum.imgRef}
                data-yum-quantity-price=${yum.price}
                data-yum-description=${description}
                data-yum-ingredients=${ingredients}
                data-yum-diet=${yum.dietRef}
                data-bs-toggle="modal"
                data-bs-target="#modal">
              
              <div class="menu_item_slider_img">
                <img
                  src=` +
          yum.imgRef +
          `
                  alt="yum-meny-bild"
                  class="img-fluid w-100"
                />
              </div>

              <div class="menu_item_slider_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${yum.id} 
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${yum.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          yum.title.replace(/'/g, "") +
          `</a>
                <p class="description">${newDescription}</p>
                <h5 class="price">` +
          yum.price +
          ` kr</h5>
              </div>
            </div>
            <button id='cart-button' class='menu_add_to_cart' data-id=` +
          yum.id +
          `
              data-yum-id=${yum.id} 
              data-yum-title=${title}
              data-yum-price=${yum.price}
              data-yum-img=${yum.imgRef}
              data-yum-quantity-price=${yum.price}
              data-yum-description=${description}
              data-yum-diet=${yum.dietRef}
              onclick='realAddToCart(event)'"><i class='fas fa-cart-plus'></i> Lägg i varukorg 
            </button>
          </div>
        `
        );
      })
      .join("");
    carouselContainer2.innerHTML = htmlString;
  } else {
    return null;
  }
};

function showFoodBoxes() {
  yum.style.display = "grid";
  bundles.style.display = "none";
  foodBoxes.style.display = "block";
}

function showBundles() {
  yum.style.display = "none";
  bundles.style.display = "grid";
  foodBoxes.style.display = "none";
}

function showPaymentNow() {
  payingOrder.style.display = "block";
  requestOrder.style.display = "none";
}

function showRequestOrder() {
  payingOrder.style.display = "none";
  requestOrder.style.display = "block";
}
// product page( Färdigamatkassar & matlådor)
let selectedBox = null;
function FärdigaMatkassar(element) {
  handleBoxClick(element, "FärdigaMatkassar");
}

function Matlådor(element) {
  handleBoxClick(element, "Matlådor");
}

function handleBoxClick(element, boxType) {
  if (selectedBox && selectedBox !== element) {
    const previousCheckmark = selectedBox.querySelector(".check-products img");
    if (previousCheckmark) {
      previousCheckmark.style.display = "none";
    }
    selectedBox.style.backgroundColor = "";
    selectedBox.style.border = "";
  }

  const checkmark = element.querySelector(".check-products img");
  const isDisplayed = checkmark && checkmark.style.display === "block";

  if (checkmark) {
    checkmark.style.display = isDisplayed ? "none" : "block";
  }

  if (isDisplayed) {
    element.style.backgroundColor = "";
    element.style.border = "";
    selectedBox = null;
  } else {
    element.style.backgroundColor = "#FFDFCE";
    element.style.border = "2px solid black";
    selectedBox = element;
  }
}

// Carousel in product page
let currentIndex = 0;
const itemsPerPage = 4;
const CarouselDietButtons = (yumProductsList) => {
  if (carouselDietButtons !== null) {
    const dietFiltered = yumProductsList.map((yum) => yum.diet);
    const uniqueDiets = [...new Set(dietFiltered)];

    const htmlString = uniqueDiets
      .map((diet) => {
        return `
          <div class="swiper-slide">
            <button class="btn meny-option" style="border:1px solid rgb(65, 64, 64); margin: 0 20px" onclick="sortingDishDietFunction('${diet}')" >
              ${diet}
            </button>
          </div>
          `;
      })
      .join("");
    carouselDietButtons.innerHTML = htmlString;
    if (swiper3) {
      swiper3.update(); // Update swiper after content change
    }
  } else {
    return null;
  }
};

var swiper3 = new Swiper(".slide-content3", {
  slidesPerView: 3,
  spaceBetween: 25,
  fade: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next-diet",
    prevEl: ".swiper-button-prev-diet",
    disabledClass: "disabled_swiper_button",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 5,
    },
  },
  on: {
    slideChange: function () {
      console.log("Active slide index:", this.activeIndex); // Debug active index
    },
  },
});

// banner2 i product page
document.addEventListener("DOMContentLoaded", function () {
  var SwiperCustom = new Swiper(".mySwiper-custom", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiper-custom-next",
      prevEl: ".mySwiper-custom-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
});
// hämta bilder från instagram
// document.addEventListener('DOMContentLoaded', function() {
//   const feed = new Instafeed({
//     accessToken: 'ACCESS_TOKEN',
//     limit: 4,
//     template: '<div class="image-box"><img src="{{image}}" alt="{{caption}}" class="img-fluid banner2" /></div>',
//     target: 'instagram-feed'
//   });
//   feed.run();
// });

//Function for payment accordions
function togglePaymentMethod() {
  const cardSection = document.getElementById("cardPaymentSection");
  const invoiceSection = document.getElementById("invoicePaymentSection");
  if (document.getElementById("paymentCard") !== null) {
    if (document.getElementById("paymentCard").checked) {
      cardSection.style.display = "block";
      invoiceSection.style.display = "none";
    } else if (document.getElementById("paymentInvoice").checked) {
      cardSection.style.display = "none";
      invoiceSection.style.display = "block";
    }
  }
}
window.onload = function () {
  togglePaymentMethod();
};

//Display daily items
const dailyProducts = (dailyProductsList) => {
  if (daily !== null) {
    const htmlString = dailyProductsList
      .map((daily) => {
        let title = JSON.stringify(daily.title);
        let description = JSON.stringify(daily.description);
        let ingredients = JSON.stringify(daily.ingredients);
        return (
          `<div
            class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item" data-yum-id=${daily.id}
                  data-yum-title=${title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.imgRef}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${daily.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal">
              <div class="menu_item_img">
                <img
                  src=` +
          daily.imgRef +
          `
                  alt="dagens-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"

                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">
               <img
                  src=` +
          daily.dietRef +
          `
                  alt="dagens-meny-bild"
                  class="img-fluid w-100 diet_img"
                  href="#"

                /></div>
                <a class="category" href="#">` +
          daily.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${daily.id}
                  data-yum-title=${title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.img}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${daily.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          daily.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          daily.price +
          `kr</h5>` +
          "<div class='add_to_cart'>Kommer snart</div><!-- <button id = 'cart-button' class='amenu_add_to_cart' data - id=" +
          daily.id +
          `
          data-yum-id=${daily.id}
          data-yum-title=${title}
          data-yum-price=${daily.price}
          data-yum-img=${daily.imgRef}
          data-yum-quantity-price=${daily.price}
          data-yum-description=${description}
          data-yum-diet=${daily.dietRef}    
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus' onclick='realAddToCart(event)' ></i></button>-->" +
          `<!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    daily.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Display premium items
const premiumProducts = (premiumProductsList) => {
  if (premium !== null) {
    const htmlString = premiumProductsList
      .map((premium) => {
        let title = JSON.stringify(premium.title);
        let description = JSON.stringify(premium.description);
        let ingredients = JSON.stringify(premium.ingredients);
        return (
          `<div
            class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item" data-yum-id=${premium.id}
                  data-yum-title=${title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.imgRef}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${premium.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal">
              <div class="menu_item_img">
                <img
                  src=` +
          premium.imgRef +
          `
                  alt="premium-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"

                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">
               <img
                  src=` +
          premium.dietRef +
          `
                  alt="premium-meny-bild"
                  class="img-fluid w-100 diet_img"
                  href="#"

                /></div>
                <a class="category" href="#">` +
          premium.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${premium.id}
                  data-yum-title=${title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.imgRef}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${premium.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          premium.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          premium.price +
          `kr</h5>` +
          "<div class='add_to_cart'>Kommer snart</div><!--<button id='cart-button' class='menu_add_to_cart' data-id=" +
          premium.id +
          `
          data-yum-id=${premium.id}
          data-yum-title=${title}
          data-yum-price=${premium.price}
          data-yum-img=${premium.imgRef}
          data-yum-quantity-price=${premium.price}
          data-yum-description=${description}
          data-yum-diet=${premium.dietRef}
          ` +
          ") onclick='realAddToCart(event)'>Lägg till  <i class='fas fa-cart-plus' ></i></button>-->" +
          `<!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    premium.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Show baguetter
const baguetterProducts = (baguetterProductsList) => {
  if (baguetter !== null) {
    const htmlString = baguetterProductsList
      .map((baguetter) => {
        let title = JSON.stringify(baguetter.title);
        let description = JSON.stringify(baguetter.description);
        let ingredients = JSON.stringify(baguetter.ingredients);
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          baguetter.imgRef +
          `
                  alt="baguette-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${baguetter.id}
                  data-yum-title=${title}
                  data-yum-price=${baguetter.price}
                  data-yum-img=${baguetter.imgRef}
                  data-yum-quantity-price=${baguetter.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${baguetter.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
               <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex"><img
                  src=` +
          baguetter.dietRef +
          `
                  alt="dagens-meny-bild"
                  class="img-fluid w-100 diet_img"
                  href="#"

                /></div>
                <a class="category" href="#">` +
          baguetter.category +
          `</a>
          </div>
          <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${baguetter.id}
                  data-yum-title=${title}
                  data-yum-price=${baguetter.price}
                  data-yum-img=${baguetter.imgRef}
                  data-yum-quantity-price=${baguetter.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${baguetter.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          baguetter.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          baguetter.price +
          `kr</h5>` +
          "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          baguetter.id +
          `
          data-yum-id=${baguetter.id}
          data-yum-title=${title}
          data-yum-price=${baguetter.price}
          data-yum-img=${baguetter.imgRef}
          data-yum-quantity-price=${baguetter.price}
          data-yum-description=${description}
          data-yum-diet=${baguetter.dietRef}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    baguetter.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Show subscription prducts
const subscriptionsProducts = (subscriptionsProductsList) => {
  if (subscriptions !== null) {
    let i = 0;
    const htmlString = subscriptionsProductsList
      .map((subscription) => {
        let title = JSON.stringify(subscription.title);
        let description = JSON.stringify(subscription.description);
        let ingredients = JSON.stringify(subscription.ingredients);
        return (
          `
          <div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div class="menu_item">
              <div class="menu_item_img">
                <img src=` +
          subscription.img +
          `
                  alt="prenumeration-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${subscription.id}
                  data-yum-title=${title}
                  data-yum-price=${subscription.price}
                  data-yum-img=${subscription.img}
                  data-yum-quantity-price=${subscription.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          subscription.category +
          `</a>
                <a
                  class="title"
                  href="#"
                  data-yum-id=${subscription.id}
                  data-yum-title=${title}
                  data-yum-price=${subscription.price}
                  data-yum-img=${subscription.img}
                  data-yum-quantity-price=${subscription.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          subscription.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          subscription.price +
          `kr</h5>` +
          "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          subscription.id +
          `
          data-yum-id=${subscription.id}
          data-yum-title=${title}
          data-yum-price=${subscription.price}
          data-yum-img=${subscription.img}
          data-yum-quantity-price=${subscription.price}
          data-yum-description=${description}
          data-yum-diet=${subscription.dietRef}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till       <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
            </div>
          </div>`
        );
      })
      .join("");
    subscriptions.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Sort function by name and price
const sortingNamePriceFunction = (el) => {
  const option = el.value;
  if (option === "name") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  } else if (option === "AL") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  } else if (option === "l2h") {
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const sortedYumArray = yumFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedDailyArray = dailyFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedPremiumArray = premiumFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedBaguetterArray = baguetterFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  } else if (option === "h2l") {
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const sortedYumArray = yumFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedDailyArray = dailyFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedPremiumArray = premiumFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedBaguetterArray = baguetterFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  } else {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  }
};

function clearFilter() {
  const sortedYumArray = yumFiltered.sort((a, b) =>
    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
  );
  yumProducts(sortedYumArray);
  let clearFilter = document.getElementById("clear-filter");
  clearFilter.style.display = "none";
}

//Sort function for diet
const sortingDishDietFunction = (el) => {
  const option = el;
  let clearFilter = document.getElementById("clear-filter");
  if (option === "Vegan") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet.includes("Vegan");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let vegan = "";
    //   product.diet.map((img) => {
    //     vegan = img.toLowerCase().includes(option);
    //   });
    //   return vegan;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let vegan = "";
    //   product.diet.map((img) => {
    //     vegan = img.toLowerCase().includes(option);
    //   });
    //   return vegan;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let vegan = "";
    //     product.diet.map((img) => {
    //       vegan = img.toLowerCase().includes(option);
    //     });
    //     return vegan;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "AL") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    yumProducts(sortedYumArray);
    dailyProducts(sortedDailyArray);
    premiumProducts(sortedPremiumArray);
    baguetterProducts(sortedBaguetterArray);
    if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "Vegetarian") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet.includes("Vegetarian");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let vegetarian = "";
    //   product.diet.map((img) => {
    //     vegetarian = img.toLowerCase().includes(option);
    //   });
    //   return vegetarian;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let vegetarian = "";
    //   product.diet.map((img) => {
    //     vegetarian = img.toLowerCase().includes(option);
    //   });
    //   return vegetarian;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let vegetarian = "";
    //     product.diet.map((img) => {
    //       vegetarian = img.toLowerCase().includes(option);
    //     });
    //     return vegetarian;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "Nöt") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet === "Nöt";
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let cow = "";
    //   product.diet.map((img) => {
    //     cow = img.toLowerCase().includes(option);
    //   });
    //   return cow;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let cow = "";
    //   product.diet.map((img) => {
    //     cow = img.toLowerCase().includes(option);
    //   });
    //   return cow;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let cow = "";
    //     product.diet.map((img) => {
    //       cow = img.toLowerCase().includes(option);
    //     });
    //     return cow;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "Fisk") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet.includes("Fisk");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let fish = "";
    //     product.diet.map((img) => {
    //       fish = img.toLowerCase().includes(option);
    //     });
    //     return fish;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "Fläsk") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet === "Fläsk";
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let fish = "";
    //     product.diet.map((img) => {
    //       fish = img.toLowerCase().includes(option);
    //     });
    //     return fish;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "Kyckling") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet.includes("Kyckling");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let chicken = "";
    //     product.diet.map((img) => {
    //       chicken = img.toLowerCase().includes(option);
    //     });
    //     return chicken;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "Fläsk, Nöt") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      clearFilter.style.display = "flex";
      return product.diet.includes("Fläsk, Nöt");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let chicken = "";
    //     product.diet.map((img) => {
    //       chicken = img.toLowerCase().includes(option);
    //     });
    //     return chicken;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  }
};
loadProducts();

// Make modal fetch data from json file
var cardModal = document.getElementById("modal");
if (cardModal !== null) {
  cardModal.addEventListener("show.bs.modal", function (event) {
    var button = event.relatedTarget;
    var id = button.getAttribute("data-yum-id");
    var title = button.getAttribute("data-yum-title");
    var price = button.getAttribute("data-yum-price");
    var img = button.getAttribute("data-yum-img");
    var quantityPrice = button.getAttribute("data-yum-quantity-price");
    var description = button.getAttribute("data-yum-description");
    var ingredients = button.getAttribute("data-yum-ingredients");
    var dietRef = button.getAttribute("data-yum-diet");

    var modalTitle = cardModal.querySelector(".title");
    var modalPrice = cardModal.querySelector(".price");
    var modalImg = cardModal.querySelector(".dish_img");
    var modalQuantityPrice = cardModal.querySelector(".quantity_price");
    var modalDescription = cardModal.querySelector(".description");
    var modalIngredients = cardModal.querySelector(".ingredients");
    var modalDiet = cardModal.querySelector(".diet_img");
    var input = cardModal.querySelector(".quantity").value;
    input = parseInt(input);

    localStorage.setItem("quantity", input);
    localStorage.setItem("id", id);
    localStorage.setItem("title", (modalTitle.textContent = title));
    localStorage.setItem("price", (modalPrice.innerHTML = price));

    localStorage.setItem("img", (modalImg.src = img));
    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = quantityPrice)
    );
    localStorage.setItem(
      "ingredients",
      (modalIngredients.innerHTML = ingredients)
    );
    localStorage.setItem(
      "description",
      (modalDescription.textContent = description)
    );
    localStorage.setItem("diet", (modalDiet.src = dietRef));
    localStorage.setItem("quantity", (input.value = 1));
    hideDiv();
  });
} else {
  null;
}

// Make modal fetch data from json file
var bundleModal = document.getElementById("bundlePop");
if (bundleModal !== null) {
  bundleModal.addEventListener("show.bs.modal", function (event) {
    var button = event.relatedTarget;
    var id = button.getAttribute("data-yum-id");
    var title = button.getAttribute("data-yum-title");
    var price = button.getAttribute("data-yum-price");
    var img = button.getAttribute("data-yum-img");
    var description = button.getAttribute("data-yum-description");
    var ingredients = button.getAttribute("data-yum-ingredients");
    var dietRef = button.getAttribute("data-yum-diet");

    var modalTitle = bundleModal.querySelector(".title");
    var modalPrice = bundleModal.querySelector(".price");
    var modalImg = bundleModal.querySelector(".dish_img");
    var modalDescription = bundleModal.querySelector(".description");
    var modalIngredients = bundleModal.querySelector(".ingredients");
    var modalDiet = bundleModal.querySelector(".diet_img");

    localStorage.setItem("id", id);
    localStorage.setItem("title", (modalTitle.textContent = title));
    localStorage.setItem("price", (modalPrice.innerHTML = price));

    localStorage.setItem("img", (modalImg.src = img));
    localStorage.setItem(
      "ingredients",
      (modalIngredients.innerHTML = ingredients)
    );
    localStorage.setItem(
      "description",
      (modalDescription.textContent = description)
    );
    localStorage.setItem("diet", (modalDiet.src = dietRef));
    hideDiv();
  });
} else {
  null;
}

//Show ingredients div
function showDiv() {
  let ingredientsButton = document.getElementById("ingredientsButton");
  var x = document.getElementById("welcomeDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
    ingredientsButton.innerText = "Dölj ingredienser";
  } else {
    x.style.display = "none";
    ingredientsButton.innerText = "Visa ingredienser";
  }
}

function hideDiv() {
  let ingredientsButton = document.getElementById("ingredientsButton");
  var x = document.getElementById("welcomeDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
    ingredientsButton.innerText = "Visa ingredienser";
  }
}

function showBundleDiv() {
  let bundleIngredientsButton = document.getElementById(
    "bundleIngredientsButton"
  );
  var x = document.getElementById("welcomeBundle");
  if (x.style.display === "none") {
    x.style.display = "block";
    bundleIngredientsButton.innerText = "Dölj matlådor";
  } else {
    x.style.display = "none";
    bundleIngredientsButton.innerText = "Visa matlådor";
  }
}

function hideBundleDiv() {
  let bundleIngredientsButton = document.getElementById(
    "bundleIngredientsButton"
  );
  var x = document.getElementById("welcomeBundle");
  if (x.style.display === "block") {
    x.style.display = "none";
    bundleIngredientsButton.innerText = "Visa matlådor";
  }
}

//Show data into menu_details page based on the modal clicked
const detailsTitle = localStorage.getItem("title");
const detailsPrice = localStorage.getItem("price");
const detailsQuantityPrice = localStorage.getItem("quantity-price");
const detailsImg = localStorage.getItem("img");
const existingTitle = document.getElementById("title");
if (existingTitle !== null) {
  document.getElementById("title").textContent = detailsTitle;
  document.getElementById("price").textContent = detailsPrice;
  document.getElementById("quantity-price").textContent = detailsQuantityPrice;
  const imgArray = document.querySelectorAll(".zoom");
  for (let i = 0; i < Object.entries(imgArray).length; i++)
    imgArray[i].src = detailsImg;
} else {
  null;
}

let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));

//Add to cart function from button
function realAddToCart(event) {
  var id = event.target.closest("button").dataset.id;
  var title = event.target.closest("button").dataset.yumTitle;
  var price = event.target.closest("button").dataset.yumPrice;
  var img = event.target.closest("button").dataset.yumImg;
  var quantityPrice = event.target.closest("button").dataset.yumQuantityPrice;
  var description = event.target.closest("button").dataset.yumDescription;
  var dietImage = event.target.closest("button").dataset.yumDiet;

  let formData = {};
  formData.id = id;
  formData.title = title;
  formData.price = price;
  formData.img = img;
  formData.quantityPrice = quantityPrice;
  formData.quantity = 1;
  formData.description = description;
  formData.diet = dietImage;

  const itemIndexInBasket = formDataArry.findIndex(
    (basketEntry) => basketEntry.id === id
  );
  if (itemIndexInBasket !== -1) {
    formDataArry[itemIndexInBasket].quantity++;
    formDataArry[itemIndexInBasket].quantityPrice =
      parseInt(formDataArry[itemIndexInBasket].quantityPrice) +
      parseInt(formDataArry[itemIndexInBasket].price);
  } else {
    if (id !== undefined) {
      formDataArry.push(formData);
    } else {
      return null;
    }
  }

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
}

//Add to cart function from modal
function modalAddToCart() {
  var modalId = localStorage.getItem("id");
  var modalTitle = localStorage.getItem("title");
  var modalPrice = localStorage.getItem("price");
  var modalQuantityPrice = localStorage.getItem("quantity-price");
  var modalImage = localStorage.getItem("img");
  var modalQuantity = localStorage.getItem("quantity");
  var modalDescription = localStorage.getItem("description");
  var modalDiet = localStorage.getItem("diet");

  let formData = {};
  formData.id = modalId;
  formData.title = modalTitle;
  formData.price = modalPrice;
  formData.img = modalImage;
  formData.quantityPrice = modalQuantityPrice;
  formData.quantity = modalQuantity;
  formData.description = modalDescription;
  formData.diet = modalDiet;

  const itemIndexInBasket = formDataArry.findIndex(
    (basketEntry) => basketEntry.id === modalId
  );
  if (itemIndexInBasket !== -1) {
    formDataArry[itemIndexInBasket].quantity++;
    formDataArry[itemIndexInBasket].quantityPrice =
      parseInt(formDataArry[itemIndexInBasket].quantityPrice) +
      parseInt(formDataArry[itemIndexInBasket].price);
  } else {
    if (formData !== undefined) {
      formDataArry.push(formData);
    } else {
      null;
    }
  }

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
  //var input = document.querySelector(".quantity");
  //input.value = 1;
  closeFoodBoxesModal();
  // openSidebar();
  // updateSidebarCart();
}

//stäng modalen
function closeFoodBoxesModal() {
  setTimeout(() => {
    var myModal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById("modal"),
      {
        keyboard: false,
      }
    );
    myModal.hide();
  }, 100);
}

let id = "";

//Display items in the cart
const displayNewCart = () => {
  // const cartSidebar = document.getElementById("cartSidebar");
  const tableHead = document.getElementById("table_head");
  const summaryHead = document.getElementById("summary_head");
  // if (cartSidebar) {
  //   cartSidebar.classList.add("open");
  // } else {
  //   console.error("Cart sidebar element not found");
  // }

  if (cartItem !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry === null) {
      tableHead.classList.remove("block");
      tableHead.classList.add("hide");
      summaryHead.classList.remove("block");
      summaryHead.classList.add("hide");
      cartItem.insertAdjacentHTML(
        "afterend",
        `
        <div class="single_team_text">
        <h3 style="padding: 20px; text-align: center">
          Din varukorg är tom
        </h3>
          </div>`
      );
    } else {
      tableHead.classList.remove("hide");
      tableHead.classList.add("block");
      summaryHead.classList.remove("hide");
      summaryHead.classList.add("block");
      const htmlString = formDataArry
        .map((item) => {
          let value = "";
          id = item.id;
          let quantity;
          description = item.title;
          if (item.quantity == null) {
            quantity = localStorage.getItem("quantity");
          } else {
            quantity = item.quantity;
          }
          //  item(s) used: item.img / item.id / item.title / item.price / item.quantityPrice / item.id / quantity
          return (
            `
<section class="col mb-4 d-flex flex-row" style="border-bottom: 1px solid #CED3D2; padding-bottom:40px;" id=` +
            item.id +
            `>
    <div class="imgContainer">
      <img id="` +
            item.id +
            `" src="` +
            item.img +
            `" alt="bild på maträtt"
      class="pro_img cartPayDeliver cropImage"/>
    </div>

      <div class="cartDetailContain d-flex flex-column">

      <div class="d-flex flex-row mobile_cart_items">
          <h5 id="" style="flex-direction: row; display: flex;" class="">` +
            item.title +
            `
            <div style="padding: 10px; margin-top: -17px;" class="d-flex">
             <img class="img-fluid diet_img" src="` +
            item.diet +
            `"/>
            </div>
          </h5>
          <h5 style="cursor: pointer;" onclick="removeItem(` +
            item.id +
            `)" class="ms-auto me-4 mobile_remove">Ta bort <i id="ta-bort-x" style="transform: rotate(45deg); margin-bottom: 20px;" class="fas fa-plus"></i></h5>
      </div>

        <p class="food-description" style="width: 400px; max-height:50px; overflow-y:scroll;">
            ${item.description}
        </p>

        <div class="pro_select d-flex flex-direction-row" style="width: 100%;">

           <div class="quentity_btn">
              <button class="decrease">
              <i style="font-size: 12px; line-height: 3;" class="fas fa-minus"></i>
              </button>
              <input class="quantity" type="text" value=` +
            quantity +
            `>
              <button class="increase">
              <i id="plus-cart" style="font-size: 12px; line-height: 3;" class="fas fa-plus"></i>
              </button>
           </div>

            <div class="pro_icon d-flex">
                  <button class="mx-3" onclick="removeItem(` +
            item.id +
            `)" href="#"><i class="fas fa-trash-alt" style="font-size: 17px; color:#FF6633; margin-right: 10px; margin-top: 50px;"></i>
                </button>
            </div>

            <div id="final-price" class="d-flex flex-row align-items-center ms-auto me-4">
                <h6 class="quantity_price currency mb_0">` +
            item.quantityPrice +
            `
                </h6>
                <h6 class="currency mb_0">kr</h6>
            </div>

          </div>

        </div>
</div>
</section>

            `

            //   `
            // <tr id= "` +
            //   item.id +
            //   `">
            // <td data-label="Bild" class="pro_img">
            //               <img
            //                 src="` +
            //   item.img +
            //   `"
            //                 alt="rätt-bild"
            //                 class="img-fluid w-100"
            //               />
            //             </td>

            //             <td data-label="Detaljer" class="pro_name">
            //               <a href="#">` +
            //   item.title?.replace(/'/g, "") +
            //   `</a>
            //             </td>
            //             <td data-label="Pris" class="pro_status">
            //               <h6>` +
            //   item.price +
            //   `kr</h6>
            //             </td>

            //             <td data-label="Kvantitet" class="pro_select">
            //             <div class="quentity_btn">
            //             <button class="decrease">
            //             <i class="fa fa-minus"></i2>
            //           </button>
            //           <input class="quantity" type="text" value=` +
            //   quantity +
            //   `>
            //           <button class="increase">
            //             <i class="fa fa-plus"></i>
            //           </button>
            //         </div>
            //             </td>

            //             <td data-label="Total" class="pro_tk">
            //             <div class="quentity_btn">
            //               <h6 class="quantity_price">` +
            //   item.quantityPrice +
            //   `</h6>
            //             <h6 class="currency mb_0">kr</h6>
            //             </div>
            //             </td>

            //             <td data-label="Ta bort" class="pro_icon">
            //               <button onclick="removeItem(` +
            //   item.id +
            //   `)" href="#"><i class="fas fa-trash-alt"></i></button>
            //             </td>
            //             </tr>
            //             `
          );
        })
        .join("");
      cartItem.innerHTML = htmlString;
      return id;
    }
  }
};

let itemDescrip = document.querySelectorAll(".food-description");
let foodDescrip = document.querySelectorAll(".description");
function truncateDescrip(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  }
  return str;
}

setTimeout(() => {
  let itemDescrip = document.querySelectorAll(".food-description");
  if (itemDescrip) {
    itemDescrip.forEach((item) => {
      let fullDescrip = item.textContent;
      let text = item.textContent;
      item.textContent = truncateDescrip(text, 60);
    });
  } else {
    console.error("not available yet");
  }
}, 100);

///////////// enable tooltips (bootstrap) ///////////
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

//Display cost summary
const displaySummary = () => {
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  console.log(formDataArry);
  summary.insertAdjacentHTML(
    "afterend",
    `
      <div>
      <p class="mb-1" style="padding:10px; background:lightgrey;">Frakt <span></span></p>
      <p style="padding:10px; background:lightgrey; class="quantity_price">Totalt kostnad inkl.moms <span></span></p>
      </div>
      `
  );
  displaySummary();

  // copy
  // const displayNewCart = () => {
  //   const tableHead = document.getElementById("table_head");
  //   if (cartItem !== null) {
  //     formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  //     if (formDataArry === null) {
  //       tableHead.classList.remove("block");
  //       tableHead.classList.add("hide");
  //       cartItem.insertAdjacentHTML(
  //         "afterend",
  //         `<h4 class="single_team_text" style="padding: 20px; text-align: center">
  //           Din varukorg är tom
  //         </h4>`
  //       );
  //     } else {
  //       tableHead.classList.remove("hide");
  //       tableHead.classList.add("block");
  //       const htmlString = formDataArry
  //         .map((item) => {
  //           id = item.id;
  //           let quantity;
  //           if (item.quantity == null) {
  //             quantity = localStorage.getItem("quantity");
  //           } else {
  //             quantity = item.quantity;
  //           }
  //           return (
  //             `
  //           <tr id= "` +
  //             item.id +
  //             `">
  //           <td data-label="Bild" class="pro_img">
  //                         <img
  //                           src="` +
  //             item.img +
  //             `"
  //                           alt="rätt-bild"
  //                           class="img-fluid w-100"
  //                         />
  //                       </td>

  //                       <td data-label="Detaljer" class="pro_name">
  //                         <a href="#">` +
  //             item.title?.replace(/'/g, "") +
  //             `</a>
  //                       </td>
  //                       <td data-label="Pris" class="pro_status">
  //                         <h6>` +
  //             item.price +
  //             `kr</h6>
  //                       </td>

  //                       <td data-label="Kvantitet" class="pro_select">
  //                       <div class="quentity_btn">
  //                       <button class="decrease">
  //                       <i class="fa fa-minus"></i>
  //                     </button>
  //                     <input class="quantity" type="text" value=` +
  //             quantity +
  //             `>
  //                     <button class="increase">
  //                       <i class="fa fa-plus"></i>
  //                     </button>
  //                   </div>
  //                       </td>

  //                       <td data-label="Total" class="pro_tk">
  //                       <div class="quentity_btn">
  //                         <h6 class="quantity_price">` +
  //             item.quantityPrice +
  //             `</h6>
  //                       <h6 class="currency mb_0">kr</h6>
  //                       </div>
  //                       </td>

  //                       <td data-label="Ta bort" class="pro_icon">
  //                         <button onclick="removeItem(` +
  //             item.id +
  //             `)" href="#"><i class="fas fa-trash-alt"></i></button>
  //                       </td>
  //                       </tr>`
  //           );
  //         })
  //         .join("");
  //       cartItem.innerHTML = htmlString;
  //       return id;
  //     }
  //   }
  // };
};

displayNewCart();
totalSum();
totalQuantity();

/////////////////////////////////
///////// Dashboard functionality start ///////////
///////////////////////////////

// function callUsers() {
//   fetch("https://localhost:7216/users/9")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// }
// callUsers();

if (document.getElementById("dashboard_aside")) {
  document.querySelectorAll(".dashActive").forEach((link) => {
    link.addEventListener("click", function (ev) {
      ev.preventDefault();
      document
        .querySelectorAll(".dashActive")
        .forEach((link) => link.classList.remove("activeLink"));
      this.classList.add("activeLink");
    });
  });
}

function unlockForms(btn) {
  const dashForm = btn.parentElement.nextElementSibling.closest(".dash_forms");
  const listInputs = dashForm.querySelectorAll("input");
  listInputs.forEach((input) => {
    input.removeAttribute("disabled");
  });
  dashForm.querySelector(".dashboard_contact_btns").style.display = "block";
}

function formCancelEdit(btn) {
  const dashForm = btn.parentElement.closest(".dash_forms");
  const listInputs = dashForm.querySelectorAll("input");
  listInputs.forEach((input) => {
    input.setAttribute("disabled", "");
  });
  dashForm.querySelector(".dashboard_contact_btns").style.display = "none";
}

function logOut() {
  localStorage.removeItem("AuthToken");
  window.location.href = "sign_up.html";
}

function dash_myProfile() {
  async function getUser() {
    try {
      //const response = await fetch(`https://localhost:7216/email/email`);
      const email = localStorage.getItem("email");
      const response = await fetch(`https://${API_KEY}/users/email/${email}`);
      const data = await response.json();
      console.log(data);

      document.getElementById("fname").value = data.firstName;
      document.getElementById("lname").value = data.lastName;
      document.getElementById("email").value = data.email;
      document.getElementById("country").value = data.city;
      document.getElementById("phone").value = data.phoneNumber;
      document.getElementById("orgNumb").value = data.organizationNumber;
      document.getElementById("postal").value = data.postalCode;
      document.getElementById("invoice").value = data.adress;
    } catch (error) {
      console.error("Could not fetch user " + error);
    }
  }
  getUser();

  const myProfile = document.getElementById("contain_user_content");
  const dashAside = document.getElementById("dashboard_aside");
  let linkProfile = document.getElementById("#dash_profile");

  if (myProfile) {
    myProfile.remove();
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  if (document.getElementById("selectPage")) {
    document
      .getElementById("selectPage")
      .addEventListener("change", function () {
        const selectedVal = this.value;

        switch (selectedVal) {
          case "index.html":
            window.location.href = selectedVal;
            break;
          case "2":
            dash_myProfile();
            break;
          case "3":
            dash_myOrders();
            break;
          case "4":
            dash_mySubs();
            break;
          case "5":
            dash_myDeals();
            break;
          case "6":
            dash_myNotifications();
            break;
          default:
            break;
        }
      });
  }

  const htmlString = `
  <section
  id="contain_user_content"
  class="flex-grow-1 wow fadeInUp"
  style="width: 200px; height: fit-content"
  >
  <section class="p-4">
  <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><span class="goBack"><i class="fas fa-arrow-left"></i>Tillbaka</span></p>
          <h2>Min Profil</h2>

          <section id="profilePage" class="dashboard_contact">
            <div class="d-flex" id="title_icon">
              <h3>Kontaktinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="fname">Förnamn</label>
                  <input
                    disabled
                    id="fname"
                    type="text"
                    placeholder="Ange ditt förnamn"
                  />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="lname">Efternamn</label>
                  <input
                    disabled
                    id="lname"
                    type="text"
                    placeholder="Ange ditt efternamn"
                  />
                </div>
              </div>
              <div class="dash_inputs">
                <label for="email">Email</label>
                <input
                  disabled
                  type="text"
                  id="email"
                  placeholder="Ange din email"
                />
              </div>
              <div class="dash_inputs">
                <label for="pass">Lösenord</label>
                <input
                  disabled
                  type="password"
                  id="pass"
                  placeholder="Ange lösenord"
                />
              </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="phone">Telefonnumer</label>
                  <input
                    disabled
                    id="phone"
                    type="number"
                    placeholder="0712345678"
                  />
                </div>
              </div>
              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary" type="button" onclick="updateProfile()">
                  Spara Ändringar
                </button>
              </div>
            </form>
          </section>

          <section class="dashboard_contact" id="företag">
            <div class="d-flex" id="title_icon">
              <h3>Företagsinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="compName">Företagsnamn</label>
                  <input disabled type="text" name="" id="compName" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="orgNumb">Organisationsnummer</label>
                  <input disabled type="text" name="" id="orgNumb" />
                </div>
              </div>

              <div class="dash_inputs">
                <label for="invoice">Fakturering adress</label>
                <input disabled type="text" name="" id="invoice" />
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="postal">Postnumer</label>
                  <input disabled type="text" name="" id="postal" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="region">Ort</label>
                  <input disabled type="text" name="" id="region" />
                </div>
              </div>

              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
          </section>

          <section class="dashboard_contact" id="leverans">
            <div class="d-flex" id="title_icon">
              <h3>Leveransinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Förnamn</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Efternamn</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="dash_inputs">
                <label for="">Gatuadress</label>
                <input disabled type="text" />
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Postnummer</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Ort</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Portkod/Porttelefon</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Våningsplan</label>
                  <input disabled type="text" />
                </div>
              </div>

                <div id="doorSwitch" class="form-check form-switch d-flex align-items-end">
                <input
                disabled
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  class="form-check-label ms-2"
                  for="flexSwitchCheckDefault"
                  >Lämna utanför dörren</label
                >
                </div>

              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
            </section>

            <div class="d-flex" style="gap:10px; margin-top: 25px;">
            <button data-bs-toggle="modal" data-bs-target="#deleteUser" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); color:black; background: white; border-color:black;" type="button" class="btn btn-primary">Radera Konto</button>
            <button data-bs-toggle="modal" data-bs-target="#logOutUser" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); color:white; background:black; border-color:black;" type="button" class="btn btn-primary">Logga Ut</button>
            </div>


            <div class="modal fade" id="deleteUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom:none;">
        <h4 class="modal-title text-center" id="exampleModalLabel">Är du säker på att du vill radera ditt konto?</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Din information kommer att raderas, så du kan inte återaktivera kontot igen om du fortsätter.</p>
      </div>
      <div class="modal-footer mx-auto" style="border-top:none;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button type="button" class="btn btn-primary">Ja, radera kontot</button>
      </div>
    </div>
  </div>
</div>

            <div class="modal fade" id="logOutUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom:none;">
        <h4 class="modal-title text-center" id="exampleModalLabel">Är du säker på att du vill logga ut?</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer mx-auto" style="border-top:none;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button onclick="logOut()" type="button" class="btn btn-primary">Ja, logga ut</button>
      </div>
    </div>
  </div>
</div>


        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
  applyGoBack();
}

if (document.getElementById("dashboard_aside")) {
  dash_myProfile();
}

function modal() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
             <div class="modal fade" id="logOutUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom:none;">
        <h4 class="modal-title text-center" id="exampleModalLabel">Är du säker på att du vill logga ut?</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer mx-auto" style="border-top:none;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button onclick="logOut()" type="button" class="btn btn-primary">Ja, logga ut</button>
      </div>
    </div>
  </div>
</div>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
  applyGoBack();
}

function dash_myOrders() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
  <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><span class="goBack"><i class="fas fa-arrow-left"></i>Tillbaka</span></p>
          <h2>Mina beställningar</h2>

          <p style="margin-top: 30px; font-weight: 600">
            Kommande Beställningar
          </p>
          <section class="dashboard_orders">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <i
                onclick="dashEditOrder(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
              <p style="color: var(--Dark-grey, #595959)">
                du kan aboka din leverans senast den X/9 kl: xx:xx. <span data-bs-toggle="modal" data-bs-target="#cancelOrder" style="text-decoration: underline; cursor:pointer;">Avboka här.</span>
              </p>
            </div>
          </section>

          <p style="margin-top: 30px; font-weight: 600">
            Tidigare Beställningar
          </p>
          <section class="dashboard_orders_previous">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
              <button
                style="color: white; background-color: #dd3902"
                type="button"
                class="btn mt-3"
              >
                Beställ igen
              </button>
            </div>
          </section>
        </section>
      </section>


      <div class="modal fade" id="cancelOrder" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header"  style="border-bottom: none">
        <h3 class="modal-title" id="exampleModalLabel">Är du säker på att du vill avboka denna leverans?</h3>
      </div>

      <div class="modal-body">

                <section class="dashboard_orders">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
            </div>
          </section>

      </div>

      <div class="modal-footer mx-auto" style="border-top: none">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button type="button" class="btn btn-primary">Ja, avboka</button>
      </div>
    </div>
  </div>
</div>


  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
  applyGoBack();
}

function dash_mySubs() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
  <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><span class="goBack"><i class="fas fa-arrow-left"></i>Tillbaka</span></p>
          <h2>Mina beställningar</h2>

          <section class="dashboard_orders">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <h3 class="ms-auto align-self-center" style="color: #0eb116">
                Aktiv
              </h3>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
            </div>
            <div class="d-flex flex-row" style="gap: 10px">
              <p style="color: #dd3902">Avsluta Prenumeration</p>
              <p style="color: #dd3902">Pausa Prenumeration</p>
            </div>
          </section>

          <section style="margin-top: 20px" class="dashboard_sub_delivery">
            <div class="d-flex">
              <h5>Leveransfönster</h5>
              <i
                onclick="dashEditDelivTime(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <p>Dag - kl: xx:xx</p>
          </section>

          <section style="margin-top: 20px" class="dashboard_orders">
            <div class="d-flex">
              <h5>Antal Portioner Per Leverans</h5>
            </div>

            <div
              class="d-flex flex-row justify-content-center"
              style="gap: 10px"
            >
              <div class="col-3">
                <div class="box box4" data-value="10">
                  <img
                    class="green-check-kost2"
                    src="images/Eo_circle_green_checkmark.svg.webp"
                    alt=""
                  />
                  <p style="font-weight: 600">10</p>
                </div>
              </div>

              <div class="col-3">
                <div class="box box4" data-value="15">
                  <img
                    class="green-check-kost2"
                    src="images/Eo_circle_green_checkmark.svg.webp"
                    alt=""
                  />
                  <p style="font-weight: 600">15</p>
                </div>
              </div>

              <div class="col-3">
                <div class="box box4" data-value="20">
                  <img
                    class="green-check-kost2"
                    src="images/Eo_circle_green_checkmark.svg.webp"
                    alt=""
                  />
                  <p style="font-weight: 600">20</p>
                </div>
              </div>
            </div>

            <div
              style="max-width: 388px; display: flex; margin: auto"
              class="box1 large-box"
            >
              <div class="row">
                <div class="col-7 text">
                  <h5 style="text-align: left; margin-left: 10px">
                    Välja ett eget antal
                  </h5>
                  <h6
                    style="
                      width: 250px;
                      text-align: left;
                      margin-left: 10px;
                      font-size: 15px;
                    "
                  >
                    Minst 10 matlådor per beställning
                  </h6>
                </div>
                <div
                  style="
                    margin-left: 40px;
                    border-radius: 4px;
                    border: 1px solid #f63;
                    background: #fff;
                    width: 110px;
                    justify-content: center;
                  "
                  class="col-3 quantity-btn d-flex align-items-center justify-content-end"
                >
                  <button
                    class="btn btn-light"
                    style="
                      background-color: white;
                      border-color: white;
                      border-right: 1 px solid #f63 !important;
                    "
                  >
                    -
                  </button>
                  <span class="mx-2">10</span>
                  <button
                    class="btn btn-light"
                    style="
                      background-color: white;
                      border-color: white;
                      border-left: 1 px solid #f63 !important;
                    "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="dashboard_contact" id="leverans">
            <div class="d-flex" id="title_icon">
              <h3>Leveransinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px; color: #fc5633"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Förnamn</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Efternamn</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="dash_inputs">
                <label for="">Gatuadress</label>
                <input disabled type="text" />
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Postnummer</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Ort</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Portkod/Porttelefon</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Våningsplan</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div id="doorSwitch" class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  class="form-check-label ms-2"
                  for="flexSwitchCheckDefault"
                  >Lämna utanför dörren</label
                >
              </div>

              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
  applyGoBack();
}

function dash_myDeals() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
        <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><span class="goBack"><i class="fas fa-arrow-left"></i>Tillbaka</span></p>
          <h2>Erbjudanden & Presentkort</h2>

          <div class="mt-5">
            <h3>Mina Erbjudande</h3>
            <p class="mt-3 mb-3">
              Du kan inte kombinera flera rabatter samtidigt
            </p>

            <div class="coupon_container d-flex flex-row" style="gap: 20px">
              <section class="dashboard_deals">
                <div class="d-flex flex-column" style="gap: 10px">
                  <h4 style="font-weight: bold">
                    10% på din första kasse när du prenumererar!
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button
                    disabled
                    type="button"
                    class="btn btn-secondary w-60 mx-auto"
                  >
                    Rabatt Aktiverad
                  </button>
                </div>
              </section>
              <section class="dashboard_deals">
                <div class="d-flex flex-column" style="gap: 10px">
                  <h4 style="font-weight: bold">
                    10% på din första kasse när du prenumererar!
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button type="button" class="btn btn-secondary w-60 mx-auto">
                    Aktivera Rabatt
                  </button>
                </div>
              </section>
            </div>
          </div>

          <div class="mt-3">
            <p style="color: #252627">Addera en rabattkod</p>
            <div id="rabatt-kod" class="d-flex">
              <input
                id="rabatt-input"
                class="rounded-left"
                type="text"
                style="width: 20%"
              />
              <button type="button" class="btn btn-dark rounded-0">
                Aktivera
              </button>
            </div>
          </div>

          <div class="mt-5">
            <h3>Kreditvärde</h3>
            <section style="margin-top: 20px" class="dashboard_deal_invite">
              <div class="d-flex flex-column" style="gap: 15px">
                <h5>Bjud in en vän och få rabatt på nästa matkasse!</h5>
                <p>Bjud in en vän och samla kreditvärde.</p>
                <div class="dash_inputs">
                  <label for="fname">Dins väns mejladress</label>
                  <div class="d-flex flex-row" style="gap: 20px">
                    <input
                      class="w-75"
                      id="fname"
                      type="email"
                      placeholder="Ange din väns mejladress"
                    />
                    <button type="submit" class="btn btn-primary w-50">
                      Skicka Inbjudan
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section style="margin-top: 20px" class="dashboard_deal_invite">
            <h5>Skickade inbjudningar</h5>
            <div class="d-flex flex-column" style="gap: 15px">
              <ul>
                <li>mejladress vän 1</li>
                <li>mejladress vän 2</li>
                <li>mejladress vän 3</li>
              </ul>
            </div>
          </section>

          <div class="mt-5">
            <h3>Mitt Presentkort</h3>
            <section style="margin-top: 20px" class="dashboard_deal_invite">
              <h5>Löst in ett presentkort</h5>
              <div class="mt-3">
                <p style="color: #252627">Ange presentkortets ID.</p>
                <div id="rabatt-kod" class="d-flex">
                  <input
                    id="rabatt-input"
                    class="rounded-left"
                    type="text"
                    style="width: 20%"
                  />
                  <button type="button" class="btn btn-dark rounded-0">
                    Aktivera
                  </button>
                </div>
              </div>
            </section>

            <section
              style="margin-top: 20px"
              class="dashboard_deal_invite d-flex"
              style="gap: 15px"
            >

            <div class="d-flex">
            <h5>Saldo Presentkort</h5>
            <h5 class="ms-auto" style="color: #0eb116">Aktiv</h5>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>250:-</p>
            </section>
          </div>

          <div class="mt-5">
            <h3>Ge bort ett presentkort</h3>
            <section
              style="margin-top: 20px"
              class="dashboard_deal_invite d-flex"
              style="gap: 15px"
            >
              <b>Ge bort en smakfull upplevelse</b>
              <p>
                Digitalt presentkort - den perfekta gåvan till någon speciell
              </p>
            </section>
          </div>
        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
  applyGoBack();
}

function dash_myNotifications() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
        <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><span class="goBack"><i class="fas fa-arrow-left"></i>Tillbaka</span></p>
          <h2>Aviseringar</h2>

          <div class="mt-4">
            <b>Preferenser för aviseringar via email</b>

            <section
              class="dashboard_notifications d-flex flex-column mt-3"
              style="gap: 15px"
            >
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Nyhetsbrev och tips från kocken</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Rabatter och erbjudanden</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Feedback på måltider</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Feedback till Yumfoods</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Produktuppdateringar om din prenumeration</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Alla mejl</label
                >
              </div>
            </section>
          </div>
        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
  applyGoBack();
}

function applyGoBack() {
  if (document.querySelector(".goBack")) {
    const backOnePage = document.querySelector(".goBack");
    backOnePage.style.cursor = "pointer";
    backOnePage.addEventListener("click", function () {
      history.back();
      return false;
    });
  }
}
applyGoBack();

function dashEditOrder(btn) {
  const currentOrder = document.querySelector(".dashboard_orders");
  const htlmString = `
  <h3>Redigera Beställning</h3>

    <div class="d-flex flex-row justify-content-center subsTimeEdit" style="gap: 10px; margin-top:20px;">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Veckodag
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Datum #1</a></li>
        <li><a class="dropdown-item" href="#">Datum #2</a></li>
        <li><a class="dropdown-item" href="#">Datum #3</a></li>
        </ul>
        </div>

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Tidspann
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Klocka #1</a></li>
        <li><a class="dropdown-item" href="#">Klocka #2</a></li>
        <li><a class="dropdown-item" href="#">Klocka #3</a></li>
        </ul>
        </div>

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Kosttyp
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">kost #1</a></li>
        <li><a class="dropdown-item" href="#">kost #2</a></li>
        <li><a class="dropdown-item" href="#">kost #3</a></li>
        </ul>
        </div>

        </div>

        <div style="
        max-width: 180px;
        background: white;
        padding: 8px;
        margin: auto;
        border-radius: 10px;
        margin-top: 15px;
        ">
          <div class="d-flex flex-column">
            <div class="text">
              <h5 style="text-align: center;">
                Antal portioner
              </h5>
            </div>
            <div
              style="
                border-radius: 4px;
                border: 1px solid #f63;
                background: #fff;
                width: 110px;
                justify-content: center;
                margin:auto;
              "
              class="col-3 quantity-btn d-flex align-items-center justify-content-end"
            >
              <button
                class="btn btn-light"
                style="
                  background-color: white;
                  border-color: white;
                  border-right: 1 px solid #f63 !important;
                "
              >
                -
              </button>
              <span class="mx-2">10</span>
              <button
                class="btn btn-light"
                style="
                  background-color: white;
                  border-color: white;
                  border-left: 1 px solid #f63 !important;
                "
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-center" style="gap:10px; margin-top:15px;">
        <button onclick="dashCancelEdit()" type="button" class="btn btn-primary">Avbryt</button>
        <button onclick="dashConfirmEdit()" type="button" class="btn btn-primary">Spara Ändringar</button>
        </div>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashEditDelivTime(btn) {
  const currentOrder = document.querySelector(".dashboard_sub_delivery");
  const htlmString = `
  <h5>Redigera Beställning</h5>

    <div class="d-flex flex-row justify-content-center subsTimeEdit" style="gap: 10px; margin-top:20px;">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Veckodag
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Datum #1</a></li>
        <li><a class="dropdown-item" href="#">Datum #2</a></li>
        <li><a class="dropdown-item" href="#">Datum #3</a></li>
        </ul>
        </div>

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Tidspann
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Klocka #1</a></li>
        <li><a class="dropdown-item" href="#">Klocka #2</a></li>
        <li><a class="dropdown-item" href="#">Klocka #3</a></li>
        </ul>
        </div>

        </div>

        <div class="d-flex flex-row justify-content-center" style="gap:10px; margin-top:15px;">
        <button onclick="dashCancelEditSub()" type="button" class="btn btn-primary">Avbryt</button>
        <button onclick="dashConfirmEditSub()" type="button" class="btn btn-primary">Spara Ändringar</button>
        </div>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashCancelEdit() {
  const currentOrder = document.querySelector(".dashboard_orders");
  const htlmString = `
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <i
                onclick="dashEditOrder(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
              <p style="color: var(--Dark-grey, #595959)">
                du kan aboka din leverans senast den X/9 kl: xx:xx. Avboka här
              </p>
            </div>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashConfirmEdit() {}

function dashCancelEditSub() {
  const currentOrder = document.querySelector(".dashboard_sub_delivery");
  const htlmString = `
            <div class="d-flex">
              <h5>Leveransfönster</h5>
              <i
                onclick="dashEditDelivTime(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <p>Dag - kl: xx:xx</p>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashConfirmEditSub() {}

/////////////////////////////////
///////// Dashboard functionality end ///////////
///////////////////////////////

//Bind the buttons handling the increment and decrement buttons to a function and run it once the DOM loads. When the DOM dynamically changes (e.g. insertAdjacentHTML, removeItem()), the intitally attached addEventListeners are not there anymore and need to be reattached both on the DOM and for the "removeItem" function.
function cartBtns() {
  const increase = document.querySelectorAll(".increase");
  const decrease = document.querySelectorAll(".decrease");

  increase.forEach((btn) => {
    btn.addEventListener("click", increment);
  });

  decrease.forEach((btn) => {
    btn.addEventListener("click", decrement);
  });
}
cartBtns();

//On page load, display the first open accordion using DOMContentLoaded event
/*
let customerHandling = document.getElementById("customerHandling");
if (customerHandling !== null) {
  document.addEventListener("DOMContentLoaded", () => {
    const navHeader = document.querySelector(".main_menu").offsetHeight;
    const header = document.getElementById("headingOne");
    const fixedHeader = header.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: fixedHeader - navHeader - 50,
      behavior: "smooth",
    });
  });
}
*/

//Grab the "jump to next accordion" buttons
const accordOne = document.querySelector(".nextAccord1");
const accordTwo = document.querySelector(".nextAccord2");

// Two functions with scrollTo() method for both the second and third accordions. Since the navbar is in the way and obstructing the view, we need to know its height with offsetHeight, the size and relative position of the accordion header with getBoundingClientRect() and with the Window object scroll to the appropriate accordion header with the "next" buttons. The setTimeout is a temporary fix and might be due to the animations of opening and closing the accordion having to be played out to its end before it starts scrolling, mutationObserver could be an alternate solution.
function nextAccord1() {
  const navHeader = document.querySelector(".main_menu").offsetHeight;
  const header = document.querySelector("#headingTwo");
  const acc = document.querySelector(".accordOne");
  const nextAccord = document.querySelector(".accordTwo");
  acc.classList.remove("show");
  nextAccord.classList.add("show");

  setTimeout(() => {
    const fixedHeader = header.getBoundingClientRect().top + window.scrollY;
    console.log(fixedHeader);
    window.scrollTo({
      top: fixedHeader - navHeader - 100,
      behavior: "smooth",
    });
  }, 230);

  // header.scrollIntoView({ behavior: "smooth", block: "start" });

  // if (nextAccord.classList.contains("show")) {
  //   header.scrollIntoView({ behavior: "smooth", block: "start" });
  // } else {
  //   console.log("no can do");
  // }

  // nextAccord.addEventListener("transitionend", function transitionEnd() {
  //   nextAccord.removeEventListener("transitionend", transitionEnd);
  //   header.scrollIntoView({ behavior: "smooth", block: "start" });
  // });
}

function nextAccord2() {
  // Subject to change
  // const navHeader = document.querySelector(".main_menu").offsetHeight;
  // const header = document.querySelector("#headingThree");
  // const acc = document.querySelector(".accordTwo");
  // const nextAccord = document.querySelector(".accordThree");
  // acc.classList.remove("show");
  // nextAccord.classList.add("show");
  // setTimeout(() => {
  //   const fixedHeader = header.getBoundingClientRect().top + window.scrollY;
  //   console.log(fixedHeader);
  //   window.scrollTo({
  //     top: fixedHeader - navHeader - 120,
  //     behavior: "smooth",
  //   });
  // }, 250);
}
// Display the upcoming 2 weeks while excluding the weekends (saturdays & sundays) while initially jumping ahead 3 days, in total 10 days.
// 14 days in a week, but adding 3 results in 17
// Grab the dates, format the display for dates using the options object and inserting that to "toLocaleString"
// with a for loop, initialize "i" with 3 representing the 3 days ahead, check the current day with "checkDay",
// with an if statement, as long as the "checkDay" is not on a weekend, push the formatted date into an empty array
// and finally increment the dates with '1' for the next loop with setDate

const dates = new Date();
const options = {
  day: "numeric",
  month: "numeric",
  weekday: "long",
  year: "numeric",
};
const twoWeeks = 17;

let threeDaysAhead = [];
dates.setDate(dates.getDate() + 3);

for (let i = 3; i < twoWeeks; i++) {
  const checkDay = dates.getDay();
  if (checkDay !== 0 && checkDay !== 6) {
    const sweDate = dates.toLocaleString("sv-SE", options);
    threeDaysAhead.push(sweDate.toUpperCase());
  }
  dates.setDate(dates.getDate() + 1);
}

console.log("Available dates: " + threeDaysAhead);

const dateStrings = threeDaysAhead
  .map((day) => {
    const [weekday, days, month] = day.split(" ");
    return `

        <div class="swiper-slide date">
            <div id="date" class="date-box box1 text-center date">
              <div class="day">${weekday}</div>
              <div class="date"><span id="deliveryDateSpan" style="margin-right: 5px;">${days}</span></div>
            </div>
        </div>

`;
  })
  .join("");

const deliveryDates = document.getElementById("deliverDates");
if (deliveryDates !== null) {
  deliveryDates.innerHTML = dateStrings;
}

const theBox = document.querySelectorAll(".box1");
let selectedDeliveryDate = null;
theBox.forEach((btn) => {
  btn.addEventListener("click", function () {
    theBox.forEach((b) => b.classList.remove("box-selected"));
    btn.classList.add("box-selected");
    const dayText = btn.querySelector(".day");
    const dateText = btn.querySelector(".date");
    console.log(dayText.textContent + " " + dateText.textContent);
  });
});

const timeBox = document.querySelectorAll(".tid-box");

timeBox.forEach((btn) => {
  btn.addEventListener("click", function () {
    timeBox.forEach((b) => b.classList.remove("tid-box-selected"));
    btn.classList.add("tid-box-selected");
    const deliverClock = btn.childNodes[1].textContent;
    const deliverShipping = btn.childNodes[3].textContent;
    console.log("kl:" + deliverClock + " / " + "frakt:" + deliverShipping);
  });
});

// Format the delivery date to send to backend
function formatDeliveryDate(dateString) {
  const split = dateString.split(" ");
  const days = split[1].replace(/[^\d]/g, "");
  const month = split[2];
  const year = new Date().getFullYear();

  const formatted = new Date(`${year}-${monthMonth}-${day}`);
  //const formattedDate = new Date(year, month, days);
  return formatted.toISOString();
}

// theBox.addEventListener('click', function() {
// theBox.classList.toggle("box-selected");
// })

// Arrow buttons, add a click function to move it left and right whilst checking the clip-path to dynamically
// move it left and right depending where the element is being moved in order to ensure only the middle is visible

////////////////////////////////////////////////////////////////////////////////
///////////////gamla lösning start /////////////////////////////////////////////

//const clipPaths = [
//  "inset(-15.33% -7.61% -24.62% -2.53%)",
//  "inset(-15.33% -113.01% -24.62% 105.95%)",
//  "inset(-15.33% -220.47% -24.62% 212.38%)",
//  "inset(-15.33% -326.13% -24.62% 319.84%)",
//];

//let xAxis = 0;
//let rightClicks = 0;
//let maxClicks = 3;
//let itemWidth = 415;

//const leftArrow = document.querySelector("#leftArrow");
//const rightArrow = document.querySelector("#rightArrow");
//if (leftArrow !== null) {
//  leftArrow.setAttribute("disabled", true);
//}

//function updateClipPath() {
//  const clipValue = clipPaths[rightClicks];
//  if (deliveryDates !== null) {
//    document.querySelector("#deliverDates").style.clipPath = clipValue;
//  }
//}
//updateClipPath();

//function moveLeft() {
//  if (rightClicks > 0) {
//    rightClicks--;
//    xAxis += itemWidth;
//    document.querySelector(
//      "#deliverDates"
//    ).style.transform = `translateX(${xAxis}px)`;
//    updateClipPath();
//    document.querySelector("#rightArrow").removeAttribute("disabled");
//    if (rightClicks === 0) {
//      document.querySelector("#leftArrow").setAttribute("disabled", true);
//    }
//  }
//}

//function moveRight() {
//  if (rightClicks < maxClicks) {
//    xAxis -= itemWidth;
//    rightClicks++;
//    document.querySelector(
//      "#deliverDates"
//    ).style.transform = `translateX(${xAxis}px)`;
//    updateClipPath();

//    document.querySelector("#leftArrow").removeAttribute("disabled");
//    console.log(rightClicks);
//  }

//  if (rightClicks === maxClicks) {
//    document.querySelector("#rightArrow").setAttribute("disabled", true);
//  }
//}
//if (rightArrow !== null || leftArrow !== null) {
//  document.querySelector("#rightArrow").addEventListener("click", moveRight);
//  document.querySelector("#leftArrow").addEventListener("click", moveLeft);
//}

/////////////////////////// Gamla lösning End//////////////////////////////
//////////////////////////////////////////////////////////////////////////

// <div>
//     <button style="padding:5px; width:100px;">
//     <div>${weekday}</div>
//     <div>${days} ${month}</div>
//     </button>
// </div>

{
  /* <div class="d-flex calendar justify-content-center">
  <div class="date-box box1 text-center mx-2">
    <div class="day">Måndag</div>
    <div class="date">2 Sep</div>
  </div>
  <div class="date-box text-center mx-2">
    <div class="day">Tisdag</div>
    <div class="date">3 Sep</div>
  </div>
  <div class="date-box box3 text-center mx-2">
    <div class="day">Onsdag</div>
    <div class="date">4 Sep</div>
  </div>
  </div>  */
}

// ----------------------------------

//Increment function on the + button for quantity
function increment() {
  if (localStorage.getItem("quantity") !== null) {
    const inp = this.previousElementSibling;
    if (inp.value < 20) inp.value = Number(inp.value) + 1;
    if (inp.value > 0) {
      inp.previousElementSibling.removeAttribute("disabled");
    }
    let id = localStorage.getItem("id");
    let price = localStorage.getItem("price");
    price = parseInt(price);
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        this.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.previousElementSibling;
      console.log(input);
    }
    let inputQuantity = inp.value;
    let increaseQuantityPrice = inp.value * price;

    if (cartItem !== null) {
      let tableId = this.closest("section").id;

      let itemIndex = formDataArry.filter((el) => el.id == tableId);
      if (itemIndex) {
        price = itemIndex[0].price;
        increaseQuantityPrice = inp.value * price;
        itemIndex[0].quantityPrice = increaseQuantityPrice;
        modalQuantityPrice.innerHTML = increaseQuantityPrice;
        itemIndex[0].quantity = inputQuantity;
        input.value = inputQuantity;
      }
    } else {
      null;
    }

    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));

    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = increaseQuantityPrice)
    );
    localStorage.setItem("quantity", (input.textContent = inputQuantity));
  } else {
    const inp = this.previousElementSibling;
    if (inp.value < 20) inp.value = Number(inp.value) + 1;
    if (inp.value > 0) {
      inp.previousElementSibling.removeAttribute("disabled");
    }
    for (i = 0; i < formDataArry.length; i++) {
      price = parseInt(formDataArry[i].price);
      quantityPrice = parseInt(formDataArry[i].quantityPrice);
      quantity = parseInt(formDataArry[i].quantity);
    }
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        this.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.previousElementSibling;
    }
    let inputQuantity = inp.value;

    let tableId = this.closest("section").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      let increaseQuantityPrice = inputQuantity * itemIndex[0].price;
      itemIndex[0].quantityPrice = increaseQuantityPrice;
      modalQuantityPrice.innerHTML = increaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }
    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  }
  totalSum();
  updateFields();
  totalQuantity();
}

//Decrement function on the button for quantity
// The "this" keyword might cause problems, we can't alway be certain its pointing to the correct button in the correct page and may cause unintended issues with decrementingh items from the cart
//In order to ensure the button pressed is the one the user really clicked on, instead of just having it look for the closest matching class or id, assign a variable to the event.target along with replacing the "this" keywords since event.target is handling that for us now.
function decrement(event) {
  const decBtn = event.target.closest(".decrease");
  console.log(decBtn);
  if (localStorage.getItem("quantity") !== null) {
    const inp = decBtn.nextElementSibling;
    if (inp.value > 0) {
      inp.value = Number(inp.value) - 1;
      console.log(inp.value);
    }
    if (inp.value <= 0) {
      decBtn.setAttribute("disabled", "disabled");
    }
    let id = localStorage.getItem("id");
    let quantityPrice = localStorage.getItem("quantity-price");
    let price = localStorage.getItem("price");
    quantityPrice = parseInt(quantityPrice);
    price = parseInt(price);
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        decBtn.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;
    let decreaseQuantityPrice = quantityPrice - price;

    if (cartItem !== null) {
      let tableId = decBtn.closest("section").id;

      let itemIndex = formDataArry.filter((el) => el.id == tableId);
      if (itemIndex) {
        decreaseQuantityPrice = itemIndex[0].quantityPrice - itemIndex[0].price;
        itemIndex[0].quantityPrice = decreaseQuantityPrice;
        modalQuantityPrice.innerHTML = decreaseQuantityPrice;
        itemIndex[0].quantity = inputQuantity;
        input.value = inputQuantity;
      } else {
        null;
      }
    }

    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));

    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = decreaseQuantityPrice)
    );
    localStorage.setItem("quantity", (input.textContent = inputQuantity));
  } else {
    const inp = decBtn.nextElementSibling;
    console.log(inp);
    if (inp.value > 0) {
      inp.value = Number(inp.value) - 1;
    }
    if (inp.value <= 0) {
      decBtn.setAttribute("disabled", "disabled");
    }
    for (i = 0; i < formDataArry.length; i++) {
      price = parseInt(formDataArry[i].price);
      quantityPrice = parseInt(formDataArry[i].quantityPrice);
      quantity = parseInt(formDataArry[i].quantity);
    }
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        decBtn.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;

    let tableId = decBtn.closest("section").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      let decreaseQuantityPrice =
        itemIndex[0].quantityPrice - itemIndex[0].price;
      itemIndex[0].quantityPrice = decreaseQuantityPrice;
      console.log(modalQuantityPrice);
      modalQuantityPrice.innerHTML = decreaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }
    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  }
  totalSum();
  updateFields();
  totalQuantity();
}

//Remove item from cart
function removeItem(id) {
  let temp = formDataArry.filter((item) => item.id != id);
  console.log(temp);
  localStorage.setItem("formDataArry", JSON.stringify(temp));
  //set item back into storage
  displayNewCart();
  totalQuantity();
  totalSum();
  updateFields();
  //Reattach addEventListeners
  cartBtns();
  if (temp.length == 0) {
    localStorage.clear();
    displayNewCart();
  }
}

let company_button = document.getElementById("company_button");
let private_button = document.getElementById("private_button");
if (company_button !== null || private_button !== null) {
  company_button.addEventListener("click", showCompanyForm);
  private_button.addEventListener("click", showPrivateForm);
} else {
  null;
}

// Show additional inputs on company form
function showCompanyForm() {
  let contactForm = document.getElementById("company");
  if (contactForm !== null) {
    contactForm.innerHTML = `
    <!--
                <div class="col-xl-12">
                  <div for="company name" class="contact_form_input">
                    <span><i class="fas fa-user"></i></span>
                    <input
                      name="company name"
                      type="text"
                      placeholder="Företagsnamn (bara för företag)"
                    />
                  </div>
                </div>
    -->
                    <div class="form-group d-flex flex-column mb-3">
                      <label class="me-auto" for="company">Företagsnamn *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Företagsnamn"
                      />
                    </div>
    <!--
                <div class="d-flex contact-input">
                <div class="col-xl-6 col-sm-12">
                  <div for="role" class="contact_form_input contact-befattning">
                    <span><i class="fas fa-user"></i></span>
                    <input name="role" type="text" placeholder="Befattning(bara för företag)" />
                  </div>
                </div>
    -->
                    <div class="form-group d-flex flex-column mb-3">
                      <label class="me-auto" for="companyBefatt">Befattning *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Befattning"
                      />
                    </div>
<!--
                <div class="col-xl-6 col-sm-12">
                  <div for="number of employees" class="contact_form_input">
                    <span><i class="fas fa-user"></i></span>
                    <input
                      name="number of employees"
                      type="number"
                      placeholder="Antal anställda(bara för företag)"
                    />
                  </div>
                </div>
-->
                      <div class="form-group d-flex flex-column mb-3">
                      <label class="me-auto" for="company">Antal anställda *</label>
                      <input
                        type="number"
                        name="number of employees"
                        class="form-control"
                        placeholder="Antal anställda"
                      />
                    </div>
                </div>
                  `;
    // company_button.className = "focus_common_btn";
    // private_button.className = "common_btn";
  } else {
    null;
  }
}

//Remove additional inputs on private form
function showPrivateForm() {
  let contactForm = document.getElementById("company");
  if (contactForm !== null) {
    contactForm.innerHTML = "";
    // private_button.className = "focus_common_btn";
    // company_button.className = "common_btn";
  } else {
    null;
  }
}

// // Function to send form to email
const contactForm = document.getElementById("contact-form");
const form = document.getElementById("form");
const result = document.getElementById("result");

if (contactForm !== null) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    form.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Var god vänta</h4>
          </div>`;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          form.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Tack för ditt meddelande. En av våra medarbetare ska
          återkomma till dig snart</h4>
          </div>
          `;
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        form.innerHTML = "Something went wrong!";
      })
      .then(function () {
        contactForm.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
  });
} else {
  null;
}

//popup in start page
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("Postcode")) {
    let deliveryModal = document.getElementById("deliveryModal");
    if (deliveryModal !== null) {
      var myModal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById("deliveryModal"),
        {
          keyboard: false,
        }
      );
      myModal.show();
    }
  }
});
let confirmButton = document.getElementById("confirmButton");
if (confirmButton !== null) {
  confirmButton.addEventListener("click", function () {
    var postcode = document.getElementById("postcodeInput").value;
    if (postcode === "") {
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("wrong-message").style.display = "none";
      document.getElementById("wrong-message2").style.display = "block";
      document.getElementById("no-place").style.display = "none";
    } else if (postcode) {
      document.getElementById("confirmationMessage").style.display = "block";
      document.getElementById("wrong-message").style.display = "none";
      document.getElementById("wrong-message2").style.display = "none";
      document.getElementById("no-place").style.display = "none";
      localStorage.setItem("Postcode", postcode);
      setTimeout(() => {
        var myModal = bootstrap.Modal.getOrCreateInstance(
          document.getElementById("deliveryModal"),
          {
            keyboard: false,
          }
        );
        myModal.hide();
      }, 2000);
    } else {
      document.getElementById("wrong-message").style.display = "block";
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("wrong-message2").style.display = "none";
      document.getElementById("no-place").style.display = "none";
    }
  });
}
let findLocation = document.getElementById("findLocationButton");

if (findLocation !== null) {
  findLocation.addEventListener("click", function () {
    var postcode = document.getElementById("postcodeInput").value;
    if (postcode === "") {
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("wrong-message").style.display = "none";
      document.getElementById("wrong-message2").style.display = "block";
      document.getElementById("no-place").style.display = "none";
    } else if (postcode && postcode.length === 5 && /^[0-9]+$/) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=API_KEY`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "OK") {
            var address = data.results[0].formatted_address;
            localStorage.setItem("address", address);
          } else {
            document.getElementById("no-place").style.display = "block";
            document.getElementById("wrong-message").style.display = "none";
            document.getElementById("confirmationMessage").style.display =
              "none";
            document.getElementById("wrong-message2").style.display = "none";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Ett fel uppstod vid sökningen.");
        });
    } else {
      document.getElementById("wrong-message2").style.display = "none";
      document.getElementById("wrong-message").style.display = "block";
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("no-place").style.display = "none";
    }
  });
}

// Calculate and display total sum in the cart total
function totalSum() {
  let totalPrice = document.getElementById("total");
  let totalShipping = document.getElementById("shipping");
  let shipping = 39;
  if (totalShipping !== null) {
    totalShipping.innerHTML = shipping + "kr";
  }
  let sum = 0;
  if (totalPrice !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry !== null) {
      for (let i = 0; i < formDataArry.length; i++) {
        sum += parseInt(formDataArry[i].quantityPrice);
      }
      sum = sum + shipping;
      totalPrice.innerHTML = sum + "kr";
      localStorage.setItem("sum", sum);
    } else {
      null;
    }
  }
}

//Count quantity and display in the popup cart icon
function totalQuantity() {
  let count = document.getElementById("count");
  let totalQuantity = 0;
  if (count !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry !== null) {
      for (let i = 0; i < formDataArry.length; i++) {
        totalQuantity += parseInt(formDataArry[i].quantity);
      }
      count.innerHTML = totalQuantity;
      localStorage.setItem("totalQuantity", totalQuantity);
      checkCartLength();
    } else {
      count.innerHTML = totalQuantity;
      formDataArry = [];
      checkCartLength();
    }
  }
}

// Update fiels title,quantity,quantiyPrice to send to email
function updateFields() {
  let dishName = document.getElementById("dishName");
  let dishQuantity = document.getElementById("dishQuantity");
  let dishQuantityPrice = document.getElementById("dishQuantityPrice");
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  let mergedTitleArray = [];
  let mergedQuantityArray = [];
  let mergedQuantityPriceArray = [];
  if (formDataArry) {
    for (i = 0; i < formDataArry.length; i++) {
      let titleArray = formDataArry[i].title;
      let quantityArray = formDataArry[i].quantity;
      let quantityPriceArray = formDataArry[i].quantityPrice;
      mergedTitleArray.push(JSON.stringify(titleArray));
      mergedQuantityArray.push(JSON.stringify(quantityArray));
      mergedQuantityPriceArray.push(JSON.stringify(quantityPriceArray + "kr"));
    }
    let titleValue = mergedTitleArray.join(", ");
    let quantityValue = mergedQuantityArray.join(", ");
    let quantityPriceValue = mergedQuantityPriceArray.join(", ");
    if (dishName && dishQuantity && dishQuantityPrice) {
      dishName.value = titleValue;
      dishQuantity.value = quantityValue;
      dishQuantityPrice.value = quantityPriceValue;
    } else {
      null;
    }
  }
}

//Function for carousel slider on front page
//Carousel 1

//Carousel 2
/*
let currentIndex2 = 0;
const carousel2 = document.getElementById("carousel2");
const products2 = document.querySelectorAll(".product2");
const product2Width = products2[0].offsetWidth + 20;
const visibleProducts2 = 3;
const totalProducts2 = products2.length;

for (let i = 0; i < visibleProducts2; i++) {
  const firstClone = products2[i].cloneNode(true);
  const lastClone = products2[totalProducts2 - 1 - i].cloneNode(true);
  carousel2.appendChild(firstClone);
  carousel2.insertBefore(lastClone, carousel2.firstChild);
}

carousel2.style.width = `${
  (totalProducts2 + visibleProducts2 * 2) * product2Width
}px`;

carousel2.style.transform = `translateX(-${
  product2Width * visibleProducts2
}px)`;

function scrollCarouselLeft2() {
  console.log("Left button clicked");
  currentIndex2--;
  carousel2.style.transition = "transform 0.5s ease-in-out";
  carousel2.style.transform = `translateX(-${
    (currentIndex2 + visibleProducts2) * product2Width
  }px)`;

  if (currentIndex2 < 0) {
    setTimeout(() => {
      carousel2.style.transition = "none";
      currentIndex2 = totalProducts2 - 1;
      carousel2.style.transform = `translateX(-${
        (currentIndex2 + visibleProducts2) * product2Width
      }px)`;
    }, 500);
  }
}

function scrollCarouselRight2() {
  currentIndex2++;
  carousel2.style.transition = "transform 0.5s ease-in-out";
  carousel2.style.transform = `translateX(-${
    (currentIndex2 + visibleProducts2) * product2Width
  }px)`;

  if (currentIndex2 >= totalProducts2) {
    setTimeout(() => {
      carousel2.style.transition = "none";
      currentIndex2 = 0;
      carousel2.style.transform = `translateX(-${
        product2Width * visibleProducts2
      }px)`;
    }, 500);
  }
}
*/
//Funtion for show/hide faq accordions with button
document.addEventListener("DOMContentLoaded", function () {
  const omWebbplatsenBtn = document.getElementById("om-webbplatsen");
  const betalningBtn = document.getElementById("betalning");
  const menyerAllergierBtn = document.getElementById("menyer-allergier");

  const omWebbplatsenAccordion = document.getElementById(
    "om-webbplatsen-accordion"
  );
  const betalningAccordion = document.getElementById("betalning-accordion");
  const allergierAccordion = document.getElementById("allergier-accordion");
  if (
    omWebbplatsenBtn !== null &&
    betalningBtn !== null &&
    menyerAllergierBtn !== null &&
    omWebbplatsenAccordion !== null &&
    betalningAccordion !== null &&
    allergierAccordion !== null
  ) {
    function hideAllAccordions() {
      omWebbplatsenAccordion.style.display = "none";
      betalningAccordion.style.display = "none";
      allergierAccordion.style.display = "none";
    }

    function resetButtonStyles() {
      omWebbplatsenBtn.classList.remove("active");
      betalningBtn.classList.remove("active");
      menyerAllergierBtn.classList.remove("active");
    }

    hideAllAccordions();
    omWebbplatsenAccordion.style.display = "block";
    omWebbplatsenBtn.classList.add("active");

    omWebbplatsenBtn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllAccordions();
      resetButtonStyles();
      omWebbplatsenAccordion.style.display = "block";
      omWebbplatsenBtn.classList.add("active");
    });

    betalningBtn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllAccordions();
      resetButtonStyles();
      betalningAccordion.style.display = "block";
      betalningBtn.classList.add("active");
    });

    menyerAllergierBtn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllAccordions();
      resetButtonStyles();
      allergierAccordion.style.display = "block";
      menyerAllergierBtn.classList.add("active");
    });
  }
});

// Function to cart content and total form to email
const sendCartInfo = document.getElementById("cart-order-form");
const cartButton = document.getElementById("cart-button");
const cartForm = document.getElementById("cart-form");
const newResult = document.getElementById("cart-result");

const sum = localStorage.getItem("sum");
let sumInput = document.getElementById("sum");
if (sumInput !== null) {
  sumInput.value = sum + "kr";
  updateFields();
} else {
  null;
}

if (sum !== null && cartButton !== null) {
  cartButton.removeAttribute("disabled");
} else if (sum && cartButton) {
  cartButton.setAttribute("disabled", "disabled");
} else {
  null;
}

if (sendCartInfo !== null) {
  sendCartInfo.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(sendCartInfo);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    cartForm.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Var god vänta</h4>
          </div>`;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          cartForm.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Tack för din förfrågan.En av våra medarbetare ska
          återkomma till dig snart</h4>
          </div>
          `;
          localStorage.clear();
          setTimeout(() => {
            window.location.href = "index.html";
          }, 5000);
        } else {
          console.log(response);
          newResult.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        cartForm.innerHTML = "Something went wrong!";
      })
      .then(function () {
        sendCartInfo.reset();
        setTimeout(() => {
          newResult.style.display = "none";
        }, 3000);
      });
  });
} else {
  null;
}

let removeOrder = document.getElementById("removeQuickOrder");
function clear() {
  let bundleImage = document.getElementById("bundleImage");
  localStorage.removeItem("formDataArry");
  localStorage.removeItem("totalQuantity");
  localStorage.removeItem("bundle");
  infoBox.style.display = "none";
  bundleImage.innerHTML = "";
  const antalBoxes = document.querySelectorAll(".box4");
  const dietBoxes = document.querySelectorAll(".box2");
  const chooseAntalbox = antalBoxes.forEach((b) => {
    if ((b.hasClass = "selected")) {
      b.classList.remove("selected");
      b.classList.remove("selected-border");
    }
  });
  const chooseDietbox = dietBoxes.forEach((b) => {
    if ((b.hasClass = "selected")) {
      b.classList.remove("selected");
      b.classList.remove("selected-border");
    }
  });
  totalQuantity();
}
if (removeOrder !== null) {
  removeOrder.addEventListener("click", clear);
}

var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  fade: true,
  grabCursor: true,
  navigation: {
    nextEl: ".first-swiper-button-next",
    prevEl: ".first-swiper-button-prev",
    disabledClass: "disabled_swiper_button",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

var swiper1 = new Swiper(".slide-content2", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: "true",
  fade: true,
  grabCursor: true,
  navigation: {
    nextEl: ".second-swiper-button-next",
    prevEl: ".second-swiper-button-prev",
    disabledClass: "disabled_swiper_button",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

var datesSwipes = new Swiper(".dates_swipe", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: false,
  slidesPerGroup: 3,
  slidesOffsetBefore: -6,
  slidesOffsetAfter: 8,
  roundLengths: true,
  fade: true,
  grabCursor: false,
  navigation: {
    nextEl: ".swiper-button-next-dates",
    prevEl: ".swiper-button-prev-dates",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1120: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

//Direct to payment when purchase form is saved
//async function cartNextBtnProceed() {
//    // Försök att spara formulärdata
//    const purchaseDataSaved = await savePurchaseData();

//    if (purchaseDataSaved) {
//        // Om formulärdata har sparats, gå vidare till betalning
//        window.location.href = 'payment.html';
//    } else {
//        alert("Något gick fel.");
//    }
//}
async function getUserId() {
  if (localStorage.getItem("purchaseData")) {
    const storedPurchaseData = JSON.parse(localStorage.getItem("purchaseData"));
    const email = storedPurchaseData.email;
    console.log(email);
    // const response = await fetch(`https://localhost:7216/email/email`);
    const response = await fetch(`https://${API_KEY}/users/email/${email}`);
    const data = await response.json();
    let userId = data.id;
    return userId;
  }
}
// Save form in Cart_view
async function savePurchaseData() {
  let houseType = "";
  const purchaseData = {};

  const selectedTime = document.querySelector(".tid-box.tid-box-selected");
  if (selectedTime) {
    const deliverClock = selectedTime.querySelector(".time").textContent;
    const deliverShipping = selectedTime.querySelector(".price").textContent;
    purchaseData.deliveryTime = deliverClock;
    purchaseData.deliveryPrice = deliverShipping;
  }
  purchaseData.deliveryDate =
    document.getElementById("deliveryDateSpan").textContent;
  purchaseData.address = document.getElementById("addressInput").value;
  purchaseData.postalCode = document.getElementById("postalCodeInput").value;
  purchaseData.ort = document.getElementById("cityInput").value;
  const apartment = document.getElementById("lägenhet").checked;
  const house = document.getElementById("villa_hus").checked;
  const radhus = document.getElementById("radhus").checked;
  const LeaveAtDoor = document.getElementById("flexSwitchCheckDefault").checked;
  purchaseData.text = document.getElementById("floatingTextarea").value.trim();
  purchaseData.firstName = document.getElementById("firstNameInput").value;
  purchaseData.lastName = document.getElementById("lastNameInput").value;
  purchaseData.phone = document.getElementById("phoneInput").value;
  purchaseData.email = document.getElementById("mailInput").value;

  if (apartment) {
    houseType = "Apartment";
    purchaseData.port = document.getElementById("portInput").value.trim();
    purchaseData.floor = document.getElementById("floorInput").value.trim();
  } else if (house) {
    houseType = "Villa/Hus";
  } else if (radhus) {
    houseType = "Radhus";
  }
  purchaseData.houseType = houseType;
  purchaseData.LeaveAtDoor = LeaveAtDoor;

  const formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  purchaseData.products = formDataArry.map((item) => ({
    id: parseInt(item.id),
    name: item.title,
    quantity: parseInt(item.quantity),
    price: item.Price,
  }));

  purchaseData.total = localStorage.getItem("sum");
  purchaseData.quantity = localStorage.getItem("totalQuantity");

  localStorage.setItem("purchaseData", JSON.stringify(purchaseData));

  const storedPurchaseData = JSON.parse(localStorage.getItem("purchaseData"));
  const postPurchaseData = {
    userId: await getUserId(),
    products: storedPurchaseData.products,
    quantity: parseInt(storedPurchaseData.quantity),
    total: parseFloat(storedPurchaseData.total),
    paymentMethod: "card",
    orderDate: new Date().toISOString().slice(0, 10),
    deliveryDate: storedPurchaseData.deliveryDate,
    deliveryTime: storedPurchaseData.deliveryTime,
    deliveryAddress: storedPurchaseData.address,
    deliveryPostalCode: storedPurchaseData.postalCode,
    floor: parseInt(storedPurchaseData.floor),
    portCode: parseInt(storedPurchaseData.port),
    houseType: storedPurchaseData.houseType,
    leaveAtDoor: storedPurchaseData.LeaveAtDoor,
    discountTotal: 0,
  };
  console.log(postPurchaseData);
  localStorage.setItem("newPurchaseData", JSON.stringify(postPurchaseData));
}

//SIDE BAR CART

// Show sidebar
function openSidebar() {
  console.log("openSidebar called");
  const cartSidebar = document.getElementById("cartSidebar");
  cartSidebar.classList.add("open");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}
// Redirect to checkout page
function goToCheckout() {
  window.location.href = "cart_view.html";
}

// Funktion för att lägga till produkt i varukorgen
// function addToCart(product) {
//   localStorage.setItem('sidebarOpen', 'true');
//   openSidebar();
// }

function addToCart(product) {
  console.log("addToCart called");
  let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));

  const existingProductIndex = formDataArry.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    formDataArry[existingProductIndex].quantity += 1;
  } else {
    formDataArry.push({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      quantity: 1,
      img: product.img,
      diet: product.diet,
    });
  }

  // Uppdatera varukorgsdata i localStorage
  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  // updateSidebarCart();
  // openSidebar();
}

document.addEventListener("DOMContentLoaded", function () {
  const closeSidebarBtn = document.getElementById("closeSidebar");
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", function () {
      cartSidebar.classList.remove("open");
      overlay.style.display = "none";
      console.log("Sidebar closed!");
    });
  }

  // if (localStorage.getItem('sidebarOpen') === 'true') {
  //   openSidebar();
  // }

  document.addEventListener("DOMContentLoaded", function () {
    // updateSidebarCart();
  });

  // updateSidebarCart();
});

// Remove item from the cart, globally available
function removeFromCart(itemId) {
  let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  formDataArry = formDataArry.filter((item) => item.id !== itemId);

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  // updateSidebarCart();
}

// globally available quantity change
function changeQuantity(itemId, change) {
  let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  const itemIndex = formDataArry.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    formDataArry[itemIndex].quantity += change;

    if (formDataArry[itemIndex].quantity <= 0) {
      removeFromCart(itemId);
    } else {
      localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
      // updateSidebarCart();
    }
  }
}

// Update the sidebar cart with items and show mobile notification
function updateSidebarCart() {
  console.log("updateSidebarCart called");
  let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  console.log("Cart contents:", formDataArry);
  const sidebarCartItems = document.getElementById("sidebarCartItems");
  const mobileProductCount = document.getElementById("mobileProductCount");
  const mobileTotalPrice = document.getElementById("mobileTotalPrice");

  sidebarCartItems.innerHTML = "";
  let totalQuantity = 0;
  let total = 0;
  const shipping = 49;

  formDataArry.forEach((item) => {
    if (formDataArry) {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      totalQuantity = item.quantity;

      const dietImage = item.diet.includes(",")
        ? item.diet
            .split(",")
            .map(
              (diet) => `<img src="${diet}" alt="diet image" class="diet_img"/>`
            )
            .join("")
        : `<img id="diet" src="${item.diet}" alt="specialkost-bild" class="diet_img"/>`;

      sidebarCartItems.innerHTML += `
          <section class="col mb-5 border-bottom pb-3" id="${item.id}">
            <div class="row">
              <div class="col-4">
                <div class="imgContainer">
                  <img id="${item.id}" src="${
        item.img
      }" alt="bild på maträtt" class="pro_img cartPayDeliver cropImage"/>
                </div>
              </div>
              <div class="col-4">
                <h5 style="flex-direction: row; display: flex;">
                  ${item.title}
                  <div style="padding: 10px; margin-top: -17px;" class="d-flex">${dietImage}</div>
                </h5>
                <p data-bs-toggle="tooltip" data-bs-placement="top" title="${
                  item.description
                }" class="food-description sidebar" style="width: 380px; max-height:50px;">
                  ${item.description}
                </p>
              </div>
              <div class="col-4">
                <h5 style="cursor: pointer;" onclick="removeFromCart('${
                  item.id
                }')" class="ms-auto me-4">
                  Ta bort <i id="ta-bort-x" style="transform: rotate(45deg); margin-bottom: 20px;" class="fas fa-plus"></i>
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="quentity_btn mt-0 btn-sidebar d-flex">
                  <button class="decrease" onclick="changeQuantity('${
                    item.id
                  }', -1)">
                    <i style="font-size: 12px;" class="fas fa-minus"></i>
                  </button>
                  <input class="quantity" type="text" value="${
                    item.quantity
                  }" readonly>
                  <button class="increase" onclick="changeQuantity('${
                    item.id
                  }', 1)" style="padding-left:22px;">
                    <i style="font-size: 12px;" class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div class="col-6 d-flex align-items-center justify-content-end">
                <h6 class="quantity_price currency mb_0">${
                  item.price * item.quantity
                }</h6>
                <h6 class="currency mb_0">kr</h6>
              </div>
            </div>
          </section>`;
    } else {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      totalQuantity = item.quantity;

      const dietImage = item.diet.includes(",")
        ? item.diet
            .split(",")
            .map(
              (diet) => `<img src="${diet}" alt="diet image" class="diet_img"/>`
            )
            .join("")
        : `<img id="diet" src="${item.diet}" alt="specialkost-bild" class="diet_img"/>`;

      sidebarCartItems.innerHTML = "";
    }
  });

  // Update totals in sidebar and mobile
  document.getElementById("sidebarShipping").textContent = `${shipping} kr`;
  document.getElementById("sidebarTotal").textContent = `${
    total + shipping
  } kr`;
  mobileProductCount.textContent = `${totalQuantity} produkter`;
  mobileTotalPrice.textContent = `${total + shipping} kr`;

  // Show mobile notification when items are added to the cart
  const mobileCartNotification = document.getElementById(
    "mobileCartNotification"
  );
  if (totalQuantity > 0) {
    mobileCartNotification.style.display = "flex";
    // openSidebar();
  } else {
    mobileCartNotification.style.display = "none";
    cartSidebar.classList.remove("open");
    overlay.style.display = "none";
  }
}

// --------------------------------------

async function redirectToStripeCheckout() {
  try {
    // Retrieve cart information from local storage
    let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (!formDataArry || formDataArry.length === 0) {
      console.error("No products in the cart.");
      return;
    }

    let products = formDataArry.map((item) => {
      // Retrieve the unit price and total price for the selected quantity
      let unitPrice = item.price; // Price per item
      let totalQuantityPrice = item.quantity * item.price; // Total for the quantity

      return {
        name: item.title, // Product name (title)
        quantity: item.quantity, // Quantity of the product
        price: unitPrice, // Unit price for the product
        total: totalQuantityPrice, // Total price for the quantity
      };
    });

    // Create a POST request to your backend endpoint to create the Stripe checkout session
    //const response = await fetch("https://localhost:7216/payments", {
    const API_KEY = variables();
    const response = await fetch(`https://${API_KEY}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        successPaymentUrl: "https://www.yumfoods.se/beta/payment_success.html",
        //"https://yumfoodsdev.azurewebsites.net/payment_success.html",
        //"https://localhost:7023/payment_success.html",
        cancelPaymentUrl: "https://www.yumfoods.se/beta/payment_cancel.html",
        //"https://yumfoodsdev.azurewebsites.net/payment_cancel.html",
        //"https://localhost:7023/payment_cancel.html",
        products: products, // Send the products array
      }),
    });

    const result = await response.json();
    if (response.ok) {
      // Redirect to the Stripe checkout session URL
      window.location.href = result.checkoutUrl;
    } else {
      console.error("Error creating Stripe session", result);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
function displayOrder(order) {
  const orderDetailsDiv = document.getElementById("orderDetails");

  if (!order) {
    orderDetailsDiv.innerHTML = "No order found.";
    return;
  }
}

async function register() {
  const userData = {};

  // Ta ut värde från local storage genom metoden saveUserData (userData) och sätt in i array {}
  userData.firstName = document.getElementById("field1").value;
  userData.lastName = document.getElementById("field1.2").value;
  userData.email = document.getElementById("field2").value;
  userData.phoneNumber = document.getElementById("field2.1").value;
  userData.passwordhash = document.getElementById("field3").value;
  userData.address = document.getElementById("field5").value;
  userData.postalCode = document.getElementById("postnummer").value;
  userData.city = document.getElementById("ort").value;

  // Skapa konstanter för att kontrollera lösen och termer
  const repeatPassword = document.getElementById("field4").value;
  const termsAccepted = document.getElementById("terms1").checked;

  // Konvertera obj till sträng
  localStorage.setItem("userData", JSON.stringify(userData));

  // Tar ut datan
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  // Kontrollera att det finns data i localStorage
  if (!storedUserData) {
    console.error("No user data found in localStorage.");
    return;
  }

  // Skapa nytt objektet som ska matcha datan i databasen
  const userToRegister = {
    firstName: storedUserData.firstName,
    lastName: storedUserData.lastName,
    email: storedUserData.email,
    passwordhash: storedUserData.passwordhash,
    address: storedUserData.address,
    postalCode: storedUserData.postalCode,
    phoneNumber: storedUserData.phoneNumber,
    city: storedUserData.city,
    userType: null,
    organizationNumber: null,
    orders: null,
    subscription: null,
  };

  // Anropa apiet
  const response = await fetch(`https://${API_KEY}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToRegister),
  });

  if (response.ok) {
    alert("Användare registrerad framgångsrikt!");
    localStorage.removeItem("userData");
    window.location.href = "sign_in.html";
  } else if (response.status === 400) {
    const errorData = await response.json();
    alert(`Fel: ${errorData.message || "Ogiltiga indata!"}`);
  }
}

async function registerGuest() {
  const userData = {};

  // Ta ut värde från local storage genom metoden saveUserData (userData) och sätt in i array {}
  userData.firstName = document.getElementById("firstNameInput").value;
  userData.lastName = document.getElementById("lastNameInput").value;
  userData.email = document.getElementById("mailInput").value;
  userData.phoneNumber = document.getElementById("phoneInput").value;
  userData.address = document.getElementById("addressInput").value;
  userData.postalCode = document.getElementById("postalCodeInput").value;
  userData.city = document.getElementById("cityInput").value;

  // Konvertera obj till sträng
  localStorage.setItem("userData", JSON.stringify(userData));

  // Tar ut datan
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  // Kontrollera att det finns data i localStorage
  if (!storedUserData) {
    console.error("No user data found in localStorage.");
    return;
  }

  // Skapa nytt objektet som ska matcha datan i databasen
  const userToRegister = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    passwordhash: "default",
    address: userData.address,
    postalCode: userData.postalCode,
    phoneNumber: userData.phoneNumber,
    city: userData.city,
    userType: null,
    organizationNumber: null,
    orders: null,
    subscription: null,
  };
  console.log(userToRegister);

  // Anropa apiet
  const response = await fetch(`https://${API_KEY}/users`, {
    //const response = await fetch(`https://localhost:7216/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToRegister),
  });

  if (response.ok) {
    const data = await response.json();
  } else {
    return;
  }
}

async function login() {
  // Create an object to hold login data
  const loginData = {
    email: document.getElementById("email-login").value.trim(),
    password: document.getElementById("password-login").value.trim(),
  };

  // Validate the inputs
  if (!loginData.email || !loginData.password) {
    alert("Both email and password are required.");
    return;
  }

  try {
    const response = await fetch(`https://${API_KEY}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Response data: ", data);

      if (data && data.token) {
        // If a token is received
        localStorage.setItem("authToken", data.token); // Store the token
        localStorage.setItem("email", loginData.email); // Store the mail
        alert("Login successful!"); // Inform user
        window.location.href = "dashboard.html"; // Redirect to the dashboard
      } else {
        alert("Login failed: No token received from the server.");
      }
    } else {
      // Handle error responses
      const errorText = await response.text(); // Get error response text
      alert(`Login failed: ${errorText}`);
    }
  } catch (error) {
    console.error("Network or unexpected error during login:", error);
    alert("An error occurred during login. Please try again.");
  }
}

// Event listener for the login form
let loginForm = document.getElementById("loginForm");
if (loginForm !== null) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    login(); // Call the login function
  });
}
async function updateProfile() {
  const email = localStorage.getItem("email");

  const updatedUserData = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
    phone: document.getElementById("phone").value,
  };
  try {
    const response = await fetch(`https://${API_KEY}/users/email/${email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedUserData),
    });

    // Handle the response
    if (response.ok) {
      const data = await response.json();
      alert("Profile updated successfully!");
      console.log("Updated User Data: ", data);
    } else {
      const errorText = await response.text();
      alert(`Failed to update profile: ${errorText}`);
    }
  } catch (error) {
    console.error("Error while updating profile:", error);
    alert("An error occurred. Please try again.");
  }
}

function displayOrderItemsIfExists() {
  let infoBox = document.querySelector(".info-box");
  let productOrder = document.getElementById("product-container");
  if (productOrder !== null) {
    if (productOrder.innerHTML !== "") {
      infoBox.style.display = "block";
      displayOrderItems();
    }
  }
}
displayOrderItems();
displayOrderItemsIfExists();
if (document.getElementById("bundleImage") !== null) {
  bundleImage.innerHTML = localStorage.getItem("bundle");
}

function Footer() {
  let footer = document.getElementById("footer");
  footer.innerHTML = `
     <div class="pt_20 xs_pt_20">
      <div class="container">
        <div id="footer-new" class="row justify-content-around pt_50">
          <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div class="footer_content">
              <img
                class="footer_logo"
                loading="lazy"
                src="images/footer-logo-multiculti.png"
                alt="footer-logo"
                class="mb_25"
              />
            </div>
          </div>
          <div id="contact_info" class="col-xxl-3 col-xl-2 col-lg-2 col-md-6">
            <h1 id="contact_title" style="white-space: nowrap; width: auto">
              Yum Foods
            </h1>
            <div class="contacts-content contacts justify-content-center w_40">
              <div id="footer-phone" class="contacts-box">
                <i
                  style="color: #fc5633; margin-top: 4px"
                  class="fas fa-phone fa-lg"
                ></i>
                <p style="margin-left: 10px">+46 76 023 49 30</p>
              </div>
              <div class="contacts-box">
                <i
                  style="color: #fc5633; margin-top: 4px"
                  class="fas fa-envelope fa-lg"
                ></i>
                <p style="margin-left: 10px">info@yumfoods.se</p>
              </div>
              <div id="map-marker" class="contacts-box">
                <i
                  style="margin-left: 2px; color: #fc5633; margin-top: 2px"
                  class="fas fa-map-marker-alt fa-lg"
                ></i>
                <p id="location_address" style="margin-left: 14px">
                  Stora Badhusgatan 18, 411 21 Göteborg
                </p>
              </div>
            </div>
          </div>
          <div
            id="social_links"
            class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 order-md-4"
          >
            <div class="footer_content">
              <h2 id="link_title" class="link_padding">Följ oss</h2>
              <ul id="faq-ul" class="social_new">
                <li style="margin-bottom: 30px">
                  <a
                    href="https://www.facebook.com/YumFoodsSE"
                    target="_blank"
                    aria-label="Länk till facebook sida"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <p
                    class="mobil-terms-p1"
                    style="margin-top: -20px; margin-left: 10px"
                  >
                    Facebook
                  </p>
                </li>
                <li style="margin-bottom: 30px">
                  <a
                    href="https://www.linkedin.com/company/yum-foods/"
                    target="_blank"
                    aria-label="Länk till linkedin sida"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                  <p
                    class="mobil-terms-p2"
                    style="margin-top: -20px; margin-left: 10px"
                  >
                    Linkedin
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yumfoods.se/"
                    target="_blank"
                    aria-label="Länk till instagram sida"
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <p
                    class="mobil-terms-p3"
                    style="margin-top: -20px; margin-left: 10px"
                  >
                    Instagram
                  </p>
                </li>
                <!--<li><a href="privacy_policy.html">Integritetspolicy</a></li>-->
              </ul>
            </div>
          </div>
          <div
            id="other_links"
            class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 order-md-4"
          >
            <div class="footer_content">
              <h2 id="link_title" class="link_padding">Hjälp & Villkor</h2>
              <ul id="faq-ul">
                <li style="margin-bottom: 30px">
                  <a href="faq.html" aria-label="Snabb svar">
                    <i class="fas fa-question"></i>
                  </a>
                  <p
                    class="terms-p1"
                    style="margin-top: -20px; margin-left: 10px"
                  >
                    Få snabbt svar FAQ
                  </p>
                </li>
                <li style="margin-bottom: 30px">
                  <a href="faq.html" aria-label="snabb svar">
                    <i class="fab fa-teamspeak"></i>
                  </a>
                  <p
                    class="terms-p2"
                    style="margin-top: -20px; margin-left: 10px"
                  >
                    Kontakta kundservice
                  </p>
                </li>
                <li>
                  <a href="terms_condition.html" aria-label="Allmäna villkor">
                    <i class="fas fa-file-alt"></i>
                  </a>
                  <p
                    class="terms-p3"
                    style="margin-top: -20px; margin-left: 10px"
                  >
                    Allmänna villkor
                  </p>
                </li>
                <!--<li><a href="privacy_policy.html">Integritetspolicy</a></li>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom d-flex flex-wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="footer_bottom_text">
              <p>Copyright ©<b> Yum Foods</b> 2024. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

Footer();

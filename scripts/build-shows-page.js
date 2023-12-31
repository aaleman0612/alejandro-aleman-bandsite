const backend = new BandSiteApi("ccad939c-f2fb-4106-a32b-687171a50ce7");

const bookingSection = document.querySelector(".booking--section");

const booking = document.createElement("div");
booking.classList.add("booking");
bookingSection.appendChild(booking);

const bookingTitle = document.createElement("h2");
bookingTitle.classList.add("booking__title");
booking.appendChild(bookingTitle);
bookingTitle.textContent = "Shows";

const bookingTablet = document.createElement("div");
bookingTablet.classList.add("booking__tablet");
booking.appendChild(bookingTablet);

const showHeader = document.createElement("p");
showHeader.classList.add("show__header");
bookingTablet.appendChild(showHeader);

const showHeaderVenue = document.createElement("p");
showHeaderVenue.classList.add("show__header");
bookingTablet.appendChild(showHeaderVenue);

const showHeaderLoc = document.createElement("p");
showHeaderLoc.classList.add("show__header");
bookingTablet.appendChild(showHeaderLoc);

function displayShow(showObject) {
  const show = document.createElement("div");
  show.classList.add("show");

  const showHeaderMobile = document.createElement("p");
  showHeaderMobile.classList.add("show__header--mobile");
  show.appendChild(showHeaderMobile);
  showHeaderMobile.textContent = "Date";

  const showDate = document.createElement("p");
  showDate.classList.add("show__date");
  show.appendChild(showDate);

  const showHeaderMobileV = document.createElement("p");
  showHeaderMobileV.classList.add("show__header--mobile");
  show.appendChild(showHeaderMobileV);
  showHeaderMobileV.textContent = "Venue";

  const showVenue = document.createElement("p");
  showVenue.classList.add("show__venue");
  show.appendChild(showVenue);

  const showHeadermobileL = document.createElement("p");
  showHeadermobileL.classList.add("show__header--mobile");
  show.appendChild(showHeadermobileL);
  showHeadermobileL.textContent = "Location";

  const showLocation = document.createElement("p");
  showLocation.classList.add("show__location");
  show.appendChild(showLocation);

  const showBtn = document.createElement("button");
  showBtn.classList.add("show__btn");
  show.appendChild(showBtn);
  showBtn.textContent = "BUY TICKET";

  showDate.textContent = new Date(showObject.date).toDateString();
  showVenue.textContent = showObject.place;
  showLocation.textContent = showObject.location;

  booking.appendChild(show);

  show.addEventListener("click", function (e) {
    const selectedShows = document.getElementsByClassName("show__selected");

    if (selectedShows.length > 0) {
      for (let index = 0; index < selectedShows.length; index++) {
        const element = selectedShows[index];
        element.classList.remove("show__selected");
      }
    }

    show.classList.add("show__selected");
  });
}
async function displayShows() {
  try {
    const Shows = await backend.getShows();
    console.log(Shows);

    for (const showDay of Shows) {
      displayShow(showDay);
    }
  } catch (error) {
    console.log.error(error);
  }
}

displayShows();
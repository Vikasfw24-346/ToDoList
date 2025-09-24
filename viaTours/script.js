let popupActive = document.querySelector('.popup-overview');
let popupIncluded = document.querySelector('.popup-included');
let popupItinerary = document.querySelector('.popup-itinerary');
let popupCalendar = document.querySelector('.popup-calendar');
let popupFaq = document.querySelector('.popup-faq');
let popupReviews = document.querySelector('.popup-reviews');

let popupOpen = (popupActive, popupIncluded, popupItinerary, popupCalendar, popupFaq, popupReviews )=>{
    popupActive.classList.add("active_popup_open");
}
let overviewopenwModal = () =>{
    popupActive.classList.add("active_popup_open");
}

let overviewcloseModal = () =>{
    popupActive.classList.remove("active_popup_open");
}

let includedopenwModal = () =>{
    popupIncluded.classList.add("active_popup_open");
}

let includedcloseModal = () =>{
    popupIncluded.classList.remove("active_popup_open");
}

let itineraryopenwModal = () =>{
    popupItinerary.classList.add("active_popup_open");
}

let itinerarycloseModal = () =>{
    popupItinerary.classList.remove("active_popup_open");
}

let calendaropenwModal = () =>{
    popupCalendar.classList.add("active_popup_open");
}

let calendarcloseModal = () =>{
    popupCalendar.classList.remove("active_popup_open");
}

let faqopenwModal = () =>{
    popupFaq.classList.add("active_popup_open");
}

let faqcloseModal = () =>{
    popupFaq.classList.remove("active_popup_open");
}

let reviewsopenwModal = () =>{
    popupReviews.classList.add("active_popup_open");
}

let reviewscloseModal = () =>{
    popupReviews.classList.remove("active_popup_open");
}

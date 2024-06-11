const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const hours = ["09-18", "09-18", "09-18", "09-18", "09-18", "10-19", "CLOSED"];

export default function Home() {
    const homeSection = document.createElement("div");

    const hoursSection = document.createElement("div");
    hoursSection.className = "section";
    homeSection.appendChild(hoursSection);

    const hoursSectionTitle = document.createElement("p");
    hoursSectionTitle.className = "section-title";
    hoursSectionTitle.innerText = "Hours"
    hoursSection.appendChild(hoursSectionTitle);

    const timetableDiv = document.createElement("div");
    timetableDiv.className = "timetable";
    hoursSection.appendChild(timetableDiv);

    const timetableDaysUl = createUlWithElements(days);
    timetableDaysUl.className = "timetable-days";
    timetableDiv.appendChild(timetableDaysUl);

    const timetableHours = createUlWithElements(hours);
    timetableHours.className = "timetable-hours";
    timetableDiv.appendChild(timetableHours);

    const locationSection = document.createElement("div");
    locationSection.className = "section";
    homeSection.appendChild(locationSection);

    const locationSectionTitle = document.createElement("p");
    locationSectionTitle.className = "section-title";
    locationSectionTitle.innerText = "Location";
    locationSection.appendChild(locationSectionTitle);

    const locationValue = document.createElement("p");
    locationValue.innerText = "Bukit Baka Bukit Raya National Park";
    locationSection.appendChild(locationValue);

    return homeSection;
}

const createUlWithElements = (listElements) => { 
    const ul = document.createElement("ul");
    for(let i=0; i<listElements.length; i++) {
        const li = document.createElement("li");
        li.innerText = listElements[i];
        ul.appendChild(li);
    }
    return ul
};
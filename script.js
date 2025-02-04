let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let selectedDate = new Date().toISOString().split("T")[0];

document.addEventListener("DOMContentLoaded", () => {
    updateMonthYearDisplay();
    generateCalendar(currentYear, currentMonth);
    loadEvents();
});

function updateMonthYearDisplay() {
    const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    document.getElementById("currentMonthYear").textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

function prevMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else {
        currentMonth -= 1;
    }
    updateMonthYearDisplay();
    generateCalendar(currentYear, currentMonth);
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    } else {
        currentMonth += 1;
    }
    updateMonthYearDisplay();
    generateCalendar(currentYear, currentMonth);
}

function generateCalendar(year, month) {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // 清空月曆

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.className = "day";
        dateDiv.textContent = day;

        const fullDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

        if (fullDate === selectedDate) {
            dateDiv.classList.add("selected");
        }

        const today = new Date().toISOString().split("T")[0];
        if (fullDate === today) {
            dateDiv.classList.add("today");
        }

        dateDiv.addEventListener("click", () => {
            selectedDate = fullDate;
            document.querySelectorAll("#calendar .selected").forEach(el => el.classList.remove("selected"));
            dateDiv.classList.add("selected");
            displayEventsForDate(selectedDate);
        });

        calendar.appendChild(dateDiv);
    }
}

function loadEvents() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    displayEventsForDate(selectedDate, events);
}

function addEvent() {
    const eventName = document.getElementById("eventName").value.trim();
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const eventDays = parseInt(document.getElementById("eventDays").value);

    if (!eventName || !eventDate || !eventTime || isNaN(eventDays) || eventDays < 1) {
        alert("請輸入有效的活動名稱、日期、時間和天數！");
        return;
    }

    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push({ name: eventName, date: eventDate, time: eventTime, days: eventDays });
    localStorage.setItem("events", JSON.stringify(events));
    loadEvents();
    clearForm();
}

function clearForm() {
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventTime").value = "";
    document.getElementById("eventDays").value = "";
}

function displayEventsForDate(date, events = null) {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    events = events || JSON.parse(localStorage.getItem("events")) || [];

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        const diff = (new Date(date) - eventDate) / (1000 * 60 * 60 * 24);
        return diff >= 0 && diff % event.days === 0;
    });

    filteredEvents.forEach((event, index) => {
        const eventItem = document.createElement("li");
        eventItem.textContent = `${event.name} - ${event.time}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "刪除";
        deleteButton.onclick = () => removeEvent(index);

        eventItem.appendChild(deleteButton);
        eventList.appendChild(eventItem);
    });

    if (filteredEvents.length === 0) {
        const noEvent = document.createElement("li");
        noEvent.textContent = "沒有行程";
        eventList.appendChild(noEvent);
    }
}

function removeEvent(index) {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    loadEvents();
}
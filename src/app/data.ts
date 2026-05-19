export const userProfile = {
  name: "Valentina",
  role: "VP Global Sales",
  homeCity: "Manila",
  homeTz: "Asia/Manila",
};

export const currentContext = {
  city: "Tokyo, Japan",
  weather: "18°C, Cloudy",
  timeLocal: "9:41 AM",
  dateLocal: "Tue, May 19",
  tzAbbr: "JST",
  offset: "+09:00",
  homeTime: "8:41 AM",
  homeDate: "Tue, May 19",
  homeTzAbbr: "PHT",
  isTravelling: true,
};

export const nextMeeting = {
  title: "Q3 APAC Strategy Sync",
  type: "In-Person",
  location: "Marunouchi Tower, Fl 32",
  time: "10:30 AM JST",
  attendees: ["Kenji M.", "Sarah T."],
  status: "urgent",
  travel: {
    mode: "uber",
    durationMins: 22,
    bufferMins: 10,
    leaveInMins: 17, // (10:30 - 9:41) = 49 mins until meeting. 49 - 22 travel - 10 buffer = 17 mins left.
    distance: "4.2 km"
  }
};

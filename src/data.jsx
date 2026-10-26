const { useState, useEffect, useRef } = React;

const NAV = [
  ["/", "Home"],
  ["/data", "Forecasts"],
  ["/challenges", "Challenges"],
  ["/action", "Action"],
  ["/sources", "Sources"],
];

const DATA = {
  hotDays: {
    label: "Days Above 30°C per Year",
    past: 14.3,
    low: [20.2, 27.3],
    high: [22.8, 32.8],
    r45: [[20.2, 31.5], [27.3, 50.2]],
    r85: [[22.8, 36.2], [32.8, 63.6]],
  },
  tropicalnights: {
    label: "Tropical Nights (nights above 22°C)",
    past: 1.6,
    low: [2.9, 5.2],
    high: [4.0, 9.0],
    r45: [[2.9, 8.2], [5.2, 15.8]],
    r85: [[4.0, 9.4], [9.0, 30.7]],
  },
  meantemp: {
    label: "Mean Annual Temperature (°C)",
    past: 2.9,
    low: [4.1, 5.1],
    high: [4.3, 5.9],
    r45: [[4.1, 5.8], [5.1, 7.9]],
    r85: [[4.3, 5.9], [5.9, 9.2]],
  },
  frostFree: {
    label: "Frost-Free Season (days)",
    past: 131,
    low: [135.3, 140.6],
    high: [141.3, 155.5],
    r45: [[135.3, 159], [140.6, 170]],
    r85: [[141.3, 160.7], [155.5, 186.7]],
  },
  precip: {
    label: "Total Annual Precipitation (mm)",
    past: 523,
    low: [521.8, 511.4],
    high: [505.6, 516.3],
    r45: [[521.8, 582.1], [511.4, 599.5]],
    r85: [[505.6, 592.6], [516.3, 612.3]],
  },
};

const CHALLENGES = [
  {
    n: "01",
    t: "Extreme Heat",
    d: "Days above 30°C are projected to climb from about 14 a year in the past (1976–2005) to as many as 50–64 by 2051–2080, putting seniors, outdoor workers, and people without air conditioning at real risk of heat-related illness. Tropical nights — where temperatures never drop below 22°C — go from rare to routine, and the body never gets a chance to cool down overnight.",
  },
  {
    n: "02",
    t: "Flooding & Water",
    d: "Total annual precipitation keeps rising, with more of it falling as intense rain instead of snow. That raises the risk of Red River and Assiniboine River flooding — like the historic 1997 and 2011 floods — while heavier downpours overwhelm city storm drains and wash pollutants into Lake Winnipeg.",
  },
  {
    n: "03",
    t: "Shrinking Winters",
    d: "The frost-free season stretches from about 131 days in the past toward 155–187 days by 2051–2080. A longer growing season sounds like a win, but a shorter, warmer winter disrupts prairie farming, lets pests and invasive species survive the season, and erodes the winter culture Winnipeg is built around.",
  },
];

const HELP_ITEMS = [
  "Walk, cycle, or take the bus instead of driving alone",
  "Eat less meat — especially beef",
  "Turn down the heat and use a programmable thermostat",
  "Unplug electronics and switch to LED bulbs",
  "Reduce, reuse, recycle — and compost food waste",
  "Plant trees and support local green spaces",
  "Buy less stuff — especially fast fashion",
  "Talk about climate change and vote for climate action",
];

const SOURCE_LINKS = [
  ["Climate Atlas of Canada", "climateatlas.ca", "https://climateatlas.ca"],
  ["Winnipeg — City Data", "climateatlas.ca/winnipeg-mb", "https://climateatlas.ca/winnipeg-mb"],
  ["City of Winnipeg Climate Action Plan", "winnipeg.ca/climateaction", "https://www.winnipeg.ca/climateaction"],
  ["Manitoba Climate and Green Plan (2017)", "gov.mb.ca", "https://www.gov.mb.ca/asset_library/en/2017/climategreenplan.pdf"],
  ["Canada's Changing Climate Report (2019)", "changingclimate.ca", "https://changingclimate.ca/site/wp-content/uploads/2019/02/2019-CCCR-REPORT-EN-FINAL.pdf"],
];

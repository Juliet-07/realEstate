/*
 * lib: constants.js
 * author: Favour George
 * Date: June 22, 2020
 */

const __mode = {
  production: true,
  development: false
}
export const MODE = __mode[process.env.NODE_ENV];

export const ROLE_MATCHER = {
  parent: 'Parent',
  teacher: "Teacher",
  admin: "Super Admin",
  accountant: "Finance",
  customer_care: "Support",
  marketing_admin: "Marketing",
  academic_admin: "Academics",
};

export const STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Kastina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nassarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
].sort((a, b) => (a > b) ? 1 : -1);

export const CONSTITUENCY_MATCHER = {
  all: STATES.map(item => item.toLowerCase()),
  nc: ["benue", "fct abjua", "kogi", "kwara", "nasarawa", "niger", "plateau"],
  ne: ["adamawa", "bauchi", "borno", "gombe", "taraba", "yobe"],
  nw: ["kaduna", "katsina", "kano", "kebbi", "sokoto", "jigawa", "zamfara"],
  se: ["abia", "anambra", "ebonyi", "enugu", "imo"],
  ss: ["akwa-ibom", "bayelsa", "cross-river", "delta", "edo", "rivers"],
  sw: ["ekiti", "lagos", "osun", "ondo", "ogun", "oyo"],
};

export const CONSTITUENCY_NAME = {
  all: "All States",
  nc: "North Central",
  ne: "North East",
  nw: "North West",
  se: "South East",
  ss: "South South",
  sw: "South West"
}
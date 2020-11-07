const countryList = [
  {
    code: "AE",
    currency: "AED",
    currencyName: "United Arab Emirates Dirham",
    name: "United Arab Emirates"
  },
  {
    code: "AF",
    currency: "AFN",
    currencyName: "Afghan Afghani",
    name: "Afghanistan"
  },
  {
    code: "AN",
    currency: "ALL",
    currencyName: "Albanian Lek",
    name: "Albania"
  },
  {
    code: "AM",
    currency: "AMD",
    currencyName: "Armenian Dram",
    name: "Armenia"
  },
  {
    code: "CW",
    currency: "ANG",
    currencyName: "Netherlands Antillean Guilder",
    name: "Curaçao"
  },
  {
    code: "SX",
    currency: "ANG",
    currencyName: "Netherlands Antillean Guilder",
    name: "Sint Maarten (Dutch part)"
  },
  {
    code: "AO",
    currency: "AOA",
    currencyName: "Angolan Kwanza",
    name: "Angola"
  },
  {
    code: "AQ",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Antarctica"
  },
  {
    code: "AU",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Australia"
  },
  {
    code: "CC",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Cocos (Keeling) Islands"
  },
  {
    code: "HM",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Heard Island and McDonald Islands"
  },
  {
    code: "KI",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Kiribati"
  },
  {
    code: "NR",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Nauru"
  },
  {
    code: "NF",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Norfolk Island"
  },
  {
    code: "TV",
    currency: "AUD",
    currencyName: "Australian Dollar",
    name: "Tuvalu"
  },
  {
    code: "AW",
    currency: "AWG",
    currencyName: "Aruban Florin",
    name: "Aruba"
  },
  {
    code: "AZ",
    currency: "AZN",
    currencyName: "Azerbaijani Manat",
    name: "Azerbaijan"
  },
  {
    code: "BA",
    currency: "BAM",
    currencyName: "Bosnia-Herzegovina Convertible Mark",
    name: "Bosnia and Herzegovina"
  },
  {
    code: "BA",
    currency: "BAM",
    currencyName: "Bosnia-Herzegovina Convertible Mark",
    name: "Bosnia and Herzegovina"
  },
  {
    code: "BB",
    currency: "BBD",
    currencyName: "Barbadian Dollar",
    name: "Barbados"
  },
  {
    code: "BD",
    currency: "BDT",
    currencyName: "Bangladeshi Taka",
    name: "Bangladesh"
  },
  {
    code: "BG",
    currency: "BGN",
    currencyName: "Bulgarian Lev",
    name: "Bulgaria"
  },
  {
    code: "BH",
    currency: "BHD",
    currencyName: "Bahraini Dinar",
    name: "Bahrain"
  },
  {
    code: "BI",
    currency: "BIF",
    currencyName: "Burundian Franc",
    name: "Burundi"
  },
  {
    code: "BM",
    currency: "BMD",
    currencyName: "Bermudan Dollar",
    name: "Bermuda"
  },
  {
    code: "BN",
    currency: "BND",
    currencyName: "Brunei Dollar",
    name: "Brunei Darussalam"
  },
  {
    code: "SG",
    currency: "BND",
    currencyName: "Brunei Dollar",
    name: "Singapore"
  },
  {
    code: "BO",
    currency: "BOB",
    currencyName: "Bolivian Boliviano",
    name: "Bolivia (Plurinational State of)"
  },
  {
    code: "BR",
    currency: "BRL",
    currencyName: "Brazilian Real",
    name: "Brazil"
  },
  {
    code: "BS",
    currency: "BSD",
    currencyName: "Bahamian Dollar",
    name: "Bahamas"
  },
  {
    code: "BT",
    currency: "BTN",
    currencyName: "Bhutanese Ngultrum",
    name: "Bhutan"
  },
  {
    code: "BW",
    currency: "BWP",
    currencyName: "Botswanan Pula",
    name: "Botswana"
  },
  {
    code: "ZW",
    currency: "BWP",
    currencyName: "Botswanan Pula",
    name: "Zimbabwe"
  },
  {
    code: "BY",
    currency: "BYN",
    currencyName: "Belarusian Ruble",
    name: "Belarus"
  },
  {
    code: "BZ",
    currency: "BZD",
    currencyName: "Belize Dollar",
    name: "Belize"
  },
  {
    code: "CA",
    currency: "CAD",
    currencyName: "Canadian Dollar",
    name: "Canada"
  },
  {
    code: "CD",
    currency: "CDF",
    currencyName: "Congolese Franc",
    name: "Congo (Democratic Republic of the)"
  },
  {
    code: "LI",
    currency: "CHF",
    currencyName: "Swiss Franc",
    name: "Liechtenstein"
  },
  {
    code: "CH",
    currency: "CHF",
    currencyName: "Swiss Franc",
    name: "Switzerland"
  },
  {
    code: "CL",
    currency: "CLP",
    currencyName: "Chilean Peso",
    name: "Chile"
  },
  {
    code: "CN",
    currency: "CNY",
    currencyName: "Chinese Yuan",
    name: "China"
  },
  {
    code: "ZW",
    currency: "CNY",
    currencyName: "Chinese Yuan",
    name: "Zimbabwe"
  },
  {
    code: "CO",
    currency: "COP",
    currencyName: "Colombian Peso",
    name: "Colombia"
  },
  {
    code: "CR",
    currency: "CRC",
    currencyName: "Costa Rican Colón",
    name: "Costa Rica"
  },
  {
    code: "CU",
    currency: "CUP",
    currencyName: "Cuban Peso",
    name: "Cuba"
  },
  {
    code: "CV",
    currency: "CVE",
    currencyName: "Cape Verdean Escudo",
    name: "Cabo Verde"
  },
  {
    code: "CZ",
    currency: "CZK",
    currencyName: "Czech Republic Koruna",
    name: "Czech Republic"
  },
  {
    code: "CZ",
    currency: "CZK",
    currencyName: "Czech Republic Koruna",
    name: "Czech Republic"
  },
  {
    code: "DJ",
    currency: "DJF",
    currencyName: "Djiboutian Franc",
    name: "Djibouti"
  },
  {
    code: "DK",
    currency: "DKK",
    currencyName: "Danish Krone",
    name: "Denmark"
  },
  {
    code: "FO",
    currency: "DKK",
    currencyName: "Danish Krone",
    name: "Faroe Islands"
  },
  {
    code: "GL",
    currency: "DKK",
    currencyName: "Danish Krone",
    name: "Greenland"
  },
  {
    code: "DO",
    currency: "DOP",
    currencyName: "Dominican Peso",
    name: "Dominican Republic"
  },
  {
    code: "DZ",
    currency: "DZD",
    currencyName: "Algerian Dinar",
    name: "Algeria"
  },
  {
    code: "EH",
    currency: "DZD",
    currencyName: "Algerian Dinar",
    name: "Western Sahara"
  },
  {
    code: "EG",
    currency: "EGP",
    currencyName: "Egyptian Pound",
    name: "Egypt"
  },
  {
    code: "ER",
    currency: "ERN",
    currencyName: "Eritrean Nakfa",
    name: "Eritrea"
  },
  {
    code: "ET",
    currency: "ETB",
    currencyName: "Ethiopian Birr",
    name: "Ethiopia"
  },
  {
    code: "AX",
    currency: "EUR",
    currencyName: "Euro",
    name: "Åland Islands"
  },
  {
    code: "AD",
    currency: "EUR",
    currencyName: "Euro",
    name: "Andorra"
  },
  {
    code: "AT",
    currency: "EUR",
    currencyName: "Euro",
    name: "Austria"
  },
  {
    code: "BE",
    currency: "EUR",
    currencyName: "Euro",
    name: "Belgium"
  },
  {
    code: "CY",
    currency: "EUR",
    currencyName: "Euro",
    name: "Cyprus"
  },
  {
    code: "EE",
    currency: "EUR",
    currencyName: "Euro",
    name: "Estonia"
  },
  {
    code: "FI",
    currency: "EUR",
    currencyName: "Euro",
    name: "Finland"
  },
  {
    code: "GF",
    currency: "EUR",
    currencyName: "Euro",
    name: "French Guiana"
  },
  {
    code: "TF",
    currency: "EUR",
    currencyName: "Euro",
    name: "French Southern Territories"
  },
  {
    code: "DE",
    currency: "EUR",
    currencyName: "Euro",
    name: "Germany"
  },
  {
    code: "GE",
    currency: "EUR",
    currencyName: "Euro",
    name: "Greece"
  },
  {
    code: "GP",
    currency: "EUR",
    currencyName: "Euro",
    name: "Guadeloupe"
  },
  {
    code: "VA",
    currency: "EUR",
    currencyName: "Euro",
    name: "Holy See"
  },
  {
    code: "IE",
    currency: "EUR",
    currencyName: "Euro",
    name: "Ireland"
  },
  {
    code: "IT",
    currency: "EUR",
    currencyName: "Euro",
    name: "Italy"
  },
  {
    code: "LV",
    currency: "EUR",
    currencyName: "Euro",
    name: "Latvia"
  },
  {
    code: "LT",
    currency: "EUR",
    currencyName: "Euro",
    name: "Lithuania"
  },
  {
    code: "LU",
    currency: "EUR",
    currencyName: "Euro",
    name: "Luxembourg"
  },
  {
    code: "MT",
    currency: "EUR",
    currencyName: "Euro",
    name: "Malta"
  },
  {
    code: "MQ",
    currency: "EUR",
    currencyName: "Euro",
    name: "Martinique"
  },
  {
    code: "YT",
    currency: "EUR",
    currencyName: "Euro",
    name: "Mayotte"
  },
  {
    code: "MC",
    currency: "EUR",
    currencyName: "Euro",
    name: "Monaco"
  },
  {
    code: "ME",
    currency: "EUR",
    currencyName: "Euro",
    name: "Montenegro"
  },
  {
    code: "NL",
    currency: "EUR",
    currencyName: "Euro",
    name: "Netherlands"
  },
  {
    code: "PT",
    currency: "EUR",
    currencyName: "Euro",
    name: "Portugal"
  },
  {
    code: "XK",
    currency: "EUR",
    currencyName: "Euro",
    name: "Republic of Kosovo"
  },
  {
    code: "RE",
    currency: "EUR",
    currencyName: "Euro",
    name: "Réunion"
  },
  {
    code: "BL",
    currency: "EUR",
    currencyName: "Euro",
    name: "Saint Barthélemy"
  },
  {
    code: "MF",
    currency: "EUR",
    currencyName: "Euro",
    name: "Saint Martin (French part)"
  },
  {
    code: "PM",
    currency: "EUR",
    currencyName: "Euro",
    name: "Saint Pierre and Miquelon"
  },
  {
    code: "SM",
    currency: "EUR",
    currencyName: "Euro",
    name: "San Marino"
  },
  {
    code: "SK",
    currency: "EUR",
    currencyName: "Euro",
    name: "Slovakia"
  },
  {
    code: "SI",
    currency: "EUR",
    currencyName: "Euro",
    name: "Slovenia"
  },
  {
    code: "ES",
    currency: "EUR",
    currencyName: "Euro",
    name: "Spain"
  },
  {
    code: "FJ",
    currency: "FJD",
    currencyName: "Fijian Dollar",
    name: "Fiji"
  },
  {
    code: "FK",
    currency: "FKP",
    currencyName: "Falkland Islands Pound",
    name: "Falkland Islands (Malvinas)"
  },
  {
    code: "AQ",
    currency: "GBP",
    currencyName: "British Pound Sterling",
    name: "Antarctica"
  },
  {
    code: "GG",
    currency: "GBP",
    currencyName: "British Pound Sterling",
    name: "Guernsey"
  },
  {
    code: "IM",
    currency: "GBP",
    currencyName: "British Pound Sterling",
    name: "Isle of Man"
  },
  {
    code: "JE",
    currency: "GBP",
    currencyName: "British Pound Sterling",
    name: "Jersey"
  },
  {
    code: "GS",
    currency: "GBP",
    currencyName: "British Pound Sterling",
    name: "South Georgia and the South Sandwich Islands"
  },
  {
    code: "GB",
    currency: "GBP",
    currencyName: "British Pound Sterling",
    name: "United Kingdom of Great Britain and Northern Ireland"
  },
  {
    code: "GE",
    currency: "GEL",
    currencyName: "Georgian Lari",
    name: "Georgia"
  },
  {
    code: "GH",
    currency: "GHS",
    currencyName: "Ghanaian Cedi",
    name: "Ghana"
  },
  {
    code: "GI",
    currency: "GIP",
    currencyName: "Gibraltar Pound",
    name: "Gibraltar"
  },
  {
    code: "GM",
    currency: "GMD",
    currencyName: "Gambian Dalasi",
    name: "Gambia"
  },
  {
    code: "GN",
    currency: "GNF",
    currencyName: "Guinean Franc",
    name: "Guinea"
  },
  {
    code: "GT",
    currency: "GTQ",
    currencyName: "Guatemalan Quetzal",
    name: "Guatemala"
  },
  {
    code: "GY",
    currency: "GYD",
    currencyName: "Guyanaese Dollar",
    name: "Guyana"
  },
  {
    code: "HK",
    currency: "HKD",
    currencyName: "Hong Kong Dollar",
    name: "Hong Kong"
  },
  {
    code: "HN",
    currency: "HNL",
    currencyName: "Honduran Lempira",
    name: "Honduras"
  },
  {
    code: "HR",
    currency: "HRK",
    currencyName: "Croatian Kuna",
    name: "Croatia"
  },
  {
    code: "HT",
    currency: "HTG",
    currencyName: "Haitian Gourde",
    name: "Haiti"
  },
  {
    code: "HU",
    currency: "HUF",
    currencyName: "Hungarian Forint",
    name: "Hungary"
  },
  {
    code: "ID",
    currency: "IDR",
    currencyName: "Indonesian Rupiah",
    name: "Indonesia"
  },
  {
    code: "IL",
    currency: "ILS",
    currencyName: "Israeli New Sheqel",
    name: "Israel"
  },
  {
    code: "PS",
    currency: "ILS",
    currencyName: "Israeli New Sheqel",
    name: "Palestine, State of"
  },
  {
    code: "BT",
    currency: "INR",
    currencyName: "Indian Rupee",
    name: "Bhutan"
  },
  {
    code: "IQ",
    currency: "IQD",
    currencyName: "Iraqi Dinar",
    name: "Iraq"
  },
  {
    code: "IR",
    currency: "IRR",
    currencyName: "Iranian Rial",
    name: "Iran (Islamic Republic of)"
  },
  {
    code: "IS",
    currency: "ISK",
    currencyName: "Icelandic Króna",
    name: "Iceland"
  },
  {
    code: "JM",
    currency: "JMD",
    currencyName: "Jamaican Dollar",
    name: "Jamaica"
  },
  {
    code: "JO",
    currency: "JOD",
    currencyName: "Jordanian Dinar",
    name: "Jordan"
  },
  {
    code: "JP",
    currency: "JPY",
    currencyName: "Japanese Yen",
    name: "Japan"
  },
  {
    code: "KE",
    currency: "KES",
    currencyName: "Kenyan Shilling",
    name: "Kenya"
  },
  {
    code: "KG",
    currency: "KGS",
    currencyName: "Kyrgystani Som",
    name: "Kyrgyzstan"
  },
  {
    code: "KH",
    currency: "KHR",
    currencyName: "Cambodian Riel",
    name: "Cambodia"
  },
  {
    code: "KM",
    currency: "KMF",
    currencyName: "Comorian Franc",
    name: "Comoros"
  },
  {
    code: "KP",
    currency: "KPW",
    currencyName: "North Korean Won",
    name: "Korea (Democratic People's Republic of)"
  },
  {
    code: "KR",
    currency: "KRW",
    currencyName: "South Korean Won",
    name: "Korea (Republic of)"
  },
  {
    code: "KY",
    currency: "KYD",
    currencyName: "Cayman Islands Dollar",
    name: "Cayman Islands"
  },
  {
    code: "KZ",
    currency: "KZT",
    currencyName: "Kazakhstani Tenge",
    name: "Kazakhstan"
  },
  {
    code: "LA",
    currency: "LAK",
    currencyName: "Laotian Kip",
    name: "Lao People's Democratic Republic"
  },
  {
    code: "LB",
    currency: "LBP",
    currencyName: "Lebanese Pound",
    name: "Lebanon"
  },
  {
    code: "LK",
    currency: "LKR",
    currencyName: "Sri Lankan Rupee",
    name: "Sri Lanka"
  },
  {
    code: "LR",
    currency: "LRD",
    currencyName: "Liberian Dollar",
    name: "Liberia"
  },
  {
    code: "LS",
    currency: "LSL",
    currencyName: "Lesotho Loti",
    name: "Lesotho"
  },
  {
    code: "LY",
    currency: "LYD",
    currencyName: "Libyan Dinar",
    name: "Libya"
  },
  {
    code: "MA",
    currency: "MAD",
    currencyName: "Moroccan Dirham",
    name: "Morocco"
  },
  {
    code: "MD",
    currency: "MDL",
    currencyName: "Moldovan Leu",
    name: "Moldova (Republic of)"
  },
  {
    code: "MG",
    currency: "MGA",
    currencyName: "Malagasy Ariary",
    name: "Madagascar"
  },
  {
    code: "MG",
    currency: "MGA",
    currencyName: "Malagasy Ariary",
    name: "Madagascar"
  },
  {
    code: "MK",
    currency: "MKD",
    currencyName: "Macedonian Denar",
    name: "Macedonia (the former Yugoslav Republic of)"
  },
  {
    code: "MM",
    currency: "MMK",
    currencyName: "Myanma Kyat",
    name: "Myanmar"
  },
  {
    code: "MN",
    currency: "MNT",
    currencyName: "Mongolian Tugrik",
    name: "Mongolia"
  },
  {
    code: "MO",
    currency: "MOP",
    currencyName: "Macanese Pataca",
    name: "Macao"
  },
  {
    code: "MR",
    currency: "MUR",
    currencyName: "Mauritian Rupee",
    name: "Mauritania"
  },
  {
    code: "MV",
    currency: "MVR",
    currencyName: "Maldivian Rufiyaa",
    name: "Maldives"
  },
  {
    code: "MX",
    currency: "MXN",
    currencyName: "Malawian Kwacha",
    name: "Mexico"
  },
  {
    code: "MW",
    currency: "MWK",
    currencyName: "Mexican Peso",
    name: "Malawi"
  },
  {
    code: "MY",
    currency: "MYR",
    currencyName: "Malaysian Ringgit",
    name: "Malaysia"
  },
  {
    code: "MZ",
    currency: "MZN",
    currencyName: "Mozambican Metical",
    name: "Mozambique"
  },
  {
    code: "NA",
    currency: "NAD",
    currencyName: "Namibian Dollar",
    name: "Namibia"
  },
  {
    code: "NG",
    currency: "NGN",
    currencyName: "Nigerian Naira",
    name: "Nigeria"
  },
  {
    code: "NI",
    currency: "NIO",
    currencyName: "Nicaraguan Córdoba",
    name: "Nicaragua"
  },
  {
    code: "BV",
    currency: "NOK",
    currencyName: "Norwegian Krone",
    name: "Bouvet Island"
  },
  {
    code: "NO",
    currency: "NOK",
    currencyName: "Norwegian Krone",
    name: "Norway"
  },
  {
    code: "SJ",
    currency: "NOK",
    currencyName: "Norwegian Krone",
    name: "Svalbard and Jan Mayen"
  },
  {
    code: "NP",
    currency: "NPR",
    currencyName: "Nepalese Rupee",
    name: "Nepal"
  },
  {
    code: "CK",
    currency: "NZD",
    currencyName: "New Zealand Dollar",
    name: "Cook Islands"
  },
  {
    code: "NZ",
    currency: "NZD",
    currencyName: "New Zealand Dollar",
    name: "New Zealand"
  },
  {
    code: "NU",
    currency: "NZD",
    currencyName: "New Zealand Dollar",
    name: "Niue"
  },
  {
    code: "PN",
    currency: "NZD",
    currencyName: "New Zealand Dollar",
    name: "Pitcairn"
  },
  {
    code: "TK",
    currency: "NZD",
    currencyName: "New Zealand Dollar",
    name: "Tokelau"
  },
  {
    code: "OM",
    currency: "OMR",
    currencyName: "Omani Rial",
    name: "Oman"
  },
  {
    code: "PA",
    currency: "PAB",
    currencyName: "Panamanian Balboa",
    name: "Panama"
  },
  {
    code: "PE",
    currency: "PEN",
    currencyName: "Peruvian Nuevo Sol",
    name: "Peru"
  },
  {
    code: "PG",
    currency: "PGK",
    currencyName: "Papua New Guinean Kina",
    name: "Papua New Guinea"
  },
  {
    code: "PH",
    currency: "PHP",
    currencyName: "Philippine Peso",
    name: "Philippines"
  },
  {
    code: "PK",
    currency: "PKR",
    currencyName: "Pakistani Rupee",
    name: "Pakistan"
  },
  {
    code: "PL",
    currency: "PLN",
    currencyName: "Polish Zloty",
    name: "Poland"
  },
  {
    code: "PY",
    currency: "PYG",
    currencyName: "Paraguayan Guarani",
    name: "Paraguay"
  },
  {
    code: "QA",
    currency: "QAR",
    currencyName: "Qatari Rial",
    name: "Qatar"
  },
  {
    code: "RO",
    currency: "RON",
    currencyName: "Romanian Leu",
    name: "Romania"
  },
  {
    code: "RS",
    currency: "RSD",
    currencyName: "Serbian Dinar",
    name: "Serbia"
  },
  {
    code: "RU",
    currency: "RUB",
    currencyName: "Russian Ruble",
    name: "Russian Federation"
  },
  {
    code: "RW",
    currency: "RWF",
    currencyName: "Rwandan Franc",
    name: "Rwanda"
  },
  {
    code: "SA",
    currency: "SAR",
    currencyName: "Saudi Riyal",
    name: "Saudi Arabia"
  },
  {
    code: "SB",
    currency: "SBD",
    currencyName: "Solomon Islands Dollar",
    name: "Solomon Islands"
  },
  {
    code: "SC",
    currency: "SCR",
    currencyName: "Seychellois Rupee",
    name: "Seychelles"
  },
  {
    code: "SD",
    currency: "SDG",
    currencyName: "Sudanese Pound",
    name: "Sudan"
  },
  {
    code: "SE",
    currency: "SEK",
    currencyName: "Swedish Krona",
    name: "Sweden"
  },
  {
    code: "BN",
    currency: "SGD",
    currencyName: "Singapore Dollar",
    name: "Brunei Darussalam"
  },
  {
    code: "SG",
    currency: "SGD",
    currencyName: "Singapore Dollar",
    name: "Singapore"
  },
  {
    code: "SH",
    currency: "SHP",
    currencyName: "Saint Helena Pound",
    name: "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    code: "SL",
    currency: "SLL",
    currencyName: "Sierra Leonean Leone",
    name: "Sierra Leone"
  },
  {
    code: "SO",
    currency: "SOS",
    currencyName: "Somali Shilling",
    name: "Somalia"
  },
  {
    code: "SR",
    currency: "SRD",
    currencyName: "Surinamese Dollar",
    name: "Suriname"
  },
  {
    code: "SS",
    currency: "SSP",
    currencyName: "South Sudanese Pound",
    name: "South Sudan"
  },
  {
    code: "ST",
    currency: "STD",
    currencyName: "São Tomé and Príncipe Dobra (pre-2018)",
    name: "Sao Tome and Principe"
  },
  {
    code: "SY",
    currency: "SYP",
    currencyName: "Syrian Pound",
    name: "Syrian Arab Republic"
  },
  {
    code: "SZ",
    currency: "SZL",
    currencyName: "Swazi Lilangeni",
    name: "Swaziland"
  },
  {
    code: "TH",
    currency: "THB",
    currencyName: "Thai Baht",
    name: "Thailand"
  },
  {
    code: "TJ",
    currency: "TJS",
    currencyName: "Tajikistani Somoni",
    name: "Tajikistan"
  },
  {
    code: "TM",
    currency: "TMT",
    currencyName: "Turkmenistani Manat",
    name: "Turkmenistan"
  },
  {
    code: "TN",
    currency: "TND",
    currencyName: "Tunisian Dinar",
    name: "Tunisia"
  },
  {
    code: "TO",
    currency: "TOP",
    currencyName: "Tongan Pa'anga",
    name: "Tonga"
  },
  {
    code: "TR",
    currency: "TRY",
    currencyName: "Turkish Lira",
    name: "Turkey"
  },
  {
    code: "TT",
    currency: "TTD",
    currencyName: "Trinidad and Tobago Dollar",
    name: "Trinidad and Tobago"
  },
  {
    code: "TW",
    currency: "TWD",
    currencyName: "New Taiwan Dollar",
    name: "Taiwan"
  },
  {
    code: "TZ",
    currency: "TZS",
    currencyName: "Tanzanian Shilling",
    name: "Tanzania, United Republic of"
  },
  {
    code: "UA",
    currency: "UAH",
    currencyName: "Ukrainian Hryvnia",
    name: "Ukraine"
  },
  {
    code: "UG",
    currency: "UGX",
    currencyName: "Ugandan Shilling",
    name: "Uganda"
  },
  {
    code: "AS",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "American Samoa"
  },
  {
    code: "BQ",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Bonaire, Sint Eustatius and Saba"
  },
  {
    code: "IO",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "British Indian Ocean Territory"
  },
  {
    code: "UM",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "United States Minor Outlying Islands"
  },
  {
    code: "VG",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Virgin Islands (British)"
  },
  {
    code: "VI",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Virgin Islands (U.S.)"
  },
  {
    code: "KH",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Cambodia"
  },
  {
    code: "EC",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Ecuador"
  },
  {
    code: "SV",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "El Salvador"
  },
  {
    code: "MH",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Marshall Islands"
  },
  {
    code: "FM",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Micronesia (Federated States of)"
  },
  {
    code: "MP",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Northern Mariana Islands"
  },
  {
    code: "PW",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Palau"
  },
  {
    code: "PA",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Panama"
  },
  {
    code: "PR",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Puerto Rico"
  },
  {
    code: "TL",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Timor-Leste"
  },
  {
    code: "TC",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "Turks and Caicos Islands"
  },
  {
    code: "US",
    currency: "USD",
    currencyName: "United States Dollar",
    name: "United States of America"
  },
  {
    code: "UY",
    currency: "UYU",
    currencyName: "Uruguayan Peso",
    name: "Uruguay"
  },
  {
    code: "UZ",
    currency: "UZS",
    currencyName: "Uzbekistan Som",
    name: "Uzbekistan"
  },
  {
    code: "VE",
    currency: "VEF",
    currencyName: "Venezuelan Bolívar Fuerte (Old)",
    name: "Venezuela (Bolivarian Republic of)"
  },
  {
    code: "VN",
    currency: "VND",
    currencyName: "Vietnamese Dong",
    name: "Viet Nam"
  },
  {
    code: "VU",
    currency: "VUV",
    currencyName: "Vanuatu Vatu",
    name: "Vanuatu"
  },
  {
    code: "WS",
    currency: "WST",
    currencyName: "Samoan Tala",
    name: "Samoa"
  },
  {
    code: "CM",
    currency: "XAF",
    currencyName: "CFA Franc BEAC",
    name: "Cameroon"
  },
  {
    code: "CF",
    currency: "XAF",
    currencyName: "CFA Franc BEAC",
    name: "Central African Republic"
  },
  {
    code: "TD",
    currency: "XAF",
    currencyName: "CFA Franc BEAC",
    name: "Chad"
  },
  {
    code: "CG",
    currency: "XAF",
    currencyName: "CFA Franc BEAC",
    name: "Congo"
  },
  {
    code: "GQ",
    currency: "XAF",
    currencyName: "CFA Franc BEAC",
    name: "Equatorial Guinea"
  },
  {
    code: "GA",
    currency: "XAF",
    currencyName: "CFA Franc BEAC",
    name: "Gabon"
  },
  {
    code: "AI",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Anguilla"
  },
  {
    code: "AG",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Antigua and Barbuda"
  },
  {
    code: "DM",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Dominica"
  },
  {
    code: "GD",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Grenada"
  },
  {
    code: "MS",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Montserrat"
  },
  {
    code: "KN",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Saint Kitts and Nevis"
  },
  {
    code: "LC",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Saint Lucia"
  },
  {
    code: "VC",
    currency: "XCD",
    currencyName: "East Caribbean Dollar",
    name: "Saint Vincent and the Grenadines"
  },
  {
    code: "BJ",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Benin"
  },
  {
    code: "BF",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Burkina Faso"
  },
  {
    code: "GW",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Guinea-Bissau"
  },
  {
    code: "BJ",
    currency: "CI",
    currencyName: "CFA Franc BCEAO",
    name: "Côte d'Ivoire"
  },
  {
    code: "ML",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Mali"
  },
  {
    code: "NE",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Niger"
  },
  {
    code: "SN",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Senegal"
  },
  {
    code: "TG",
    currency: "XOF",
    currencyName: "CFA Franc BCEAO",
    name: "Togo"
  },
  {
    code: "PF",
    currency: "XPF",
    currencyName: "CFP Franc",
    name: "French Polynesia"
  },
  {
    code: "NC",
    currency: "XPF",
    currencyName: "CFP Franc",
    name: "New Caledonia"
  },
  {
    code: "WF",
    currency: "XPF",
    currencyName: "CFP Franc",
    name: "Wallis and Futuna"
  },
  {
    code: "YE",
    currency: "YER",
    currencyName: "Yemeni Rial",
    name: "Yemen"
  },
  {
    code: "LS",
    currency: "ZAR",
    currencyName: "South African Rand",
    name: "Lesotho"
  },
  {
    code: "NA",
    currency: "ZAR",
    currencyName: "South African Rand",
    name: "Namibia"
  },
  {
    code: "ZA",
    currency: "ZAR",
    currencyName: "South African Rand",
    name: "South Africa"
  },
  {
    code: "ZM",
    currency: "ZMW",
    currencyName: "Zambian Kwacha",
    name: "Zambia"
  }
];

export const countries = countryList.map(item => item.name).sort((a, b) => (a > b) ? 1 : -1)

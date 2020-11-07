/* export const dashboardCardData = [
  {
    text: "Total Registered Users",
    value: 2400,
  },
  {
    text: "Total Petitions Signed",
    value: 1400,
  },
  {
    text: "Total Recalled Senators",
    value: 3,
  },
  {
    text: "Total Recalled Legislators",
    value: 23,
  },
]; */

export const dashboardCardData = (data) => {
  return [
    {
      text: "Total Registered Users",
      value: data.getTotalRegisteredUsers || 0,
    },
    {
      text: "Total Petitions Signed",
      value: data.getUsersSignedPetition || 0,
    },
    {
      text: "Total Recalled Senators",
      value: data.getTotalRecalledSenators || 0,
    },
    {
      text: "Total Recalled Legislators",
      value: data.getTotalRecalledLegislators || 0,
    },
  ];
};

import React from "react";
import { IconButton } from "../../../components/Header/header.style";
import { VscEye as ViewPetitionIcon } from "react-icons/vsc";
import { MdEdit as EditRecordIcon } from "react-icons/md";

export const SENATOR_TABLE_HEAD = [
  "Name",
  "State",
  "Constituency",
  "Party",
  "Years",
  "Petitions",
  "Actions",
];

export const SENATOR_TABLE_BODY = (docs) => {
  let senatorsList = [];
  docs.map(({ name, constituency }) => {
    senatorsList = [
      ...senatorsList,
      {
        name,
        state: "Abia",
        constituency,
        party: "YDP",
        years: "2",
        petitions: "N/A",
        actions: (
          <div className="action_btns">
            <IconButton title={"View Petition"}>
              <ViewPetitionIcon />
            </IconButton>
            <IconButton title={"Edit Record"}>
              <EditRecordIcon />
            </IconButton>
          </div>
        ),
      },
    ];
  });

  return senatorsList;
};

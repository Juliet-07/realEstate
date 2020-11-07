import React from "react";
import { useQuery } from "@apollo/client";
import { DashboardCardWrap } from "./style";
import { dashboardCardData } from "./card-data";
import { H2, H4 } from "../../../../components/FontSize/styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { OVERVIEW_CARDS } from "../../../../lib/queries/senators/overview.gql";

const DashboardCards = () => {
  const [myCardData, setCardData] = React.useState([]);
  const { loading, error, data } = useQuery(OVERVIEW_CARDS, {
    onCompleted: (data) => {
      setCardData(dashboardCardData(data));
    },
  });

  if (loading) return <p>loading....</p>;

  return (
    <DashboardCardWrap>
      {!!myCardData.length &&
        myCardData.map((cardData) => (
          <FlexibleDiv
            justifyContent="space-evenly"
            alignItems="flex-start"
            className={"card-data__wrap"}
          >
            <aside className={"card-data"}>
              <H4>{cardData.text}</H4>
              <H2>{cardData.value}</H2>
            </aside>
          </FlexibleDiv>
        ))}
    </DashboardCardWrap>
  );
};

export default DashboardCards;

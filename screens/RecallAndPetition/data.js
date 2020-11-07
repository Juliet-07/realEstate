import { generateID } from "../../lib/generateID";
import DummyImage from "../../assets/images/nelson-mandela.jpg";
import { FlexibleDiv } from "../../components/Box/styles";
import Button from "../../components/Button";
import React from "react";

export const getListData = (listArray, filterText, handleSignPetition) => {
  let filteredList = listArray.filter((listItem) =>
    listItem.constituency.includes(filterText)
  );

  if (filteredList.length) {
    return (
      <>
        <h5>{filterText.toUpperCase()}</h5>

        <aside className="card_wrap" key={generateID(12)}>
          {filteredList.map((item) => (
            <div className={"card"}>
              <div className={"image_wrap"}>
                {item.imageSource ? (
                  <img src={item.imageSource} alt={item.name} />
                ) : (
                  <img src={DummyImage} alt={item.name} />
                )}
              </div>

              <FlexibleDiv
                flexDir={"column"}
                alignItems={"center"}
                className="content_wrap"
              >
                <h6>{item.name}</h6>

                <section className="flexed">
                  <aside>
                    <p>
                      <strong>Constituency:</strong> {item.constituency}
                    </p>
                    <p>
                      <strong>State:</strong> {filterText}
                    </p>
                  </aside>

                  <aside>
                    <p>
                      <strong>#Years:</strong> {item.totalYears || 2}
                    </p>
                    <p>
                      <strong>Party:</strong> {item.party || "NA"}
                    </p>
                  </aside>
                </section>

                <p className="totalSigned">
                  Total Petitions: <strong>{item.totalPetition || 0}</strong>
                </p>

                <Button
                  type={"button"}
                  text={"Sign Petition"}
                  click={() => handleSignPetition(item)}
                />
              </FlexibleDiv>
            </div>
          ))}
        </aside>
      </>
    );
  }
};

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import { ModalContentWrap, RecallAndPetitionWrap } from "./styles";
import { useRouter } from "next/router";
import { CONSTITUENCY_MATCHER, CONSTITUENCY_NAME } from "../../lib/constants";
import { useQuery } from "@apollo/client";
import { GET_ALL_SENATORS } from "../../lib/queries/recall.gql";
import { PETITION_SENATOR } from "../../lib/queries/recall/index.gql";
import Loader from "../../components/Loaders";
import ErrorPage from "../ErrorPage";
import { FlexibleDiv } from "../../components/Box/styles";
import { generateID } from "../../lib/generateID";
import Divider from "../../components/Dividers/index.component";
import { getListData } from "./data";
import { GeoLocation } from "../LandingPage/SignPetitionSummary/sign-petition-data";
import Link from "next/link";
import Modal from "../../components/Modal";
import DummyImage from "../../assets/images/nelson-mandela.jpg";
import Button from "../../components/Button";
import { ToastMessage, type } from "../../components/ToastMessage";

const RecallAndPetition = () => {
  const [showModal, setShowModal] = useState(false);
  const [stateData, setStateData] = useState({});
  const router = useRouter();
  const { query } = router;
  const queryFilter = query.qs || "all";
  let queriedStates = CONSTITUENCY_MATCHER[queryFilter];
  const { loading, error, data } = useQuery(GET_ALL_SENATORS);
  const [
    onAddPetition,
    { error: petitionError, data: myData, loading: mutationLoading },
  ] = useMutation(PETITION_SENATOR);

  if (loading) return <Loader color={"#003333"} fullPage />;
  if (error) return <ErrorPage />;

  let { docs: senatorsList } = data && data.getSenators;

  senatorsList = senatorsList.filter((data) => {
    if (
      queriedStates.includes(
        data.constituency.trim().replace(/\s+/g, " ").split(" ")[0]
      )
    ) {
      return data;
    }
  });

  const handleClose = () => setShowModal(false);

  const handleSignPetition = (data) => {
    setShowModal(true);
    setStateData(data);
    // onAddPetition({ variables: { legislatureId: data._id } });
  };

  return (
    <GeneralLayout>
      <RecallAndPetitionWrap>
        <header>
          <div className="overlay" />

          <section>
            <h3>
              Recall Bad Performing Senators & House of Representative Members
            </h3>
          </section>
        </header>

        <main className="main">
          <section className="state">
            <h2>{CONSTITUENCY_NAME[queryFilter]}</h2>
          </section>

          <FlexibleDiv className="state_chips">
            {GeoLocation.map((data) => (
              <Link href={`/recall?qs=${data.query}`}>
                <a
                  className={`${queryFilter === data.query ? "isActive" : ""}`}
                >
                  <h3>{data.query.toUpperCase()}</h3>
                </a>
              </Link>
            ))}
          </FlexibleDiv>

          <Divider />

          <main className={"display_pane"}>
            {queriedStates.map((state) => (
              <FlexibleDiv
                flexDir={"column"}
                alignItems={"flex-start"}
                key={generateID(12)}
              >
                {getListData(senatorsList, state, handleSignPetition)}
              </FlexibleDiv>
            ))}
          </main>
        </main>

        {showModal && (
          <Modal show={showModal} handleClose={handleClose}>
            <ModalContentWrap
              flexDir={"column"}
              alignItems={"center"}
              className={"modal_wrap"}
            >
              <div className={"top_content_wrap"}>
                <div className={"image_wrap__modal"}>
                  {<img src={stateData.imageSource} alt={stateData.name} /> || (
                    <img src={DummyImage} alt={stateData.name} />
                  )}
                </div>
                <div className={"top_content_name_wrap"}>
                  <h6>Sen. {stateData.name}</h6>
                  <p>{stateData.constituency.toUpperCase()}</p>
                </div>
              </div>

              <h5 className={"decree"}>
                I support the recall of <strong>Sen. {stateData.name}</strong>{" "}
                Representing my constituency,{" "}
                <span>{stateData.constituency.toUpperCase()}</span>.
              </h5>

              <Button
                loading={mutationLoading}
                type={"button"}
                text={"Submit Petition"}
                click={async () => {
                  try {
                    await onAddPetition({
                      variables: { legislatureId: stateData._id },
                      refetchQueries: [{ query: GET_ALL_SENATORS }],
                    });
                    handleClose();
                  } catch (error) {
                    ToastMessage(type.ERROR, error.message);
                    handleClose();
                  }
                }}
              />
            </ModalContentWrap>
          </Modal>
        )}
      </RecallAndPetitionWrap>
    </GeneralLayout>
  );
};

export default RecallAndPetition;

import React from "react";

import { Column, Row, Img, Text, Stack, List, Button } from "components";
import Dashboardinformation from "components/Dashboardinformation";
import Pagefilter from "components/Pagefilter";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    window.location.href =
      "https://docs.adjutor.io/introduction/what-is-adjutor";
  }
  function editUserProfile() {
    navigate("/usersgeneraldetails");
  }
  function gotToUserProfile() {
    navigate("/usersgeneraldetails");
  }
  function navigateTolendsqr() {
    window.location.href = "https://www.lendsqr.com/";
  }
  function goToUserListFiltered() {
    navigate("/usersshowingfilters");
  }
  function goToUserListFiltered() {
    navigate("/usersshowingfilters");
  }
  function goToUserListFiltered() {
    navigate("/usersshowingfilters");
  }
  function goToUserListFiltered() {
    navigate("/usersshowingfilters");
  }

  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-worksans items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[183px] pb-[266px] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[17px] p-[26px] shadow-bs3 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1350px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_group.png"
                  className="common-pointer max-w-[100%] w-[11%]"
                  onClick={goToUserListFiltered}
                  alt="logo"
                />
                <Row className="bg-white_A700_6c border border-indigo_800_6c border-solid flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-center justify-center md:ml-[115px] ml-[168px] sm:mx-[0] my-[4px] md:pl-[13px] sm:pl-[15px] pl-[20px] rounded-radius8 sm:w-[100%] w-[30%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600_99 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Search for anything
                  </Text>
                  <Stack className="bg-cyan_400 h-[40px] sm:ml-[101px] md:ml-[130px] ml-[190px] p-[13px] sm:p-[6px] md:p-[8px] relative rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[15%]">
                    <Img
                      src="images/img_search.svg"
                      className="absolute h-[14px] inset-[0] justify-center m-[auto] max-w-[100%] w-[24%]"
                      alt="search"
                    />
                  </Stack>
                </Row>
                <a
                  href={"javascript:"}
                  className="common-pointer font-normal font-roboto sm:ml-[190px] md:ml-[245px] ml-[357px] not-italic text-[16px] text-indigo_800 underline w-[auto]"
                  onClick={handleNavigate4}
                  rel="noreferrer"
                >
                  Docs
                </a>
                <Img
                  src="images/img_notification.svg"
                  className="sm:h-[14px] md:h-[18px] h-[26px] max-w-[100%] sm:ml-[25px] md:ml-[32px] ml-[47px] sm:w-[13px] md:w-[17px] w-[26px]"
                  alt="notification"
                />
                <Img
                  src="images/img_image4.png"
                  className="common-pointer sm:h-[26px] md:h-[34px] h-[48px] sm:ml-[15px] md:ml-[20px] ml-[30px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                  onClick={gotToUserProfile}
                  alt="imageFour"
                />
                <Text
                  className="common-pointer font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] text-indigo_800 w-[auto]"
                  as="h5"
                  variant="h5"
                  onClick={gotToUserProfile}
                >
                  Adedeji
                </Text>
                <Img
                  src="images/img_npdropdown615.svg"
                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[4px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="npdropdown615"
                />
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col justify-start max-w-[1037px] md:ml-[236px] ml-[auto] mr-[auto] sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-medium text-indigo_800 w-[auto]"
              as="h2"
              variant="h2"
            >
              Users
            </Text>
            <Dashboardinformation className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]" />
            <Pagefilter className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[372px] md:mt-[481px] mt-[700px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;

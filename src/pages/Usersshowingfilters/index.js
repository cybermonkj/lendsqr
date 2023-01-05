import React from "react";

import { Column, Row, Img, Text, Stack, List, Button, Line } from "components";
import Dashboardinformation from "components/Dashboardinformation";
import Pagefilter from "components/Pagefilter";
import { useNavigate } from "react-router-dom";

const UsersshowingfiltersPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://www.lendsqr.com/";
  }
  function handleNavigate1() {
    window.location.href =
      "https://docs.adjutor.io/introduction/what-is-adjutor";
  }
  function handleNavigate2() {
    navigate("/usersgeneraldetails");
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
                  onClick={handleNavigate}
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
                  onClick={handleNavigate1}
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
                  onClick={handleNavigate2}
                  alt="imageFour"
                />
                <Text
                  className="font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] text-indigo_800 w-[auto]"
                  as="h5"
                  variant="h5"
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
            <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius4 shadow-bs1 w-[100%]">
              <Stack className="h-[578px] mb-[2px] relative w-[100%]">
                <Column className="absolute bottom-[8%] flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-indigo_800_19 h-[1px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[32px] md:mt-[41px] mt-[61px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[32px] md:mt-[41px] mt-[61px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]" />
                    <Line className="bg-indigo_800_19 h-[1px] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]" />
                  </Column>
                </Column>
                <Img
                  src="images/img_7.svg"
                  className="absolute bottom-[1%] h-[522px] max-w-[100%] right-[0] w-[3%]"
                  alt="Seven"
                />
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] right-[6%] sm:w-[100%] w-[79%]">
                  <List
                    className="sm:gap-[18px] md:gap-[24px] gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:w-[100%] w-[83%]"
                    orientation="horizontal"
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="flex-grow font-semibold text-bluegray_600 uppercase"
                          variant="body1"
                        >
                          Username
                        </Text>
                        <Img
                          src="images/img_filter.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="filter"
                        />
                      </Row>
                      <Text
                        className="font-normal sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Adedeji
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Debby Ogana
                      </Text>
                      <Text
                        className="font-normal sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Grace Effiom
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tosin Dokunmu
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Grace Effiom
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tosin Dokunmu
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Grace Effiom
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tosin Dokunmu
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Grace Effiom
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                        <Text
                          className="flex-grow font-semibold text-bluegray_600 uppercase"
                          variant="body1"
                        >
                          Email
                        </Text>
                        <Img
                          src="images/img_filter.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="filter One"
                        />
                      </Row>
                      <Text
                        className="font-normal sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        adedeji@lendsqr.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        debby2@irorun.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        grace@lendstar.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        tosin@lendsqr.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        grace@lendstar.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        tosin@lendsqr.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        grace@lendstar.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        tosin@lendsqr.com
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        grace@lendstar.com
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Text
                          className="flex-grow font-semibold text-bluegray_600 uppercase"
                          variant="body1"
                        >
                          Phone number
                        </Text>
                        <Img
                          src="images/img_filter.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="filter Two"
                        />
                      </Row>
                      <Text
                        className="font-normal sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        08078903721
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        08160780928
                      </Text>
                      <Text
                        className="font-normal sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07060780922
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07003309226
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07060780922
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        08060780900
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07060780922
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        08060780900
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07060780922
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="flex-grow font-semibold text-bluegray_600 uppercase"
                          variant="body1"
                        >
                          Date joined
                        </Text>
                        <Img
                          src="images/img_filter.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="filter Three"
                        />
                      </Row>
                      <Text
                        className="font-normal sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May 15, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 10, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 10, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 10, 2020 10:00 AM
                      </Text>
                      <Text
                        className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                    </Column>
                  </List>
                  <Column className="flex flex-col md:ml-[24px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <Text
                        className="flex-grow font-semibold text-bluegray_600 uppercase"
                        variant="body1"
                      >
                        Status
                      </Text>
                      <Img
                        src="images/img_filter.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="filter Four"
                      />
                    </Row>
                    <Button
                      className="cursor-pointer font-normal min-w-[80%] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillBluegray6005f"
                    >
                      Inactive
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[90%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-[14px] text-amber_600 text-center w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillAmber60063"
                    >
                      Pending
                    </Button>
                    <Button
                      className="cursor-pointer font-normal sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-center text-pink_A400 w-[100%]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillPinkA40063"
                    >
                      Blacklisted
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[90%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-amber_600 text-center w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillAmber60063"
                    >
                      Pending
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[70%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-[14px] text-center text-green_500 w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillGreen5005f"
                    >
                      Active
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[70%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-center text-green_500 w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillGreen5005f"
                    >
                      Active
                    </Button>
                    <Button
                      className="cursor-pointer font-normal sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-center text-pink_A400 w-[100%]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillPinkA40063"
                    >
                      Blacklisted
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[80%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillBluegray6005f"
                    >
                      Inactive
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[80%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                      shape="CircleBorder15"
                      size="sm"
                      variant="FillBluegray6005f"
                    >
                      Inactive
                    </Button>
                  </Column>
                </Row>
                <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[12%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-semibold text-bluegray_600 uppercase"
                      variant="body1"
                    >
                      organization
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="filter Five"
                    />
                  </Row>
                  <Text
                    className="font-normal sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendsqr
                  </Text>
                  <Text
                    className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Irorun
                  </Text>
                  <Text
                    className="font-normal sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendstar
                  </Text>
                  <Text
                    className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendsqr
                  </Text>
                  <Text
                    className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendstar
                  </Text>
                  <Text
                    className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendsqr
                  </Text>
                  <Text
                    className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendstar
                  </Text>
                  <Text
                    className="font-normal sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendsqr
                  </Text>
                  <Text
                    className="font-normal sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-bluegray_600 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lendstar
                  </Text>
                </Column>
              </Stack>
            </Column>
            <Pagefilter className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default UsersshowingfiltersPage;

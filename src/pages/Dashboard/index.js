import React from "react";

import { Column, Row, Img, Text, Stack, List, Button } from "components";

const DashboardPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-worksans items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[183px] pb-[266px] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[17px] p-[26px] shadow-bs1 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1350px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_group.png"
                  className="max-w-[100%] w-[11%]"
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
                  className="font-normal font-roboto sm:ml-[190px] md:ml-[245px] ml-[357px] not-italic text-[16px] text-indigo_800 underline w-[auto]"
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
                  className="sm:h-[26px] md:h-[34px] h-[48px] sm:ml-[15px] md:ml-[20px] ml-[30px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <List
                className="sm:gap-[13px] md:gap-[17px] gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Button
                    className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillPurpleA40063"
                  >
                    <Img
                      src="images/img_user.svg"
                      className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Users
                  </Text>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    2,453
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Button
                    className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                    size="smIcn"
                    variant="icbFillDeeppurpleA40063"
                  >
                    <Img
                      src="images/img_icon.svg"
                      className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Active Users
                  </Text>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    2,453
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Button
                    className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillRed40063"
                  >
                    <Img
                      src="images/img_nploan1243991.svg"
                      className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                      alt="nploan1243991"
                    />
                  </Button>
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Users with Loans
                  </Text>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    12,453
                  </Text>
                </Column>
              </List>
              <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_icon_40X40.svg"
                  className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[21px] md:w-[27px] w-[40px]"
                  alt="icon One"
                />
                <Text
                  className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Users with Savings
                </Text>
                <Text
                  className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  102,453
                </Text>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[372px] md:mt-[481px] mt-[700px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                <Text
                  className="font-normal not-italic text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Showing
                </Text>
                <Button
                  className="flex items-center justify-center min-w-[36%] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="ml-[18px] sm:ml-[9px] md:ml-[12px] text-center"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  variant="FillIndigo80019"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-indigo_800">
                    100
                  </div>
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  out of 100
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                <Button
                  className="flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:w-[12px] md:w-[16px] w-[24px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                >
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                    alt="arrowright"
                  />
                </Button>
                <Text
                  className="font-medium mt-[3px] text-bluegray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  1
                </Text>
                <Text
                  className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  2
                </Text>
                <Text
                  className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  3
                </Text>
                <Text
                  className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_600_90 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  ...
                </Text>
                <Text
                  className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  15
                </Text>
                <Text
                  className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  16
                </Text>
                <Button
                  className="flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:w-[12px] md:w-[16px] w-[24px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                >
                  <Img
                    src="images/img_arrowright_indigo_800.svg"
                    className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                    alt="arrowright One"
                  />
                </Button>
              </Row>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;

import React from "react";

import {
  Stack,
  Column,
  Text,
  Row,
  List,
  Button,
  Img,
  Line,
  SelectBox,
  Input,
} from "components";

const UsersshowingfiltersPage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-worksans h-[1384px] mx-[auto] relative w-[100%]">
        <Column className="absolute flex flex-col justify-start max-w-[1048px] sm:pl-[15px] sm:pr-[15px] right-[3%] top-[12%] w-[100%]">
          <Text
            className="font-medium text-indigo_800 w-[auto]"
            as="h2"
            variant="h2"
          >
            Users
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
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
                src="images/img_icon_1.svg"
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
          <Stack className="h-[660px] sm:mt-[21px] md:mt-[27px] mt-[40px] relative w-[100%]">
            <Column className="absolute bg-white_A700 border border-indigo_800_0f border-solid flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius4 shadow-bs2 sm:w-[100%] w-[99%]">
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
                      variant="FillBluegray6005f"
                    >
                      Inactive
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[90%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-[14px] text-amber_600 text-center w-[max-content]"
                      variant="FillAmber60063"
                    >
                      Pending
                    </Button>
                    <Column className="bg-pink_A400_63 flex flex-col items-center justify-end sm:mt-[17px] md:mt-[22px] mt-[33px] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-pink_A400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Blacklisted
                      </Text>
                    </Column>
                    <Column className="bg-amber_600_63 flex flex-col items-center justify-end sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 sm:w-[100%] w-[90%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-amber_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Pending
                      </Text>
                    </Column>
                    <Button
                      className="cursor-pointer font-normal min-w-[70%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-[14px] text-center text-green_500 w-[max-content]"
                      variant="FillGreen5005f"
                    >
                      Active
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[70%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-center text-green_500 w-[max-content]"
                      variant="FillGreen5005f"
                    >
                      Active
                    </Button>
                    <Button
                      className="cursor-pointer font-normal sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-center text-pink_A400 w-[100%]"
                      variant="FillPinkA40063"
                    >
                      Blacklisted
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[80%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                      variant="FillBluegray6005f"
                    >
                      Inactive
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[80%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
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
            <Column className="absolute bg-white_A700 border border-bluegray_600_0a border-solid flex flex-col justify-start sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] right-[0] rounded-radius4 shadow-bs2 top-[29%] sm:w-[100%] w-[18%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                <Img
                  src="images/img_eye.svg"
                  className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="eye"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_600"
                  as="h6"
                  variant="h6"
                >
                  View Details
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                <Img
                  src="images/img_search_bluegray_600.svg"
                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="search"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_600"
                  as="h6"
                  variant="h6"
                >
                  Blacklist User
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[2px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Img
                  src="images/img_user_14X14.svg"
                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="user One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-bluegray_600"
                  as="h6"
                  variant="h6"
                >
                  Activate User
                </Text>
              </Row>
            </Column>
            <Column className="absolute bg-white_A700 border border-bluegray_600_23 border-solid bottom-[0] flex flex-col items-center justify-start left-[1%] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 sm:w-[100%] w-[26%]">
              <Column className="flex flex-col justify-start sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] w-[100%]">
                <Text
                  className="font-medium text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Organization
                </Text>
                <SelectBox
                  className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-bluegray_600_99 w-[100%]"
                  placeholderClassName="text-bluegray_600_99"
                  name="Search One"
                  placeholder="Select"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[14px] h-[14px] mr-[20px] sm:mr-[10px] sm:h-[8px] sm:w-[7px] md:mr-[13px] md:h-[10px] md:w-[9px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineIndigo8006c"
                ></SelectBox>
                <Text
                  className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Username
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="md:mt-[4px] mt-[6px] sm:mt-[3px] w-[100%]"
                  name="Search Two"
                  placeholder="User"
                ></Input>
                <Text
                  className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="md:mt-[4px] mt-[6px] sm:mt-[3px] w-[100%]"
                  type="email"
                  name="Search Three"
                  placeholder="Email"
                ></Input>
                <Text
                  className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Date
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="flex md:mt-[4px] mt-[6px] sm:mt-[3px] w-[100%]"
                  name="Search Four"
                  placeholder="Date"
                  suffix={
                    <Img
                      src="images/img_calendar.svg"
                      className="ml-[35px] mr-[8px] sm:mr-[4px] sm:ml-[18px] md:mr-[5px] md:ml-[24px] my-[auto]"
                      alt="calendar"
                    />
                  }
                ></Input>
                <Text
                  className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Phone Number
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="md:mt-[4px] mt-[6px] sm:mt-[3px] w-[100%]"
                  type="number"
                  name="Search Five"
                  placeholder="Phone Number"
                ></Input>
                <Text
                  className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Status
                </Text>
                <SelectBox
                  className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-[14px] text-bluegray_600_99 w-[100%]"
                  placeholderClassName="text-bluegray_600_99"
                  name="Search Six"
                  placeholder="Select"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[14px] h-[14px] mr-[20px] sm:mr-[10px] sm:h-[8px] sm:w-[7px] md:mr-[13px] md:h-[10px] md:w-[9px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineIndigo8006c"
                ></SelectBox>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Button
                    className="cursor-pointer font-semibold min-w-[47%] text-[14px] text-bluegray_600 text-center w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBluegray600"
                  >
                    Reset
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[47%] ml-[14px] sm:ml-[7px] md:ml-[9px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineCyan400"
                  >
                    Filter
                  </Button>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
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
        <Stack className="absolute h-[1695px] w-[100%]">
          <aside className="absolute md:hidden sm:hidden left-[0] w-[20%]">
            <div className="">
              <Column className="bg-white_A700 flex flex-col justify-end py-[120px] sm:py-[15px] md:py-[82px] shadow-bs3 w-[100%]">
                <Column className="flex flex-col justify-start md:ml-[20px] ml-[30px] md:mr-[32px] mr-[47px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Img
                      src="images/img_trash.svg"
                      className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="trash"
                    />
                    <Text
                      className="font-normal not-italic text-indigo_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Switch Organization
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mt-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="arrowdown One"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                    <Img
                      src="images/img_home.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[15%]"
                      alt="home"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Text
                    className="font-medium sm:mt-[21px] md:mt-[28px] mt-[41px] text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    CUSTOMERS
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                  <Row className="bg-cyan_400_5f flex flex-row md:flex-wrap sm:flex-wrap items-center md:pr-[125px] sm:pr-[15px] pr-[183px] w-[100%]">
                    <Line className="bg-cyan_400 sm:h-[22px] md:h-[28px] h-[40px] w-[3px]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[18px] ml-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Img
                        src="images/img_user_12X16.svg"
                        className="flex-shrink-0 max-w-[100%] w-[23%]"
                        alt="user Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                        as="h5"
                        variant="h5"
                      >
                        Users
                      </Text>
                    </Row>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[20px] ml-[30px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_user_1.svg"
                      className="flex-shrink-0 max-w-[100%] w-[15%]"
                      alt="user Three"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Guarantors
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <Img
                      src="images/img_trash_16X16.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="trash One"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Loans
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[17px] ml-[26px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Img
                      src="images/img_handshakeregul.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[3px] w-[13%]"
                      alt="handshakeregul"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Decision Models
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                    <Img
                      src="images/img_piggybank1.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[19%]"
                      alt="piggybankOne"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Savings
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                    <Img
                      src="images/img_reply.svg"
                      className="flex-shrink-0 max-w-[100%] w-[13%]"
                      alt="reply"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[1px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Loan Requests
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <Img
                      src="images/img_user_2.svg"
                      className="flex-shrink-0 max-w-[100%] w-[17%]"
                      alt="user Four"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Whitelist
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                    <Img
                      src="images/img_user_3.svg"
                      className="flex-shrink-0 max-w-[100%] w-[21%]"
                      alt="user Five"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Karma
                    </Text>
                  </Row>
                  <Text
                    className="font-medium sm:ml-[15px] md:ml-[19px] ml-[29px] sm:mt-[21px] md:mt-[28px] mt-[41px] text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    BUSINESSES
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Img
                      src="images/img_trash.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="trash Two"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Organization
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[18px] ml-[27px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                    <Img
                      src="images/img_reply.svg"
                      className="flex-shrink-0 max-w-[100%] w-[13%]"
                      alt="reply One"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Loan Products
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_home_16X16.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="home One"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Savings Products
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Img
                      src="images/img_globe.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="globe"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Fees and Charges
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Img
                      src="images/img_bookmark.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[1px] w-[13%]"
                      alt="bookmark"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Transactions
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                    <Img
                      src="images/img_reply_16X16.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="reply Two"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Services
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                    <Img
                      src="images/img_settings.svg"
                      className="flex-shrink-0 max-w-[100%] w-[11%]"
                      alt="settings"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Service Account
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Img
                      src="images/img_bookmark_12X16.svg"
                      className="flex-shrink-0 max-w-[100%] w-[14%]"
                      alt="bookmark One"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Settlements
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                    <Img
                      src="images/img_volume.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="volume"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Reports
                    </Text>
                  </Row>
                  <Text
                    className="font-medium sm:ml-[15px] md:ml-[19px] ml-[29px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    SETTINGS
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Img
                      src="images/img_sort.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="sort"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Preferences
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                    <Img
                      src="images/img_badgepercent1.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="badgepercentOne"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Fees and Pricing
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                    <Img
                      src="images/img_clipboardlist.svg"
                      className="flex-shrink-0 max-w-[100%] w-[15%]"
                      alt="clipboardlist"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Audit Logs
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[20px] ml-[30px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <Img
                      src="images/img_car.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="car"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                      as="h5"
                      variant="h5"
                    >
                      Systems Messages
                    </Text>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[71px] sm:px-[0] w-[100%]">
                    <Line className="bg-indigo_800_63 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                      <Img
                        src="images/img_download.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="download"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_800"
                        as="h5"
                        variant="h5"
                      >
                        Logout
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="font-normal sm:ml-[15px] md:ml-[19px] ml-[29px] sm:mt-[21px] md:mt-[27px] mt-[40px] not-italic text-indigo_800 w-[auto]"
                    variant="body1"
                  >
                    v1.2.0
                  </Text>
                </Column>
              </Column>
            </div>
          </aside>
          <Row className="absolute bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[17px] p-[26px] shadow-bs1 top-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
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
                    alt="search Seven"
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
              <SelectBox
                className="font-medium font-worksans ml-[10px] md:ml-[6px] sm:mx-[0] text-[16px] text-indigo_800 sm:w-[100%] w-[7%]"
                placeholderClassName="text-indigo_800"
                name="GroupEight"
                placeholder="Adedeji"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_npdropdown615.svg"
                    className="w-[20px] h-[20px] mr-[0] sm:h-[11px] sm:w-[10px] md:h-[14px] md:w-[13px] max-w-[100%]"
                    alt="np_dropdown_615120_000000 1"
                  />
                }
                size="md"
              ></SelectBox>
            </Row>
          </Row>
        </Stack>
      </Stack>
    </>
  );
};

export default UsersshowingfiltersPage;

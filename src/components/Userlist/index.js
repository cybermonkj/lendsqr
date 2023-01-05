import React from "react";

import {
  Stack,
  Column,
  Line,
  Img,
  Row,
  List,
  Text,
  Button,
  SelectBox,
  Input,
} from "components";

const Userlist = (props) => {
  return (
    <>
      <Stack className={props.className}>
        <Column className="absolute bg-white_A700 border border-indigo_800_0f border-solid flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius4 shadow-bs1 sm:w-[100%] w-[99%]">
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
                className="sm:gap-[18px] md:gap-[24px] gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 sm:mb-[3px] md:mb-[4px] mb-[7px] min-h-[auto] sm:w-[100%] w-[83%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Text className="flex-grow font-semibold font-worksans mb-[2px] text-[12px] text-bluegray_600 uppercase">
                      Username
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="filter"
                    />
                  </Row>
                  <Text className="font-normal font-worksans sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Adedeji
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Debby Ogana
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Grace Effiom
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Tosin Dokunmu
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Grace Effiom
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Tosin Dokunmu
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Grace Effiom
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Tosin Dokunmu
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Grace Effiom
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Text className="flex-grow font-semibold font-worksans mb-[2px] text-[12px] text-bluegray_600 uppercase">
                      Email
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="filter One"
                    />
                  </Row>
                  <Text className="font-normal font-worksans sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    adedeji@lendsqr.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    debby2@irorun.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    grace@lendstar.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    tosin@lendsqr.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    grace@lendstar.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    tosin@lendsqr.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    grace@lendstar.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    tosin@lendsqr.com
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    grace@lendstar.com
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text className="flex-grow font-semibold font-worksans mb-[2px] text-[12px] text-bluegray_600 uppercase">
                      Phone number
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="filter Two"
                    />
                  </Row>
                  <Text className="font-normal font-worksans sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    08078903721
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    08160780928
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    07060780922
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    07003309226
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    07060780922
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    08060780900
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    07060780922
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    08060780900
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    07060780922
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <Text className="flex-grow font-semibold font-worksans mb-[2px] text-[12px] text-bluegray_600 uppercase">
                      Date joined
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="filter Three"
                    />
                  </Row>
                  <Text className="font-normal font-worksans sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    May 15, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 30, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 30, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 10, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 30, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 10, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 30, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 10, 2020 10:00 AM
                  </Text>
                  <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                    Apr 30, 2020 10:00 AM
                  </Text>
                </Column>
              </List>
              <Column className="flex flex-col md:ml-[24px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text className="flex-grow font-semibold font-worksans mb-[2px] text-[12px] text-bluegray_600 uppercase">
                    Status
                  </Text>
                  <Img
                    src="images/img_filter.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="filter Four"
                  />
                </Row>
                <Button
                  className="bg-bluegray_600_5f cursor-pointer font-normal font-worksans min-w-[80%] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic px-[13px] sm:px-[6px] md:px-[8px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-bluegray_600 text-center w-[max-content]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillBluegray6005f"
                  fontStyle="WorkSansRegular14"
                >
                  Inactive
                </Button>
                <Button
                  className="bg-amber_600_63 cursor-pointer font-normal font-worksans min-w-[90%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic md:px-[12px] sm:px-[15px] px-[18px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-amber_600 text-center w-[max-content]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillAmber60063"
                  fontStyle="WorkSansRegular14Amber600"
                >
                  Pending
                </Button>
                <Column className="bg-pink_A400_63 flex flex-col items-center justify-end sm:mt-[17px] md:mt-[22px] mt-[33px] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 w-[100%]">
                  <Text className="font-normal font-worksans mt-[1px] not-italic text-[14px] text-pink_A400 w-[auto]">
                    Blacklisted
                  </Text>
                </Column>
                <Column className="bg-amber_600_63 flex flex-col items-center justify-end sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 sm:w-[100%] w-[90%]">
                  <Text className="font-normal font-worksans mt-[1px] not-italic text-[14px] text-amber_600 w-[auto]">
                    Pending
                  </Text>
                </Column>
                <Button
                  className="bg-green_500_5f cursor-pointer font-normal font-worksans min-w-[70%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic px-[14px] sm:px-[7px] md:px-[9px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-center text-green_500 w-[max-content]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillGreen5005f"
                  fontStyle="WorkSansRegular14Green500"
                >
                  Active
                </Button>
                <Button
                  className="bg-green_500_5f cursor-pointer font-normal font-worksans min-w-[70%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic px-[14px] sm:px-[7px] md:px-[9px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-center text-green_500 w-[max-content]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillGreen5005f"
                  fontStyle="WorkSansRegular14Green500"
                >
                  Active
                </Button>
                <Button
                  className="bg-pink_A400_63 cursor-pointer font-normal font-worksans sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic px-[12px] sm:px-[6px] md:px-[8px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-center text-pink_A400 w-[100%]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillPinkA40063"
                  fontStyle="WorkSansRegular14PinkA400"
                >
                  Blacklisted
                </Button>
                <Button
                  className="bg-bluegray_600_5f cursor-pointer font-normal font-worksans min-w-[80%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic px-[13px] sm:px-[6px] md:px-[8px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-bluegray_600 text-center w-[max-content]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillBluegray6005f"
                  fontStyle="WorkSansRegular14"
                >
                  Inactive
                </Button>
                <Button
                  className="bg-bluegray_600_5f cursor-pointer font-normal font-worksans min-w-[80%] sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic px-[13px] sm:px-[6px] md:px-[8px] sm:py-[3px] md:py-[4px] py-[6px] rounded-radius15 text-[14px] text-bluegray_600 text-center w-[max-content]"
                  shape="CircleBorder15"
                  size="PaddingAll6"
                  variant="FillBluegray6005f"
                  fontStyle="WorkSansRegular14"
                >
                  Inactive
                </Button>
              </Column>
            </Row>
            <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[12%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Text className="flex-grow font-semibold font-worksans mb-[2px] text-[12px] text-bluegray_600 uppercase">
                  organization
                </Text>
                <Img
                  src="images/img_filter.svg"
                  className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="filter Five"
                />
              </Row>
              <Text className="font-normal font-worksans sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendsqr
              </Text>
              <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Irorun
              </Text>
              <Text className="font-normal font-worksans sm:mt-[25px] md:mt-[32px] mt-[47px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendstar
              </Text>
              <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendsqr
              </Text>
              <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendstar
              </Text>
              <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendsqr
              </Text>
              <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendstar
              </Text>
              <Text className="font-normal font-worksans sm:mt-[24px] md:mt-[31px] mt-[46px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendsqr
              </Text>
              <Text className="font-normal font-worksans sm:mt-[23px] md:mt-[30px] mt-[45px] not-italic text-[14px] text-bluegray_600 w-[auto]">
                Lendstar
              </Text>
            </Column>
          </Stack>
        </Column>
        <Column className="absolute bg-white_A700 border border-colors2 border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] right-[0] rounded-radius4 shadow-bs1 top-[29%] sm:w-[100%] w-[18%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="eye"
            />
            <Text className="flex-grow font-medium font-worksans sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_600">
              View Details
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mb-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
              alt="search"
            />
            <Text className="flex-grow font-medium font-worksans sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_600">
              Blacklist User
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[2px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mb-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
              alt="user One"
            />
            <Text className="flex-grow font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] text-[14px] text-bluegray_600">
              Activate User
            </Text>
          </Row>
        </Column>
        <Column className="absolute bg-white_A700 border border-colors1 border-solid bottom-[0] flex flex-col items-center justify-start left-[1%] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs1 sm:w-[100%] w-[26%]" />
      </Stack>
    </>
  );
};

export default Userlist;

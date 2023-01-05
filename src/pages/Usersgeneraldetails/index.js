import React from "react";

import { Column, Row, Img, Text, Stack, Button, Line, List } from "components";

const UsersgeneraldetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-worksans items-center justify-start mx-[auto] md:pb-[105px] pb-[153px] sm:pb-[15px] w-[100%]">
        <Column className="flex flex-col h-[1440px] sm:h-[767px] md:h-[991px] justify-start w-[100%]">
          <Column className="flex flex-col justify-start w-[100%]">
            <header className="w-[100%]">
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[17px] p-[26px] shadow-bs3 w-[100%]">
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                  alt="arrowleft"
                />
                <Text
                  className="flex-grow font-normal ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                  as="h5"
                  variant="h5"
                >
                  Back to Users
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                <Text
                  className="font-medium text-indigo_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  User Details
                </Text>
                <Button
                  className="cursor-pointer font-semibold min-w-[17%] sm:ml-[284px] md:ml-[367px] ml-[534px] text-[14px] text-center text-pink_A400 md:tracking-ls1 sm:tracking-ls1 tracking-ls14000000000000001 uppercase w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="OutlinePinkA400"
                >
                  Blacklist User
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[17%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[14px] text-center text-cyan_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls14000000000000001 uppercase w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="OutlineCyan400"
                >
                  Activate User
                </Button>
              </Row>
              <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pt-[15px] md:pt-[20px] pt-[30px] sm:px-[15px] md:px-[20px] px-[30px] rounded-radius4 shadow-bs1 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Stack className="bg-indigo_800_68 h-[100px] sm:p-[15px] md:p-[20px] p-[30px] relative rounded-radius50 w-[100px] sm:w-[53px] md:w-[68px]">
                    <Img
                      src="images/img_search_indigo_800.svg"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="search One"
                    />
                  </Stack>
                  <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                    <Text
                      className="text-indigo_800 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Grace Effiom
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      LSQFf587g90
                    </Text>
                  </Column>
                  <Line className="bg-bluegray_600_6c sm:h-[43px] md:h-[56px] h-[80px] sm:ml-[15px] md:ml-[20px] ml-[30px] my-[10px] sm:my-[5px] md:my-[6px] w-[1px]" />
                  <Column className="flex flex-col items-center md:ml-[19px] ml-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        User’s Tier
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Img
                          src="images/img_star.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="star"
                        />
                        <Img
                          src="images/img_star_16X16.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="star One"
                        />
                        <Img
                          src="images/img_star_16X16.svg"
                          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="star Two"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-bluegray_600_6c sm:h-[43px] md:h-[56px] h-[80px] sm:ml-[15px] md:ml-[20px] ml-[30px] my-[10px] sm:my-[5px] md:my-[6px] w-[1px]" />
                  <Column className="flex flex-col md:ml-[19px] ml-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                    <Text
                      className="text-indigo_800 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      ₦200,000.00
                    </Text>
                    <Text
                      className="font-normal ml-[3px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-indigo_800 w-[auto]"
                      variant="body1"
                    >
                      9912345678/Providus Bank
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[27px] md:mt-[35px] mt-[51px] sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Column className="flex flex-col font-worksans items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                    <Text
                      className="font-normal not-italic text-cyan_400 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      General Details
                    </Text>
                    <Line className="bg-cyan_400 h-[2px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]" />
                  </Column>
                  <Text
                    className="font-normal font-sfcompacttext not-italic text-black_900_cc w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Documents
                  </Text>
                  <Text
                    className="font-normal font-sfcompacttext not-italic text-black_900_cc w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Bank Details
                  </Text>
                  <Text
                    className="font-normal font-sfcompacttext not-italic text-black_900_cc w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Loans
                  </Text>
                  <Text
                    className="font-normal font-sfcompacttext not-italic text-black_900_cc w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Savings
                  </Text>
                  <Text
                    className="font-normal font-sfcompacttext not-italic text-black_900_cc w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    App and System
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
          <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start max-w-[1037px] md:ml-[236px] ml-[auto] md:mr-[41px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] sm:pl-[15px] sm:pr-[15px] rounded-radius4 shadow-bs1 w-[100%]">
            <List
              className="sm:gap-[30px] md:gap-[39px] gap-[58px] grid min-h-[auto] sm:w-[100%] w-[94%]"
              orientation="vertical"
            >
              <Column className="flex flex-col items-center justify-start my-[0] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium text-indigo_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Personal Information
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        full Name
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Grace Effiom
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Phone Number
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        07060780922
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Email Address
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        grace@gmail.com
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Bvn
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        07060780922
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Gender
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Female
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Marital status
                      </Text>
                      <Text
                        className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Single
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start ml-[103px] md:ml-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Children
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        None
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start ml-[145px] md:ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Type of residence
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Parent’s Apartment
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Line className="self-center w-[100%] h-[1px] bg-indigo_800_63" />
              <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium text-indigo_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Education and Employment
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        level of education
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        B.Sc
                      </Text>
                    </Column>
                    <Column className="flex flex-col md:ml-[68px] ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        employment status
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Employed
                      </Text>
                    </Column>
                    <Column className="flex flex-col md:ml-[109px] ml-[159px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        sector of employment
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        FinTech
                      </Text>
                    </Column>
                    <Column className="flex flex-col md:ml-[55px] ml-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Duration of employment
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        2 years
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        office email
                      </Text>
                      <Text
                        className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        grace@lendsqr.com
                      </Text>
                    </Column>
                    <Column className="flex flex-col md:ml-[51px] ml-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Monthly income
                      </Text>
                      <Text
                        className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        ₦200,000.00- ₦400,000.00
                      </Text>
                    </Column>
                    <Column className="flex flex-col md:ml-[50px] ml-[74px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        loan repayment
                      </Text>
                      <Text
                        className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        40,000
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </List>
            <List
              className="sm:gap-[31px] md:gap-[41px] gap-[60px] grid md:mb-[11px] mb-[16px] sm:mb-[8px] min-h-[auto] sm:mt-[31px] md:mt-[41px] mt-[60px] sm:w-[100%] w-[76%]"
              orientation="vertical"
            >
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium text-indigo_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Socials
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Twitter
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @grace_effiom
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Facebook
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Grace Effiom
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Instagram
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @grace_effiom
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Line className="self-center w-[100%] h-[1px] bg-indigo_800_63" />
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium text-indigo_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Guarantor
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        full Name
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Debby Ogana
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Phone Number
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        07060780922
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Email Address
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        debby@gmail.com
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                        variant="body1"
                      >
                        Relationship
                      </Text>
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Sister
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Line className="self-center w-[100%] h-[1px] bg-indigo_800_63" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                    variant="body1"
                  >
                    full Name
                  </Text>
                  <Text
                    className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Debby Ogana
                  </Text>
                </Column>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                    variant="body1"
                  >
                    Phone Number
                  </Text>
                  <Text
                    className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    07060780922
                  </Text>
                </Column>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                    variant="body1"
                  >
                    Email Address
                  </Text>
                  <Text
                    className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    debby@gmail.com
                  </Text>
                </Column>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                    variant="body1"
                  >
                    Relationship
                  </Text>
                  <Text
                    className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Sister
                  </Text>
                </Column>
              </Row>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default UsersgeneraldetailsPage;

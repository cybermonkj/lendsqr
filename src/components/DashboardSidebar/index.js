import React from "react";

import { Column, Row, Img, Text, Line } from "components";

const DashboardSidebar = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Column className="flex flex-col justify-start sm:ml-[15px] md:ml-[20px] ml-[30px] sm:mr-[25px] md:mr-[32px] mr-[47px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:w-[100%] w-[73%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
            <Img
              src="images/img_trash.svg"
              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="trash"
            />
            <Text className="font-normal font-worksans not-italic text-[16px] text-indigo_800 w-[auto]">
              Switch Organization
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mb-[3px] mt-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
              alt="arrowdown One"
            />
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
            <Img
              src="images/img_home.svg"
              className="flex-shrink-0 max-w-[100%] my-[2px] w-[15%]"
              alt="home"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Dashboard
            </Text>
          </Row>
          <Text className="font-medium font-worksans sm:mt-[21px] md:mt-[28px] mt-[41px] text-[12px] text-bluegray_600 w-[auto]">
            CUSTOMERS
          </Text>
        </Column>
        <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
          <Row className="bg-cyan_400_5f flex flex-row md:flex-wrap sm:flex-wrap items-center md:pr-[125px] sm:pr-[15px] pr-[183px] w-[100%]">
            <Line className="bg-cyan_400 sm:h-[22px] md:h-[28px] h-[40px] w-[3px]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[11px] md:mb-[7px] md:ml-[18px] ml-[27px] mt-[10px] md:mt-[6px] sm:mx-[0] sm:my-[5px] sm:px-[0] sm:w-[100%] w-[70%]">
              <Img
                src="images/img_user_12X16.svg"
                className="flex-shrink-0 max-w-[100%] my-[3px] w-[23%]"
                alt="user Two"
              />
              <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
                Users
              </Text>
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[20px] ml-[30px] mr-[140px] md:mr-[96px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
            <Img
              src="images/img_user_1.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[15%]"
              alt="user Three"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Guarantors
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[124px] mr-[181px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
            <Img
              src="images/img_trash_16X16.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="trash One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Loans
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[17px] ml-[26px] mr-[100px] md:mr-[68px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
            <Img
              src="images/img_handshakeregul.svg"
              className="flex-shrink-0 max-w-[100%] mb-[1px] mt-[3px] w-[13%]"
              alt="handshakeregul"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Decision Models
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[116px] mr-[169px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
            <Img
              src="images/img_piggybank1.svg"
              className="flex-shrink-0 max-w-[100%] my-[2px] w-[19%]"
              alt="piggybankOne"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Savings
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] mr-[112px] md:mr-[77px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
            <Img
              src="images/img_reply.svg"
              className="flex-shrink-0 max-w-[100%] w-[13%]"
              alt="reply"
            />
            <Text className="flex-grow font-normal font-worksans mb-[2px] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[1px] not-italic text-[16px] text-indigo_800">
              Loan Requests
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] md:mr-[108px] mr-[158px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
            <Img
              src="images/img_user_2.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[17%]"
              alt="user Four"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Whitelist
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] md:mr-[121px] mr-[177px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
            <Img
              src="images/img_user_3.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[21%]"
              alt="user Five"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Karma
            </Text>
          </Row>
          <Text className="font-medium font-worksans sm:ml-[15px] md:ml-[19px] ml-[29px] md:mr-[123px] mr-[179px] sm:mr-[95px] sm:mt-[21px] md:mt-[28px] mt-[41px] text-[12px] text-bluegray_600 w-[auto]">
            BUSINESSES
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] mr-[130px] md:mr-[89px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
            <Img
              src="images/img_trash.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="trash Two"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Organization
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[18px] ml-[27px] mr-[115px] md:mr-[79px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
            <Img
              src="images/img_reply.svg"
              className="flex-shrink-0 max-w-[100%] w-[13%]"
              alt="reply One"
            />
            <Text className="flex-grow font-normal font-worksans mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-[16px] text-indigo_800">
              Loan Products
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[64px] mr-[94px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
            <Img
              src="images/img_home_16X16.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="home One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Savings Products
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[61px] mr-[90px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
            <Img
              src="images/img_globe.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="globe"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Fees and Charges
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] mr-[128px] md:mr-[88px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
            <Img
              src="images/img_bookmark.svg"
              className="flex-shrink-0 max-w-[100%] mt-[1px] w-[13%]"
              alt="bookmark"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Transactions
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[111px] mr-[162px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
            <Img
              src="images/img_reply_16X16.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="reply Two"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Services
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] mr-[102px] md:mr-[70px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
            <Img
              src="images/img_settings.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[11%]"
              alt="settings"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Service Account
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[29px] mr-[132px] md:mr-[90px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
            <Img
              src="images/img_bookmark_12X16.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[14%]"
              alt="bookmark One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Settlements
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[114px] mr-[167px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
            <Img
              src="images/img_volume.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="volume"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Reports
            </Text>
          </Row>
          <Text className="font-medium font-worksans sm:ml-[15px] md:ml-[19px] ml-[29px] sm:mr-[103px] md:mr-[133px] mr-[194px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[12px] text-bluegray_600 w-[auto]">
            SETTINGS
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] mr-[135px] md:mr-[92px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
            <Img
              src="images/img_sort.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="sort"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Preferences
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] mr-[100px] md:mr-[68px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
            <Img
              src="images/img_badgepercent1.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="badgepercentOne"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Fees and Pricing
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] mr-[145px] md:mr-[99px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
            <Img
              src="images/img_clipboardlist.svg"
              className="flex-shrink-0 max-w-[100%] w-[15%]"
              alt="clipboardlist"
            />
            <Text className="flex-grow font-normal font-worksans mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-[16px] text-indigo_800">
              Audit Logs
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[20px] ml-[30px] md:mr-[55px] mr-[80px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
            <Img
              src="images/img_car.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="car"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Systems Messages
            </Text>
          </Row>
          <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[71px] sm:px-[0] w-[100%]">
            <Line className="bg-indigo_800_63 h-[1px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[19px] ml-[29px] md:mr-[119px] mr-[173px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
              <Img
                src="images/img_download.svg"
                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                alt="download"
              />
              <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
                Logout
              </Text>
            </Row>
          </Column>
          <Text className="font-normal font-worksans sm:ml-[15px] md:ml-[19px] ml-[29px] sm:mr-[118px] md:mr-[152px] mr-[222px] sm:mt-[21px] md:mt-[27px] mt-[40px] not-italic text-[12px] text-indigo_800 w-[auto]">
            v1.2.0
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default DashboardSidebar;

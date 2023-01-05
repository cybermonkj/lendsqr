import React from "react";

import { Row, List, Column, Button, Img, Text } from "components";

const Dashboardinformation = (props) => {
  return (
    <>
      <Row className={props.className}>
        <List
          className="sm:gap-[13px] md:gap-[17px] gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs1 w-[100%]">
            <Button
              className="bg-purple_A400_63 flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] sm:px-[4px] md:px-[6px] px-[9px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
              shape="icbCircleBorder20"
              size="icbPaddingAll9"
              variant="icbFillPurpleA40063"
            >
              <Img
                src="images/img_user.svg"
                className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                alt="user"
              />
            </Button>
            <Text className="font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-[14px] text-bluegray_600 uppercase w-[auto]">
              Users
            </Text>
            <Text className="font-semibold font-worksans mb-[10px] sm:mb-[5px] md:mb-[6px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-indigo_800 uppercase w-[auto]">
              2,453
            </Text>
          </Column>
          <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs1 w-[100%]">
            <Button
              className="bg-deep_purple_A400_63 flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
              shape="icbCircleBorder20"
              size="icbPaddingAll5"
              variant="icbFillDeeppurpleA40063"
            >
              <Img
                src="images/img_icon.svg"
                className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                alt="icon"
              />
            </Button>
            <Text className="font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-[14px] text-bluegray_600 uppercase w-[auto]">
              Active Users
            </Text>
            <Text className="font-semibold font-worksans mb-[10px] sm:mb-[5px] md:mb-[6px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-indigo_800 uppercase w-[auto]">
              2,453
            </Text>
          </Column>
          <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs1 w-[100%]">
            <Button
              className="bg-red_400_63 flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] sm:px-[4px] md:px-[6px] px-[9px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
              shape="icbCircleBorder20"
              size="icbPaddingAll9"
              variant="icbFillRed40063"
            >
              <Img
                src="images/img_nploan1243991.svg"
                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                alt="nploan1243991"
              />
            </Button>
            <Text className="font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-[14px] text-bluegray_600 uppercase w-[auto]">
              Users with Loans
            </Text>
            <Text className="font-semibold font-worksans mb-[10px] sm:mb-[5px] md:mb-[6px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-indigo_800 uppercase w-[auto]">
              12,453
            </Text>
          </Column>
        </List>
        <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs1 sm:w-[100%] w-[24%]">
          <Img
            src="images/img_icon_1.svg"
            className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[21px] md:w-[27px] w-[40px]"
            alt="icon One"
          />
          <Text className="font-medium font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-[14px] text-bluegray_600 uppercase w-[auto]">
            Users with Savings
          </Text>
          <Text className="font-semibold font-worksans mb-[10px] sm:mb-[5px] md:mb-[6px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-indigo_800 uppercase w-[auto]">
            102,453
          </Text>
        </Column>
      </Row>
    </>
  );
};

export default Dashboardinformation;

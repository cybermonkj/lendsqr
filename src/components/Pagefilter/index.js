import React from "react";

import { Row, Text, Button, Img } from "components";

const Pagefilter = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:w-[100%] w-[22%]">
          <Text className="font-normal font-worksans mb-[6px] mt-[7px] sm:my-[3px] md:my-[4px] not-italic text-[14px] text-bluegray_600 w-[auto]">
            Showing
          </Text>
          <Button
            className="bg-indigo_800_19 cursor-pointer font-medium font-worksans min-w-[36%] pl-[12px] sm:pl-[6px] md:pl-[8px] sm:py-[3px] md:py-[4px] py-[7px] rounded-radius4 text-[14px] text-indigo_800 w-[max-content]"
            rightIcon={
              <Img
                src="images/img_arrowdown.svg"
                className="ml-[18px] mr-[12px] sm:mr-[6px] sm:ml-[9px] sm:my-[4px] md:mr-[8px] md:ml-[12px] md:my-[5px] text-center my-[8px]"
                alt="arrow_down"
              />
            }
            shape="RoundedBorder4"
            size="PaddingAll6"
            variant="FillIndigo80019"
            fontStyle="WorkSansMedium14"
          >
            100
          </Button>
          <Text className="font-normal font-worksans sm:my-[3px] md:my-[4px] my-[7px] not-italic text-[14px] text-bluegray_600 w-[auto]">
            out of 100
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[3px] sm:w-[100%] w-[26%]">
          <Button
            className="bg-indigo_800_19 flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:px-[2px] md:px-[3px] px-[5px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[24px]"
            shape="icbRoundedBorder4"
            size="icbPaddingAll5"
            variant="icbFillIndigo80019"
          >
            <Img
              src="images/img_arrowright.svg"
              className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
              alt="arrowright"
            />
          </Button>
          <Text className="font-medium font-worksans mb-[2px] mt-[3px] text-[16px] text-bluegray_600 w-[auto]">
            1
          </Text>
          <Text className="font-normal font-worksans mb-[2px] mt-[3px] not-italic text-[16px] text-bluegray_600_90 w-[auto]">
            2
          </Text>
          <Text className="font-normal font-worksans mb-[2px] mt-[3px] not-italic text-[16px] text-bluegray_600_90 w-[auto]">
            3
          </Text>
          <Text className="font-normal font-worksans mb-[2px] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-[16px] text-bluegray_600_90 w-[auto]">
            ...
          </Text>
          <Text className="font-normal font-worksans mb-[2px] mt-[3px] not-italic text-[16px] text-bluegray_600_90 w-[auto]">
            15
          </Text>
          <Text className="font-normal font-worksans mb-[2px] mt-[3px] not-italic text-[16px] text-bluegray_600_90 w-[auto]">
            16
          </Text>
          <Button
            className="bg-indigo_800_19 flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:px-[2px] md:px-[3px] px-[5px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[24px]"
            shape="icbRoundedBorder4"
            size="icbPaddingAll5"
            variant="icbFillIndigo80019"
          >
            <Img
              src="images/img_arrowright_indigo_800.svg"
              className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
              alt="arrowright One"
            />
          </Button>
        </Row>
      </Row>
    </>
  );
};

export default Pagefilter;

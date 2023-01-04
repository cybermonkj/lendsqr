import React from "react";

import { Column, Text, SelectBox, Img, Input, Row, Button } from "components";

const Userpopup = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
          <Text className="font-medium font-worksans text-[14px] text-bluegray_600 w-[auto]">
            Organization
          </Text>
          <SelectBox
            className="bg-white_A700_6c border border-indigo_800_6c border-solid font-normal font-worksans sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic md:pl-[13px] sm:pl-[15px] pl-[20px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius8 text-[14px] text-bluegray_600_99 w-[100%]"
            placeholderClassName="text-bluegray_600_99"
            name="Search One"
            placeholder="Select"
            isSearchable={false}
            isMulti={false}
            size="PaddingAll12"
            fontStyle="WorkSansRegular14"
          ></SelectBox>
          <Text className="font-medium font-worksans sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_600 w-[auto]">
            Username
          </Text>
          <Input
            className="bg-white_A700_6c border border-indigo_800_6c border-solid font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] sm:px-[15px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius8 text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
            name="Search Two"
            placeholder="User"
            shape="RoundedBorder8"
            size="PaddingAll12"
            variant="OutlineIndigo8006c"
            fontStyle="WorkSansRegular14"
          ></Input>
          <Text className="font-medium font-worksans sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_600 w-[auto]">
            Email
          </Text>
          <Input
            className="bg-white_A700_6c border border-indigo_800_6c border-solid font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] sm:px-[15px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius8 text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
            type="email"
            name="Search Three"
            placeholder="Email"
            shape="RoundedBorder8"
            size="PaddingAll12"
            variant="OutlineIndigo8006c"
            fontStyle="WorkSansRegular14"
          ></Input>
          <Text className="font-medium font-worksans sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_600 w-[auto]">
            Date
          </Text>
          <Input
            className="bg-white_A700_6c border border-indigo_800_6c border-solid font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic p-[0] sm:pl-[10px] md:pl-[13px] pl-[20px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius8 text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
            name="Search Four"
            placeholder="Date"
            suffix={
              <Img
                src="images/img_calendar.svg"
                className="ml-[35px] mr-[20px] sm:mr-[10px] sm:ml-[18px] sm:my-[6px] md:mr-[13px] md:ml-[24px] md:my-[8px] my-[12px]"
                alt="calendar"
              />
            }
            shape="RoundedBorder8"
            size="PaddingAll12"
            variant="OutlineIndigo8006c"
            fontStyle="WorkSansRegular14"
          ></Input>
          <Text className="font-medium font-worksans sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_600 w-[auto]">
            Phone Number
          </Text>
          <Input
            className="bg-white_A700_6c border border-indigo_800_6c border-solid font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] sm:px-[15px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius8 text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
            type="number"
            name="Search Five"
            placeholder="Phone Number"
            shape="RoundedBorder8"
            size="PaddingAll12"
            variant="OutlineIndigo8006c"
            fontStyle="WorkSansRegular14"
          ></Input>
          <Text className="font-medium font-worksans sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_600 w-[auto]">
            Status
          </Text>
          <SelectBox
            className="bg-white_A700_6c border border-indigo_800_6c border-solid font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic md:pl-[13px] sm:pl-[15px] pl-[20px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius8 text-[14px] text-bluegray_600_99 w-[100%]"
            placeholderClassName="text-bluegray_600_99"
            name="Search Six"
            placeholder="Select"
            isSearchable={false}
            isMulti={false}
            size="PaddingAll12"
            fontStyle="WorkSansRegular14"
          ></SelectBox>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Button
              className="border border-bluegray_600 border-solid cursor-pointer font-semibold font-worksans min-w-[47%] md:pl-[20px] pl-[30px] md:pr-[19px] pr-[29px] sm:px-[15px] py-[11px] sm:py-[5px] md:py-[7px] rounded-radius8 text-[14px] text-bluegray_600 text-center w-[max-content]"
              shape="RoundedBorder8"
              size="PaddingAll11"
              variant="OutlineBluegray600"
              fontStyle="WorkSansSemiBold14Bluegray600"
            >
              Reset
            </Button>
            <Button
              className="bg-cyan_400 border border-cyan_400 border-solid cursor-pointer font-semibold font-worksans min-w-[47%] ml-[14px] sm:ml-[7px] md:ml-[9px] md:pl-[21px] pl-[31px] md:pr-[20px] pr-[30px] sm:px-[15px] py-[11px] sm:py-[5px] md:py-[7px] rounded-radius8 text-[14px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder8"
              size="PaddingAll11"
              variant="OutlineCyan400_1"
              fontStyle="WorkSansSemiBold14WhiteA700"
            >
              Filter
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Userpopup;

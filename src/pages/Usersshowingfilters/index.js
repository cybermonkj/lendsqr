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
import Dashboardinformation from "components/Dashboardinformation";
import Userlist from "components/Userlist";
import Userpopup from "components/Userpopup";
import Pagefilter from "components/Pagefilter";
import DashboardSidebar from "components/DashboardSidebar";
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
  function handleNavigate3() {
    navigate("/usersgeneraldetails");
  }

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
          <Dashboardinformation className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]" />
          <Userlist className="h-[660px] sm:mt-[21px] md:mt-[27px] mt-[40px] relative w-[100%]" />
          <Pagefilter className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]" />
        </Column>
        <Stack className="absolute h-[1695px] w-[100%]">
          <aside className="absolute md:hidden sm:hidden left-[0] w-[20%]">
            <div className="">
              <DashboardSidebar className="bg-white_A700 flex flex-col justify-end py-[120px] sm:py-[15px] md:py-[82px] shadow-bs w-[100%]" />
            </div>
          </aside>
          <Row className="absolute bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[17px] p-[26px] shadow-bs3 top-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Img
                src="images/img_group.png"
                className="common-pointer max-w-[100%] w-[11%]"
                onClick={handleNavigate}
                alt="logo"
              />
              <Row className="bg-white_A700_6c border border-indigo_800_6c border-solid flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-center justify-center md:ml-[115px] ml-[168px] sm:mx-[0] my-[4px] md:pl-[13px] sm:pl-[15px] pl-[20px] rounded-radius8 sm:w-[100%] w-[30%]">
                <Text
                  className="font-normal my-[px] not-italic pr-[px] py-[px] text-bluegray_600_99 w-[400px]"
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
              <SelectBox
                className="common-pointer font-medium font-worksans ml-[10px] md:ml-[6px] sm:mx-[0] text-[16px] text-indigo_800 sm:w-[100%] w-[7%]"
                onClick={handleNavigate3}
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

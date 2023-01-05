import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  FloatingInput,
  Stack,
  Button,
} from "components";
import Passwordform from "components/Passwordform";
import { useNavigate } from "react-router-dom";
import { getUsers } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogInPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();

  function callApi() {
    const req = {};

    getUsers(req)
      .then((res) => {
        setapiData(res);

        localStorage.setItem("apiresponse", JSON.stringify(res));

        toast.success("Lendsqr Mock API active");
      })
      .catch((err) => {
        console.error(err);
        toast.error("There was an error with the API");
      });
  }
  function handleNavigate12() {
    navigate("/dashboard");
  }
  function handleNavigate13() {
    const win = window.open("https://www.lendsqr.com/", "_blank");
    win.focus();
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-avenirnext items-end justify-start mx-[auto] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:pl-[2px] md:pl-[3px] pl-[5px] w-[100%]">
        <Row
          className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end max-w-[1373px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          onClick={() => {
            callApi();
          }}
        >
          <Column className="flex flex-col justify-start mt-[106px] sm:mt-[56px] md:mt-[72px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
            <Img
              src="images/img_group.png"
              className="common-pointer max-w-[100%] sm:ml-[15px] md:ml-[20px] ml-[30px] w-[29%]"
              onClick={handleNavigate13}
              alt="Group"
            />
            <Img
              src="images/img_pablosignin1.png"
              className="max-w-[100%] mt-[139px] sm:mt-[74px] md:mt-[95px] w-[100%]"
              alt="pablosigninOne"
            />
          </Column>
          <Column className="bg-white_A700 flex flex-col justify-start md:ml-[47px] ml-[69px] sm:mx-[0] p-[100px] sm:p-[15px] md:p-[68px] shadow-bs2 sm:w-[100%] w-[52%]">
            <Text
              className="mt-[115px] sm:mt-[61px] md:mt-[79px] text-indigo_800 sm:tracking-ls11 tracking-ls16 md:tracking-ls2 w-[auto]"
              as="h1"
              variant="h1"
            >
              Welcome!
            </Text>
            <Text
              className="sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-bluegray_600 w-[auto]"
              as="h4"
              variant="h4"
            >
              Enter details to login.
            </Text>
            <input type="text" placeholder="Email" />
            <input type="password" defaultValue="super_secret_password" />
            <Text
              className="font-semibold ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] text-cyan_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 uppercase w-[auto]"
              variant="body1"
            >
              Forgot PASSWORD?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-semibold md:mb-[126px] mb-[184px] sm:mb-[98px] min-w-[89%] sm:mt-[17px] md:mt-[22px] mt-[33px] text-[14px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls14000000000000001 uppercase w-[max-content]"
              onClick={handleNavigate12}
              shape="RoundedBorder8"
              size="lg"
              variant="FillCyan400"
            >
              LOG IN
            </Button>
          </Column>
        </Row>
      </Column>
      <ToastContainer />
    </>
  );
};

export default LogInPage;

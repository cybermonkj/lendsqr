import React from "react";

import { Row, Text } from "components";

const Passwordform = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Text className="font-avenirnext font-normal mb-[2px] mt-[1px] not-italic text-[14px] text-bluegray_600_90 w-[auto]">
          {props?.Passwordtext}
        </Text>
        <Text className="font-avenirnext font-semibold mb-[3px] sm:mr-[2px] md:mr-[3px] mr-[5px] mt-[2px] text-[12px] text-cyan_400 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 uppercase w-[auto]">
          SHOW
        </Text>
      </Row>
    </>
  );
};

export default Passwordform;

import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function Sample() {
  //####################################################
  //모달 라이브러리
  //####################################################
  const error = () => {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  };

  return (
    <>
      <Space wrap>
        <Button onClick={error}>Error</Button>
      </Space>
    </>
  );
}

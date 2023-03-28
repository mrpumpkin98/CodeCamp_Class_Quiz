import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function Sample() {
  const [state, setState] = useState();

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setState(dateString);
  };

  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
      <div>{state}</div>
    </>
  );
}

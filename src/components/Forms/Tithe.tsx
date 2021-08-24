import React, { useState, useEffect } from "react";
import GoBack from "../GoBack";

import { Transfer, Button } from "antd";
import { newData } from "../../others/data";

interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

interface TargetData {
  key: string;
}

function TitheForm() {
  const [mockData, setMockData] = useState<MockData[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  //console.log(sourceData);

  useEffect(() => {
    // const getData = newData;
    // setMockData(getData);

    getMock();
  }, []);

  const getMock = async () => {
    let trgetKeys: string[] = [];
    let mckData = [];

    for (let data of newData) {
      const chosen: Boolean = data.chosen;
      const key: string = data.key;

      if (chosen) {
        trgetKeys.push(key);
      }
      mckData.push(data);
    }

    setMockData(mckData);
    setTargetKeys(trgetKeys);
  };

  // console.log(mockData);
  // console.log(targetKeys);

  const renderFooter = () => (
    <Button
      size="small"
      style={{ float: "right", margin: 5 }}
      onClick={getMock}
    >
      Reset
    </Button>
  );

  const filterOption = (inputValue: any, option: any) =>
    option.description.indexOf(inputValue) > -1;

  const handleChange = (targetKeys: any) => {
    setTargetKeys(targetKeys);
  };

  const handleSearch = (dir: any, value: any) => {
    console.log("search:", dir, value);
  };

  return (
    <div>
      <GoBack />
      <Transfer
        dataSource={mockData}
        showSearch
        filterOption={filterOption}
        targetKeys={targetKeys}
        onChange={handleChange}
        onSearch={handleSearch}
        render={(item) => item.title}
        footer={renderFooter}
        listStyle={{
          width: 250,
          height: 500,
        }}
        operations={["to right", "to left"]}
        titles={["Source", "Target"]}
        oneWay
      />

      <Button
        size="small"
        type="primary"
        htmlType="submit"
        style={{ float: "right", margin: 5 }}
        onClick={() => console.log(targetKeys)}
      >
        Submit
      </Button>
    </div>
  );
}

export default TitheForm;

import { useState, useEffect } from "react";
import GoBack from "../../components/GoBack";

import { Transfer, Button, DatePicker, Typography } from "antd";

import { newData } from "../../utils/data";

const { Text } = Typography;

interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

// interface TargetData {
//   key: string;
// }

function TitheForm() {
  const [mockData, setMockData] = useState<MockData[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [month, setMonth] = useState<string>("");
  const [alert, setAlert] = useState({
    emptytext: false,
    emptytransfer: false,
  });

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
      // const chosen: Boolean = data.chosen;
      // const key: string = data.key;

      //   if (chosen) {
      //     trgetKeys.push(key);
      //   }
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

  function onChange(date: any, dateString: any) {
    console.log(dateString);
    setMonth(dateString);
  }

  const onFinish = () => {
    // console.log(targetKeys);
    // console.log(month);

    if (!month) {
      setAlert((prevState): any => ({
        ...prevState,
        emptytext: true,
      }));
    }

    if (targetKeys.length === 0) {
      setAlert((prevState): any => ({
        ...prevState,
        emptytransfer: true,
      }));
    }

    console.log(month, targetKeys);
  };

  return (
    <>
      <GoBack />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <DatePicker onChange={onChange} picker="month" />
            {alert.emptytext ? (
              <Text type="danger" style={{ margin: 0, paddingLeft: "5px" }}>
                Required!
              </Text>
            ) : null}
          </div>

          <div>
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
            {alert.emptytransfer ? (
              <Text type="danger" style={{ margin: 0, paddingLeft: "5px" }}>
                Required!
              </Text>
            ) : null}
          </div>

          <Button
            size="small"
            type="primary"
            htmlType="submit"
            style={{ float: "right", margin: 5 }}
            onClick={onFinish}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default TitheForm;

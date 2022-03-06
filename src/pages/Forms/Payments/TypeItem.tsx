import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import GoBack from "../../../components/GoBack";
import { ADD_PAYMENT } from "../../../utils/graphqlFunctions/mutations";
import { success } from "../../../components/Modal/Modal";
import { Transfer, Button, DatePicker, Typography } from "antd";
import { useParams } from "react-router-dom";
import { GET_PAYMENT } from "../../../utils/graphqlFunctions/queries";

const { Text } = Typography;

interface MemberData {
  key: string;
  firstName: string;
  lastName: string;
}

function Type({ dataSource }: any) {
  let { slug }: any = useParams();

  const [members, setMembers] = useState<MemberData[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [month, setMonth] = useState<string>("");
  const [alert, setAlert] = useState({
    emptytext: false,
    emptytransfer: false,
  });

  const [addPaymentPayer] = useMutation(ADD_PAYMENT, {
    refetchQueries: [{ query: GET_PAYMENT }],
  });

  useEffect(() => {
    getMock();
  }, []);

  const getMock = async () => {
    let trgetKeys: string[] = [];
    let refinedMembers = [];

    for (let data of dataSource) {
      refinedMembers.push({
        key: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
      });
    }

    setMembers(refinedMembers);
    setTargetKeys(trgetKeys);
  };

  const renderFooter = () => (
    <Button
      size="small"
      style={{ float: "right", margin: 5 }}
      onClick={dataSource}
    >
      Reset
    </Button>
  );

  const handleChange = (targetKeys: any) => {
    setTargetKeys(targetKeys);
  };

<<<<<<< HEAD
  const handleSearch = (dir: any, value: any) => {};
=======
  const handleSearch = (dir: any, value: any) => {
    // console.log("search:", dir, value);
  };
>>>>>>> 6391e24b0b53e55ffcc6385cadb38615b425c2e7

  function onChange(date: any, dateString: any) {
    setMonth(dateString);
  }

  const onFinish = async () => {
    if (!month && targetKeys.length === 0) {
      return setAlert((prevState): any => ({
        ...prevState,
        emptytext: true,
        emptytransfer: true,
      }));
    }

    if (!month) {
      return setAlert((prevState): any => ({
        ...prevState,
        emptytext: true,
      }));
    }

    if (targetKeys.length === 0) {
      return setAlert((prevState): any => ({
        ...prevState,
        emptytransfer: true,
      }));
    }

    await addPaymentPayer({
      variables: {
        addPaymentPayerInput: {
          members: targetKeys,
          month,
          type: slug,
        },
      },
    });

    success("");

    setTargetKeys([]);

    setAlert((prevState): any => ({
      ...prevState,
      emptytext: false,
      emptytransfer: false,
    }));
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
              dataSource={members}
              showSearch
              targetKeys={targetKeys}
              onChange={handleChange}
              onSearch={handleSearch}
              render={(item) => `${item.firstName} ${item.lastName}`}
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

export default Type;

import { useState } from "react";
import { Table, Tag, Space, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PLEDGES } from "../../utils/graphqlFunctions/queries";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import moment from "moment";

function Pledges() {
  const { loading, error, data } = useQuery(GET_PLEDGES);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  // const filterData = (data: any) => {
  //   let filteredData = data.filter((item: any) => state === item.id);
  //   return filteredData[0];
  // };
  
  let searchInput: any;
  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();

    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node: any) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchText(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text: any, record: any) =>
      searchedColumn === dataIndex ? (
        <Space size="middle">
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? ` ${record.id}` : ""}
          />
        </Space>
      ) : (
        <Space size="middle">
          <Link to={`/pledges/${record.id}`}>
            {`${record.firstName} ${record.lastName}`}
          </Link>
        </Space>
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Programme",
      dataIndex: "programme",
      key: "programme",
    },
    {
      title: "Date",
      dataIndex: "pledgeDate",
      key: "pledgeDate",
      render: (text: any, record: any) => {
        const year = moment(record.pledgeDate).format("YYYY-MM-DD");
        return <span>{year}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "PENDING",
          value: "PENDING",
        },
        {
          text: "REDEEMED",
          value: "REDEEMED",
        },
      ],
      key: "status",
      onFilter: (value: any, record: any) => record.status.indexOf(value) === 0,
      render: (text: any, record: any) => {
        let pitch = record.status === "PENDING" ? "red" : "green";
        return <Tag color={pitch}>{record.status}</Tag>;
      },
    },
  ];

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return <Table rowKey="id" columns={columns} dataSource={data.pledges} />;
}

export default Pledges;

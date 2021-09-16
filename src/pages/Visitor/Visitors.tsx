import { useState } from "react";
import { Table, Space, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_VISITORS } from "../../utils/graphqlFunctions/queries";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

function Visitors() {
  const { loading, error, data } = useQuery(GET_VISITORS);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

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
    render: (text: any, record: any): any =>
      searchedColumn === dataIndex ? (
        <Space size="middle">
          <Link to={`/visitors/${record.firstName} ${record.lastName}`}>
            <Highlighter
              highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={
                text ? ` ${record.firstName} ${record.lastName}` : ""
              }
            />
          </Link>
        </Space>
      ) : (
        <Space size="middle">
          <Link to={`/visitors/${record.id}`}>
            {record.firstName} {record.lastName}
          </Link>
        </Space>
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Age Group",
      dataIndex: "ageGroup",
      key: "ageGroup",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Date Visited",
      dataIndex: "date",
      key: "date",
    },
  ];

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return <Table rowKey="id" columns={columns} dataSource={data.visitors} />;
}

export default Visitors;

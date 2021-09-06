import { useState } from "react";
import { Table, Tag, Space, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import { colorSwitch } from "../../utils/functions";
import { userData } from "../../utils/data";

function Members() {
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
          <Link to={`/members/${record.firstName} ${record.lastName}`}>
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
          <Link to={`/members/${record.firstName} ${record.lastName}`}>
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
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      width: "60%",
      render: (department: string[]) => (
        <>
          {department.map((tag: string, index: any): any => {
            let color = colorSwitch(tag);
            let params = tag.toLocaleLowerCase();

            return (
              <Link to={`/departments/${params}`}>
                <Tag color={color} key={index}>
                  {tag}
                </Tag>
              </Link>
            );
          })}
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={userData} />;
}

export default Members;

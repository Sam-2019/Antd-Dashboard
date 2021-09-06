import { PageHeader } from "antd";

const PageHead = ({ header }: any) => {
  return (
    <PageHeader
      className="site-page-header goBack"
      title={
        <>
          <span className="breadcrumb">{header}</span>
        </>
      }
    />
  );
};

export default PageHead;

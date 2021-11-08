import { Content } from "antd/lib/layout/layout";

const ContentLayout = ({ children }) => {
  return <Content style={{ height: "auto" }}>{children}</Content>;
};

export default ContentLayout;

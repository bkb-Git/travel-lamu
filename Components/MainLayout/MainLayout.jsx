import { Layout } from "antd";
import MainHeader from "../MainHeader";
import ContentLayout from "../ContentLayout/ContentLayout";

import style from "./MainLayout.module.scss";

const MainLayout = ({ children, styles }) => {
  return (
    <Layout className={style.mainLayout} style={{ ...styles }}>
      <MainHeader />
      <ContentLayout>{children}</ContentLayout>
    </Layout>
  );
};

export default MainLayout;

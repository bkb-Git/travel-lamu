import { Layout } from "antd";
import MainHeader from "../MainHeader";
import ContentLayout from "../ContentLayout/ContentLayout";

import style from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <Layout className={style.mainLayout}>
      <MainHeader />
      <ContentLayout>{children}</ContentLayout>
    </Layout>
  );
};

export default MainLayout;

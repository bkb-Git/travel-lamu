import { Layout } from "antd";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import ContentLayout from "../ContentLayout/ContentLayout";

import style from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <Layout className={style.mainLayout}>
      <MainHeader />
      <ContentLayout>{children}</ContentLayout>
      <MainFooter />
    </Layout>
  );
};

export default MainLayout;

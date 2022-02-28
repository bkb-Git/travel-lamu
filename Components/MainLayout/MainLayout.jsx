import { Layout } from "antd";
import { useState } from "react";

import MainHeader from "../MainHeader";
import ContentLayout from "../ContentLayout/ContentLayout";
import style from "./MainLayout.module.scss";

import AccountModal from "../AccountModal/AccountModal";

const MainLayout = ({ children, breakpoint }) => {
  const [isModalVisible, setIsModalVisible] = useState({ signIn: false, signUp: false });

  return (
    <Layout className={style.mainLayout} id="main-layout">
      <MainHeader modalhandler={setIsModalVisible} breakpoint={breakpoint} />
      <ContentLayout>{children}</ContentLayout>
      <AccountModal modalhandler={setIsModalVisible} isModalVisible={isModalVisible} />
    </Layout>
  );
};

export default MainLayout;

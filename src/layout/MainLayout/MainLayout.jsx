import { Layout } from "antd";
import { useState } from "react";

import MainHeader from "../MainHeader";
import AccountModal from "../../../Components/AccountModal";

import style from "./MainLayout.module.scss";

const { Content } = Layout;

const MainLayout = ({ children, breakpoint }) => {
  const [isModalVisible, setIsModalVisible] = useState({ signIn: false, signUp: false });

  return (
    <Layout className={style.mainLayout} id="main-layout">
      <MainHeader modalhandler={setIsModalVisible} breakpoint={breakpoint} />
      <Content>{children}</Content>
      <AccountModal modalhandler={setIsModalVisible} isModalVisible={isModalVisible} />
    </Layout>
  );
};

export default MainLayout;

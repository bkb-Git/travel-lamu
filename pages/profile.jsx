import { useContext, useEffect } from "react";
import { Row, Spin } from "antd";
import { useRouter } from "next/router";

import UserContext from "../UserContext/UserContext";
import Profile from "../src/pages/Profile";

const ProfilePage = () => {
  const { loading, userDetails } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !userDetails) {
      return router.push("/");
    }
    return null;
  }, [userDetails, router, loading]);

  if (loading) {
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Row>
    );
  }

  return <Profile user={userDetails} />;
};

export default ProfilePage;

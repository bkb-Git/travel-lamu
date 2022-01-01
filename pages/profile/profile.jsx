import { useContext, useEffect } from "react";
import { Row, Spin } from "antd";
import { useRouter } from "next/router";

import ProfileSection1 from "../../Components/Profile/ProfileSection1";
import ProfileSection2 from "../../Components/Profile/ProfileSection2";
import UserContext from "../../UserContext/UserContext";

const Profile = () => {
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

  return (
    <Row style={{ height: "100%", background: "white", flexDirection: "column" }}>
      <ProfileSection1 user={{ loading, userDetails }} />
      <ProfileSection2 user={{ loading, userDetails }} />
    </Row>
  );
};

export default Profile;

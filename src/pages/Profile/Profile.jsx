import Section1 from "./Section1";
import Section2 from "./Section2";

const Profile = (props) => {
  const { user } = props;
  return (
    <>
      <Section1 user={user} />
      <Section2 user={user} />
    </>
  );
};

export default Profile;

import { Modal } from "antd";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

const AccountModal = ({ isModalVisible, modalhandler }) => {
  const onCancel = () => modalhandler({ signIn: false, signUp: false });

  const renderModalContent = () => {
    if (isModalVisible.signIn) {
      return <SignInForm exitModal={onCancel} modalhandler={modalhandler} />;
    }
    return <SignUpForm exitModal={onCancel} modalhandler={modalhandler} />;
  };

  return (
    <Modal
      centered
      footer={null}
      width={450}
      visible={isModalVisible.signIn || isModalVisible.signUp}
      onCancel={onCancel}
    >
      {renderModalContent()}
    </Modal>
  );
};

export default AccountModal;

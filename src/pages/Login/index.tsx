import { Col, Row, Form } from "antd";
import "./style.scss";
import { FormInput } from "../../components/form";
import ButtonLoading from "../../components/ButtonLoading";
import { loginWithUser } from "../../apis/store";

const LoginPage = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const result = await loginWithUser(values);
      console.log("result:", result);
      if (result) {
        localStorage.setItem(
          "ACCESS_TOKEN_KEY",
          JSON.stringify(result?.access_token)
        );
        setTimeout(() => (window.location.href = "/"), 2000);
      }
    } catch (error: any) {
      if (error && error.response && error.response.status === 400) {
        console.log("fail");

        return;
      }
      console.error(error.response);
    }
  };

  return (
    <Row className="main-login">
      <Col className="main-login-content" xs={{ span: 24 }} lg={{ span: 10 }}>
        <Row className="header-login">
          <img
            src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
            alt="tiki-logo"
            width="72"
            height="72"
          />
          <Row></Row>
        </Row>
        <Row className="text-login">
          <p className="text-welcome">Welcome to Tiki Shop</p>
        </Row>
        <Form className="form-login" form={form}>
          <FormInput
            className="form-field"
            name="username"
            size="large"
            placeholder="Username"
            rules={[{ required: true, message: "Require" }]}
            onPressEnter={onSubmit}
          />
          <FormInput
            className="form-field"
            name="password"
            size="large"
            type="password"
            placeholder="Password"
            rules={[{ required: true, message: "Require" }]}
            onPressEnter={onSubmit}
          />

          <ButtonLoading className="btn-login" onFunction={onSubmit}>
            LogIn
          </ButtonLoading>
        </Form>
      </Col>
      <Col className="background-login" span={14}></Col>
    </Row>
  );
};

export default LoginPage;

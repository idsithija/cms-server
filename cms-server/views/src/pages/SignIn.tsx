import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useSignInMutation } from "@/core/api";
import { InputText, Password } from "@/components/FormInput";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

type LoginFormData = {
  username: string;
  password: string;
};

const SIGNIN_FROM_INITIAL_VALUES: LoginFormData = {
  username: "",
  password: "",
};

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required."),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();

  const signinClick = (values: LoginFormData) => {
    signIn(values)
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      });
  };

  const LoginCardElement = () => {
    return <Button type="submit" label="Sign in" />;
  };

  return (
    <>
      <div className="h-screen">
        <div className="h-full flex align-items-center">
          <div className="w-20rem mx-auto">
            <Formik
              initialValues={SIGNIN_FROM_INITIAL_VALUES}
              validationSchema={SigninSchema}
              onSubmit={(values: LoginFormData) => signinClick(values)}
            >
              {(props: FormikProps<LoginFormData>) => (
                <Form>
                  <Card
                    title="Login"
                    className="w-full"
                    footer={() => LoginCardElement()}
                  >
                    <div className="flex flex-column gap-4">
                      <InputText
                        id="username"
                        name="username"
                        placeholder="Username"
                        inputicon={<i className="pi pi-user" />}
                        onChange={props.handleChange}
                        required
                      />
                      <Password
                        id="password"
                        name="password"
                        placeholder="Password"
                        inputicon={<i className="pi pi-lock" />}
                        onChange={props.handleChange}
                        required
                      />
                    </div>
                  </Card>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

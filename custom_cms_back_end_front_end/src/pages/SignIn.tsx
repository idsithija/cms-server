import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useSignInMutation } from "@/core/api";
import { InputTypes } from "@/components/FormInputs/types";
import Fields from "@/components/FormInputs/Fields";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  username: string;
  password: string;
};

const SignIn = () => {
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const signInClick = () => {
    signIn(loginFormData)
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      });
  };

  const LoginCardElement = () => {
    return <Button label="Sign in" onClick={() => signInClick()} />;
  };

  return (
    <>
      <div className="h-screen">
        <Fields
          type={InputTypes.Text}
          name="ietm_name"
          label="ss"
          placeholder="ss"
          id="ietm_name"
        />
        <Fields />
        <div className="h-full flex align-items-center">
          <div className="w-20rem mx-auto">
            <Card
              title="Login"
              className="w-full"
              footer={() => LoginCardElement()}
            >
              <div className="flex flex-column gap-4">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user" />
                  </span>
                  <InputText
                    placeholder="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLoginFormData((prevData: LoginFormData) => ({
                        ...prevData,
                        username: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-lock" />
                  </span>
                  <Password
                    className="w-full"
                    placeholder="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLoginFormData((prevData: LoginFormData) => ({
                        ...prevData,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

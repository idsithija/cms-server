import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useSignInMutation } from "@/core/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loginFormData] = useState({
    username: "admin",
    password: "123",
  });
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();

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
    <div className="h-screen">
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
                  <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
              </div>
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-lock"></i>
                </span>
                <Password className="w-full" placeholder="Password" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import { Card } from "primereact/card";
import "./styles/main.scss";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Counter } from "./components/counter";

const LoginCardElement = () => {
  return <Button label="Sign in" />;
};

const App = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex align-items-center">
        <Counter />
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

export default App;

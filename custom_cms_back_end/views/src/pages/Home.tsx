import { useSignOutMutation } from "@/core/api";
import { Button } from "primereact/button";

const Home = () => {
  const [signOut] = useSignOutMutation();
  const signoutClick = () => {
    signOut();
  };

  return <Button onClick={signoutClick}>Signout</Button>;
};

export default Home;

import { useGetCurrentUserQuery } from "@/core/redux";

export const Counter = () => {
  const { data } = useGetCurrentUserQuery();

  console.log(data);

  return <div></div>;
};

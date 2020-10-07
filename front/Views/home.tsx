import React from "react";

import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries/getUser.query";

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);
  return <h1>hello</h1>;
};

export default Home;

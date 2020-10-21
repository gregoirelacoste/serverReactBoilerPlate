import React from "react";
import "../styles.css";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries/getUser.query";

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);
  return (
    <div className="App">
      <h1>Hello World !</h1>
    </div>
  );
};

export default Home;

import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import {
  GET_POST,
  GET_POSTS,
} from "../../services/graphql/modules/post/queries";
import { CREATE_USER } from "../../services/graphql/modules/user/mutation";

import "./Home.css";

interface Post {
  title: string;
  content: string;
  published: boolean;
}

const Home: React.FC = () => {
  const { loading, error, data: posts } = useQuery<{ post: Post }>(GET_POSTS);

  useQuery<{ post: Post }>(GET_POST, {
    variables: { id: "123d7e74-7bb3-4898-9a1d-5bb0ac65e423" },
  });

  const [createUser, { data: userData }] = useMutation(CREATE_USER);

  const onCreateUser = () => {
    createUser({
      variables: { name: "Glauber", email: "glauber@brack.com.br" },
    });
  };

  if (loading || error) return null;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{posts?.post.title}</h1>
        <h1>{userData?.createUser.name}</h1>
        <button onClick={onCreateUser}>Criar usuário</button>
      </header>
    </div>
  );
};

export default Home;

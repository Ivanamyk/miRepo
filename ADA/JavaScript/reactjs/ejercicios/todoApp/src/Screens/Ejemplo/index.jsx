import React, { useState, useEffect } from "react";
import { Layout, Main } from "../../components";
import { usersApi } from "./api";
import { User } from "./components";

export const Ejemplo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersApi.get().then((response) => setUsers(response));
  }, []);

  return (
    <Layout>
      <Main>
        <h1>Ejemplo</h1>

        <ul>
          {users.length < 0
            ? "Loading..."
            : users.map((user, i) => {
                return (
                  <li key={user}>
                    <User id={i} />
                  </li>
                );
              })}
        </ul>
      </Main>
    </Layout>
  );
};

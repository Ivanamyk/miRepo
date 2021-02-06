import React, { useEffect, useState } from "react";
import { usersApi } from "../../api";

export const User = ({ id }) => {
  const [liked, setLiked] = useState();

  useEffect(() => {
    usersApi.like();
  }, [liked]);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div>
      Usuario {id}
      <button onClick={handleClick}>Like</button>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import fakeUsers from "../fakeUserData.js";

export default function MainBody() {
  const [userData, setUserData] = useState(fakeUsers);

  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <div>
      <h1>Main Body</h1>
    </div>
  );
}

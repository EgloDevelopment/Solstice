import * as React from "react";

export default function Page() {
  React.useEffect(() => {
    window.location.href = "/register/v1/1";
  }, []);
}

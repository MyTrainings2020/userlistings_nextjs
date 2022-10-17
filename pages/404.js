import { useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

export const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <h2>We are sorry, The page cannot be found!</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p>
          Go back to the
          <Link href="/">
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default ErrorPage;

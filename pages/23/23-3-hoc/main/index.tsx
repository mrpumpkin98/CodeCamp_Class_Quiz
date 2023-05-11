import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LoginPage = () => {
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);
  useEffect(() => {
    refetch({ page: 1 });
  }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
};

export default withAuth(LoginPage);

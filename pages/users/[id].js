import { useRouter } from "next/router";
import ManinContainer from "../../components/ManinContainer";

export default function ({user}) {
  const { query } = useRouter();
  return (
    <ManinContainer>
      <h1>user id - {query.id}</h1>
      <div>user name - {user.name}</div>
    </ManinContainer>
  );
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}
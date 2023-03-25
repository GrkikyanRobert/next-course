import Link from "next/link";
import { useEffect, useState } from "react";
import ManinContainer from "../components/ManinContainer";

const Users = ({users}) => {
  return (
    <ManinContainer>
      <h1>Users111</h1>
      <ul>
        {users.map((item, index) => (
            <li key={item.id}>
          <Link key={index} href={`/users/${item.id}`}>
            <span>{item.name}</span>
          </Link>
            </li>
        ))}
      </ul>
    </ManinContainer>
  );
};
export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
const users = await response.json()
    return {
      props: {users}, // will be passed to the page component as props
    }
  }

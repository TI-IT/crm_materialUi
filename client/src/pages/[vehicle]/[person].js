import { useRouter } from 'next/router';
export default function Person({ ownersList }) {
  const router = useRouter();
  return <pre>{JSON.stringify(ownersList[1].details)}</pre>;
}

Person.getInitialProps = async (ctx) => {
  // ctx-Контекст
  // const query = ctx.query
  const { query } = ctx;
  console.log(
    'http://localhost:9001/people?ownerName=' + query.person + '&vehicle=' + query.vehicle,
  );
  const response = await fetch(
    'http://localhost:9001/people?ownerName=' + query.person + '&vehicle=' + query.vehicle,
  );
  const ownersList = await response.json();
  return { ownersList: ownersList };
};

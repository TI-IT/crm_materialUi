import Link from 'next/link';

export default function List({ ownersList }) {
  return (
    <div>
      {ownersList.map((e, id) => (
        <div key={id}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            Navigate to {e.ownerName}'s {e.vehicle}
          </Link>
        </div>
      ))}
    </div>
  );
}
List.getInitialProps = async () => {
  const response = await fetch('http://localhost:9001/people');
  const ownersList = await response.json();
  return { ownersList: ownersList };
};

import Styles from "/Styles/Jobs.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { dlists: data },
  };
};

const index = ({ dlists }) => {
  return (
    <>
      <div>
        <h1>All Listings</h1>
        {dlists.map((dlist) => (
          <Link href={"/Listings/" + dlist.id} key={dlist.id}>
            <a className={Styles.single}>
              <h3>{dlist.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;

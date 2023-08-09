import Link from "next/link";

const SunsetBanner: React.FC = () => {
  return (
    <p
      className="sunset-banner sunset-text-color"
      style={{
        marginBlock: "1em",
      }}
    >
      Atom and all repositories under Atom will be archived on December 15, 2022
      <Link
        className="sunset-text-color"
        href="https://github.blog/2022-06-08-sunsetting-atom/"
      >
        {" "}
        Learn more in our official statement
      </Link>
    </p>
  );
};

export default SunsetBanner;

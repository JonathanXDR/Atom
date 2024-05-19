import Link from "next/link";

const CreditBadge: React.FC = () => {
  return (
    <Link className="love" href="https://github.com/">
      <span className="octicon octicon-code"></span> with{" "}
      <span className="octicon octicon-heart"></span> by{" "}
      <span className="octicon octicon-logo-github"></span>
    </Link>
  );
};

export default CreditBadge;

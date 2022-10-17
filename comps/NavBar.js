import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo2.png" width={158} height={77} alt="Logo Here" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <Link href="/Listings">
        <a>Listings</a>
      </Link>
      <Link href="/blogs/Test1">
        <a>Test1</a>
      </Link>
      <Link href="/blogs/blog1">
        <a>Blog1</a>
      </Link>
    </nav>
  );
};

export default NavBar;

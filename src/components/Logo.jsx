import Image from "next/image";
import Link from "next/link";

const Logo = () =>  {
  return (
    <Link href="/" className="logo">
      <Image src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd348d4e192cd1bd5b744b7_logo.svg" alt="logo" height={60} width={130}/>
    </Link>
  );
}

export default Logo;
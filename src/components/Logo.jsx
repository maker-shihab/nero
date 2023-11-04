import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" className="logo_imag">
        <Image src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd348d4e192cd1bd5b744b7_logo.svg" alt="logo" height={40} width={100} />
      </Link>
    </div>
  );
}

export default Logo;
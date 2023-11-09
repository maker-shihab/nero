import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" className="logo_imag">
        <Image src="/images/logo.png" alt="logo" height={60} width={50} />
      </Link>
    </div>
  );
}

export default Logo;
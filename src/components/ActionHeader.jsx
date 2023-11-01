import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ActionHeader= () => {
  return (
    <>
      <div className="phone_wrap">
        <span>
          <Image src='/demo.png' alt="icon" height={40} width={35} />
        </span>
        <Link href='tel:1800270963'>
          (+66) 1800270963
        </Link>
      </div>
      <Button />
    </>
  )
}


export default ActionHeader;
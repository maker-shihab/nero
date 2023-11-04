import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { GrPhone } from 'react-icons/gr';

const ActionHeader = () => {
  return (
    <div className="header_right">
      <div className="phone_wrap">
        <span>
          <GrPhone />
        </span>
        <Link href='tel:1800270963'>
          (+66) 1800270963
        </Link>
      </div>
      <div className="menuHandaller">
        <FaBars />
      </div>
    </div>
  )
}


export default ActionHeader;
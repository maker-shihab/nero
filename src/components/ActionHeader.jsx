import Link from "next/link";
import { GrPhone } from 'react-icons/gr';
import styles from '../styles/Header.module.css';
import Button from "./Button";

const ActionHeader= () => {
  return (
    <>
      <div className={styles.phone_wrap}>
        <span>
          <GrPhone />
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
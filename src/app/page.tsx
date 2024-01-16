import Image from 'next/image'
import styles from './page.module.css'
import UserInput from "../Components/UserInput/UserInput"

export default function Home() {
  return (
    <div className='container'>
      <h1>Select User</h1>
      <UserInput />
    </div>
  )
}

import Image from 'next/image'
import "./page.css"
import UserInput from "../Components/UserInput/UserInput"

export default function Home() {
  return (
    <div className='container'>
      <h1 className='page-title'>Pick User</h1>
      <UserInput />
    </div>
  )
}

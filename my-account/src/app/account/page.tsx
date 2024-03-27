import Link from "next/link"

const AccountPage = () => {
  return (
    <div><p>Account Page</p><Link href="account/help"><button className="bg-slate-500 p-2 rounded-lg">Help</button></Link></div>
  )
}

export default AccountPage
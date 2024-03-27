import Link from "next/link"

const HelpPage = () => {
  return (
    <div><p>Help Page</p><Link href="/account"><button className="bg-slate-500 p-2 rounded-full">Back to Account</button></Link></div>
  )
}

export default HelpPage
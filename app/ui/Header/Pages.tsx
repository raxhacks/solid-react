"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

type PagesProps = {}
const Pages: React.FC<PagesProps> = () => {
  // For equal rendering styles such as header buttons use arrays to map?
  const router = useRouter()
  const pages = ['Home', 'About', 'Contact']
  const [page, setPage] = useState('Home')

  // standarize callback functions when it is possible
  const handleClick = (page: string) => {
    setPage(page)
    router.push(`/${page.toLowerCase()}`)
  }
  return (
    <>
      {pages.map((current_page, index) => (
        <button key={index} className={`text-white
        ${page===current_page && "!text-[red]"}`}
        onClick={()=>handleClick(current_page)}>
          {current_page}
        </button>
      ))}
    </>
  )
}

export default Pages;
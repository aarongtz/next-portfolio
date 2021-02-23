import Link from "next/link";

const Layout = ({ children, title }) => (
   <div className="root">
      <header>
         <Link href="/">
            <a>Home</a>
         </Link>
         <Link href="/about">
            <a>About</a>
         </Link>
         <Link href="/hireme">
            <a>Hire me</a>
         </Link>
      </header>

      <h1>{title}</h1>

      { children}
      <footer>&copy; { new Date().getFullYear() }</footer>
      
   </div>
)

export default Layout;
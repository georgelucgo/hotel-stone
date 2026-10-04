import type { ReactNode } from "react"
import "./Container.css"

function Container({children}: {children: ReactNode}) {

  return (
    <>
     <div className="container">
        {children}
     </div>
    </>
  )
}

export default Container

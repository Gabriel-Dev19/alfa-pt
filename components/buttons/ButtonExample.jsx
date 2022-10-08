import Link from "next/link"

export function ButtonBlueCallAction({size, children, onClick}) {
  return(
    <button className={`btn-${size} btn btn-blue`} onClick={onClick}>
      {children}
    </button>
  )
}

export function LinkBlueHref({size, children, href = '/'}) {
  return(
    <Link href={String(href)}>
      <a className={`btn-${size} btn btn-blue`} title={children}>
        {children}
      </a>
    </Link>
  )
}
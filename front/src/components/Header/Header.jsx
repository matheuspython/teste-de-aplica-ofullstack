import './style.css'

export function Header(props) {
  return (
    <header className="header">
      <div className="container">
      <h1>{props.children}</h1>
      </div>
        
    </header>
  )
}
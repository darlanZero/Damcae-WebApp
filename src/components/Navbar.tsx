import { AlignLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='navbar root-bg bg-opacity-15 outline outline-1 outline-slate-800'>
        <div className='navbar-start'>
            <div className='dropdown'>
                <div tabIndex={0} className='btn btn-ghost lg:hidden'>
                    <AlignLeft className="h-5 w-5" /> 
                </div>

                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow z-[1] bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/">
                            página Inicial
                        </a>
                    </li>

                    <li>
                        <a>Sistemas</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Contato</a></li>
                </ul>
            </div>

            <a className="btn btn-ghost normal-case text-xl">DAMCAE</a>
        </div>

        
        <div className="navbar-end">
            <a className="btn btn-outline mr-2">Mudar Tema</a>

            <a className="btn btn-outline"
                onClick={() => navigate("/form")}
            >
                Login
            </a>
        </div>
    </div>
  )
}

export default Navbar
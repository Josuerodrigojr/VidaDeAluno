import './style.scss'
import {Link} from 'react-router-dom'


function Cabecalho () {
    return(<div className='cor'>
    
        
    <div className="item"><img src='logo.png' className='logo' /></div>
	<div className="item"><Link to='/login'><p className='texto'>Login</p></Link></div>

       </div>
    )   

}

export default Cabecalho;
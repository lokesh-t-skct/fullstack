import PropTypes from 'prop-types'
import '../../assets/css/userlayout.css'
import logo from '../../assets/images/react.svg';

const Main = ({children}) => {
  return (
    <div className="user_layout">
        <header>
            
        </header>
        <main style={{backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', width: '50%', height: '50%'}}>
            {children}
        </main>
        <footer>
            
        </footer>
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default Main;
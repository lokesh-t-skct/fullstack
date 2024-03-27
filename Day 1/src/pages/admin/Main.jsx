import PropTypes from 'prop-types'
import '../../assets/css/adminlayout.css'

const Main = ({children}) => {
  return (
    <div className="admin_layout">
        <aside>
            Sidebar
        </aside>
        <main>
            {children}
        </main>
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default Main


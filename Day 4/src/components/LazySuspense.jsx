import PropTypes from 'prop-types'
import { Suspense } from 'react'
import image from '../assets/images/loading.gif'

function LazySuspense({component:Component, ...rest}) {
    return (
        <Suspense fallback={<img src={image} style={{height: "200px", position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} alt='Wait Panunga Broo'/>}>
            <Component {...rest}/>
        </Suspense>
    )
}

LazySuspense.propTypes={
     component: PropTypes.elementType.isRequired
}

export default LazySuspense
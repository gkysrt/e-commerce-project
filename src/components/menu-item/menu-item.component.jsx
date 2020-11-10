import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <div 
            className={size + ' menu-item'}
            onClick={() => {history.push(match.url + linkUrl)}}
            >
            <div
                style={{backgroundImage: 'url(' + imageUrl + ')'}} 
                className='background-image'
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW!</span>
            </div>
        </div>
    )
}

// MenuItem is not wrapped inside <Route></Route> component so normally it won't get its properties. 
// Using withRouter() here enables reach of history, match etc. properties of Router object
export default withRouter(MenuItem);
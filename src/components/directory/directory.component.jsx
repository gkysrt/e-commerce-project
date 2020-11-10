import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render()
    {
        return (
            <div className='directory-menu'>
                {
                    // Below usage is ES6 feature. if property names and incoming variable names are same (e.g style = {style} imageUrl = {imageUrl})
                    // you can just lay all of them out at once by using ...<variable_name> usage.
                    this.state.sections.map(({id, ...otherSectionProps}) => 
                    <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
    }
}

export default Directory;
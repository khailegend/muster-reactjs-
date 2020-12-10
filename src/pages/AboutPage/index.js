import React, { Component } from 'react'
import MenuTop from './../../components/MenuTop/MenuTop'
import Content from './Content'
import MenuFooter from './../../components/MenuFooter/MenuFooter'

class AboutPage extends Component {
    render (){
        return (
            <>
                <MenuTop />
                <Content />
                <MenuFooter />
            </>
        )
    }
}

export default AboutPage
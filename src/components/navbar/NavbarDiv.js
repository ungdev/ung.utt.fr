import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd'
import logoUNG from '../../assets/logo.png'
import './NavbarDiv.css'


class NavbarDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile : window.innerWidth < 1000,
      collapsed : window.innerWidth < 1000
    }
    
  }

  handleResize = () => {
    if (window.innerWidth < 1000) {
      this.setState({mobile:true, collapsed:true})
    }
    else {
      this.setState({mobile:false, collapsed:false})
    }
  }

  collapseMenu = () => {
    if (this.state.collapsed) {
      this.setState({collapsed:false})
    }
    else {
      this.setState({collapsed:true})
    }
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      this.handleResize
    )
  }

  render () {
    return(
      <Layout.Header style={{padding:0, display: 'flex', justifyContent: this.state.mobile ? 'flex-start' : 'center'}}>
        <Icon
         type="menu-unfold" 
         style={{color:'white', fontSize:'30px', marginTop:'15px', marginLeft: '30px', display: this.state.mobile ? '' : 'none'}}
         onClick={this.collapseMenu}
        />
        <Menu
          theme="dark"
          mode={this.state.mobile ? "inline" : "horizontal"}
          style={{lineHeight:'64px', backgroundColor:'#001529', zIndex:'99', position:'absolute', marginTop: this.state.mobile ? '64px' : '0px', display: this.state.collapsed ? 'none' : ''}}
        >
          <Menu.Item><Link to='/'><Icon type="home" theme="filled" />Accueil</Link></Menu.Item>
          <Menu.Item><Link to='/who'><Icon type="question-circle" theme="filled" /> Qui sommes-nous ?</Link></Menu.Item>
          <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="api" theme="filled" /> Technique</span>}>
            <Menu.Item key='1'><Link to='/tech/sia'>SIA</Link></Menu.Item>
            <Menu.Item key='2'><Link to='/tech/etu'>Site étu</Link></Menu.Item>
            <Menu.Item key='3'><Link to='/tech/dev'>Projets dév</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="project" theme="filled" /> Evenementiel</span>}>
            <Menu.Item key='4'><a href='http://arena.utt.fr'>UTT Arena</a></Menu.Item>
            <Menu.Item key='5'><Link to='/event/gameutt'>Game UTT</Link></Menu.Item>
            <Menu.Item key='6'><Link to='/event/barcamp'>Barcamps</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item><Link to='/comingsoon'><Icon type="alert" theme="filled" /> Prochains événements</Link></Menu.Item>
          <Menu.Item><Link to='/contact'><Icon type="mail" theme="filled" /> Nous contacter</Link></Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default NavbarDiv;
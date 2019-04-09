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
    if (this.state.mobile) {
      if (this.state.collapsed) {
        this.setState({collapsed:false})
      }
      else {
        this.setState({collapsed:true})
      }
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
      <Layout.Header
        style={{padding:0, display: 'flex', justifyContent: this.state.mobile ? 'flex-start' : 'center', alignItems: 'center', position : this.state.mobile ? 'fixed' : '', width : '100%', zIndex : '100'}}
      >
        <Icon
         type= {this.state.collapsed ? "menu-unfold" : "menu-fold"}
         style={{color:'white', fontSize:'30px', marginLeft: '30px', display: this.state.mobile ? '' : 'none'}}
         onClick={this.collapseMenu}
        />
        <Link to='/'><img src={logoUNG} className='logo' style={{display: this.state.mobile ? '' : 'none'}} alt='UNG'/></Link>
        <Menu
          theme="dark"
          mode={this.state.mobile ? "inline" : "horizontal"}
          style={{lineHeight:'64px', backgroundColor:'#001529', zIndex:'99', position: this.state.mobile ? 'fixed' : 'absolute', top: this.state.mobile ? '64px' : '0px', display : this.state.collapsed ? 'none' : ''}}
        >
          <Menu.Item onClick={this.collapseMenu}><Link to='/'><Icon type="home" theme="filled" />Accueil</Link></Menu.Item>
          <Menu.Item onClick={this.collapseMenu}><Link to='/who'><Icon type="question-circle" theme="filled" /> Qui sommes-nous ?</Link></Menu.Item>
          <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="api" theme="filled" /> Technique</span>}>
            <Menu.Item onClick={this.collapseMenu} key='1'><Link to='/tech/sia'>SIA</Link></Menu.Item>
            <Menu.Item onClick={this.collapseMenu} key='2'><Link to='/tech/etu'>Site étu</Link></Menu.Item>
            <Menu.Item onClick={this.collapseMenu} key='3'><Link to='/tech/dev'>Projets dév</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="project" theme="filled" /> Événementiel</span>}>
            <Menu.Item onClick={this.collapseMenu} key='4'><a href='http://arena.utt.fr'>UTT Arena</a></Menu.Item>
            <Menu.Item onClick={this.collapseMenu}key='5'><Link to='/event/gameutt'>Game UTT</Link></Menu.Item>
            <Menu.Item onClick={this.collapseMenu}key='6'><Link to='/event/barcamp'>Barcamps</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item onClick={this.collapseMenu}><Link to='/comingsoon'><Icon type="alert" theme="filled" /> Prochains événements</Link></Menu.Item>
          <Menu.Item onClick={() => {this.collapseMenu(); this.props.showModal()}}><Icon type='mail' theme='filled' /> Nous contacter</Menu.Item>
        </Menu>
        { ! this.state.collapsed && this.state.mobile && <div style={{width : window.innerWidth, height : window.innerHeight, backgroundColor : 'rgba(0,0,0,0.4)', position: "fixed", zIndex : '98', top : '64px'}} onClick={this.collapseMenu}></div>}
      </Layout.Header>
    );
  }
}

export default NavbarDiv;
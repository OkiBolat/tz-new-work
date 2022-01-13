import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const mapStateToPropsWithRedirect = (state) => ({
  isAuth: state.authorized.isAuthorized
})

const withAuthRedirect = (WrappedComponent) => {
  class RedirectComponent extends React.Component{
    render() {
      if(!this.props.isAuth) return <Navigate to='/login'/>
      console.log(this.props)
      return <WrappedComponent {...this.props}/>
    }
    
  }
  const ConnectedWithAuthRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent)
  return ConnectedWithAuthRedirectComponent
}
export default withAuthRedirect
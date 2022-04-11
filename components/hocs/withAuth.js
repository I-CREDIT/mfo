import React from 'react'
import {connect} from 'react-redux'
import Router from 'next/router'
import * as actions from '../../store/actions/userAction'
import cookie from 'js-cookie';

const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if(cookie.get('token') && !this.props.loggedIn) {
        this.props.fetchCurrentUser();
      }
      else if(!cookie.get('token')) {
        Router.push('/login')
      }
    }

    render() {
      if (cookie.get('token') && this.props.loggedIn) {
        return <WrappedComponent />;
      }
      if (cookie.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        return <div className="otherPages">
          <div className='pd-5 pt-5'/>
          <div className="modelLoader"/>
        </div>
      }
      return <div className='otherPages'>
        <div className="modelLoader"/>
        <h2 className='text-center pt-5'>Время вашего сеанса истекло</h2>
      </div>;
    }
  }

  const mapStateToProps = reduxStoreState => ({
    loggedIn: reduxStoreState.userReducer.loggedIn,
    authenticatingUser: reduxStoreState.userReducer.authenticatingUser,
  });

  const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
  });

  return connect(
    mapStateToProps,
    actions,
  )(AuthorizedComponent);
}

export default withAuth;



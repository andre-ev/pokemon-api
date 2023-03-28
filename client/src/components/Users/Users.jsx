import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/action";

class Users extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return(
      <>
        <h1>Users: </h1>
        {
          this.props.users.map((user) => {
            return(
              <div key={user.id}>
                <p>{user.name}</p>
              </div>
            )
          })
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {dispatch(getUsers)}
  }
}

export default connect(
  mapStateToProps, // me permite traer información del estado Global
  mapDispatchToProps // me permite despachar acciones
)(Users);

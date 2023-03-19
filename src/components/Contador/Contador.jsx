import React from "react";
import { connect } from "react-redux";
import { aumentarContador } from "../../redux/action";

class Contador extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <>
        <h1>Contador: </h1>
        <h3>{this.props.count}</h3>
        <button onClick={this.props.aumentarContador}>+</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }

}

const mapDispathToProps = (dispatch) => {
  return {
    aumentarContador: () => dispatch(aumentarContador())
  }
}

export default connect(
  mapStateToProps, // me permite traer info del estado global y que el componente lo reciba por props
  mapDispathToProps // me permite despachar acciones
)(Contador);

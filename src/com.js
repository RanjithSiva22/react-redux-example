import {connect} from "react-redux";
import {Increment,Decrement} from './actions';
let Com=(props)=>{
    return(
        <div>
            <h1>count {props.count}</h1>
            <button onClick={props.increment}>In</button>
            <button onClick={props.decrement}>De</button>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
      count:state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch({ type: Increment }),
      decrement: () => dispatch({ type: Decrement }),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Com);
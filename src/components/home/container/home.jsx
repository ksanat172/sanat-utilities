import { connect } from "react-redux"
import {createAction} from 'redux-actions';
import store from '../../../redux/store'
import AppDispatcher from '../../../flux/AppDispatcher';
import HomeStore from '../../../stores/HomeStore';
import APIRequest from '../../../apiRequests/homeApi';

function Home(props){
    const {usersData} = props.sagaResponse;

    let userName = "";

    const getInput = (e) => {
       userName = e.target.value;
    }

    const addUserClick = (userName) => {
        props.addUser(userName)
        addUserInputRef.value = "";
    }

    const removeUserClick = (userName) => {
        props.removeUser(userName)
        removeUserInputRef.value = "";
    }

    let addUserInputRef = "";
    let removeUserInputRef = "";

    return (
        <div>
           
            <div>
            <input type="text" placeholder="Enter user name" onChange={getInput} ref = {(inputRef) => {addUserInputRef = inputRef }}/>
            <button onClick = {()=>addUserClick(userName)}>Add User</button>
            </div>
            <div>
            <input type="text" placeholder="Enter user name" onChange={getInput} ref = {(inputRef) => {removeUserInputRef = inputRef }}/>
            <button onClick = {()=>removeUserClick(userName)}>Remove User</button>
            </div>
            <button onClick = {()=>props.displayUser()}>Display User</button>
            <div>
            {usersData.map((user,key) => (<li key={key}><span>{user.Name}</span></li>))}
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        sagaResponse:state.homereducer
    }
}


const mapDispatchToProps = (dispatch) => ({
    displayUser:()=>dispatch({
        type:"DISPLAY USERS"
    }),
    addUser:(user)=>dispatch({
        type:"ADD USER",
        user
    }),
    removeUser:(user)=>dispatch({
        type:"REMOVE USER",
        user
    })
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);


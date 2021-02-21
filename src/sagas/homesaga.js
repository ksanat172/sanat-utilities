import {fork,put,call,takeLatest, select} from 'redux-saga/effects';
import {homeState} from '../reducers/selctors';
import HomeAPI from '../apiRequests/homeApi';

function* setUserToState(usersData){
    yield put({
        type:"SET USER NAMES",
        data:usersData
    })
}

function* displayUsers(){
   const usersData = yield HomeAPI.executeAPI('getUsers','GET');
        yield call(setUserToState,usersData)
       console.log('User data:',usersData);
}

function* addUser({user}){
    const content = {user};
    yield HomeAPI.executeAPI('addUser','POST',content);
    const stateData = yield select(homeState);
    const newData = [...stateData.usersData,{Name:user}];
    yield call(setUserToState,newData)
}

function* removeUser({user}){
    const content = {user};
    yield HomeAPI.executeAPI('removeUser','DELETE',content);
    const stateData = yield select(homeState);
    const filteredData = stateData.usersData.filter((userName)=> user !== userName.Name);
    yield call(setUserToState,filteredData)
}


export function* watchDisplayUsersFunction(){
    yield takeLatest("DISPLAY USERS",displayUsers);
}

export function* watchAddUserFunction(){
    yield takeLatest("ADD USER",addUser)
}

export function* watchRemoveUserFunction(){
    yield takeLatest("REMOVE USER",removeUser)
}
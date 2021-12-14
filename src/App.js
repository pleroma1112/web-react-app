import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ajax from './modules/ajax'
import Login from './pages/Login'
import ReactLTE from './components/ReactLTE'
import { SETAUTH } from './reducers/authReducer'

function App() {

	let auth = useSelector(state=>state.authReducer.auth)
	let [isloaded, setLoaded] = useState(false)
	let pathname = useLocation().pathname
	let dispatch = useDispatch()

	useEffect(()=>{
		ajax('GET','/api/auth/authcheck',null,(result)=>{
			dispatch({type : SETAUTH, value : result.auth})
			setLoaded(true)
		})
	},[dispatch])

	useEffect(()=>{
		ajax('GET','/api/auth/authcheck',null,(result)=>{
			dispatch({type : SETAUTH, value : result.auth})
		})
	},[pathname,dispatch])

	return (
		<div className="App">
			{isloaded ? (
				auth ? (
					<ReactLTE/>
				) : (
					<Login/>
				)
			) : null}
		</div>
	);
}

export default App;

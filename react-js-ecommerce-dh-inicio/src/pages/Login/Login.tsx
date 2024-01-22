import styles from './Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import Navbar from '../../components/ui/Navbar/Navbar'

const Login = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
        if(userData.email == '' || userData.password == ''){
            toast.error('All fields are required')  
        }
        else{
            localStorage.setItem('userLogin', JSON.stringify(userData.email))
            navigate('/dashboard') 
        }
        
    }


  return (
    <>
    <Navbar />
    <div className={styles.containerLogin}>
        <h2>Login</h2>
        <Toaster richColors />
        <form onSubmit={handleSubmit} >
            <div className={styles.formControlLogin}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={userData.password}               
                    onChange={handleInputChange} 
                />
            </div>
            <div>
                <button type="submit"> Login </button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login
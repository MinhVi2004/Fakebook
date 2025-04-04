import React, {useState} from 'react'
import useNavigation from "../Other/navigation";
import './../CSS/LoginCSS.css'
function Login() {
        const { goToSignin } = useNavigation(); // Sử dụng hook để lấy các hàm điều hướng
        const [tenDangNhap, setTenDangNhap] = useState(''); // Khai báo state cho username
        const [matKhau, setMatKhau] = useState(''); // Khai báo state cho password
        async function handleLogin(e) {
                e.preventDefault();  // Ngừng sự kiện mặc định (ngừng reload trang)

                const response = await fetch("http://localhost:8080/api/chattingbook/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ tenDangNhap, matKhau }), // Gửi dữ liệu đăng nhập dưới dạng JSON
                });
            
                const data = await response.json();
                if (response.ok) {
                        alert(data.data.hoTen); // Hiển thị thông báo thành công
                        localStorage.setItem("token", data.token); // Lưu token vào localStorage
                } else {
                        alert(data.message);
                }
        };
        return (
                <div className='d-flex justify-content-center align-items-center vw-100  vh-100'>  
                <div className='m-4'>
                        <p className='text-primary fw-bold fs-1 '>facebook</p>
                        <p className="text-gray-700 text-lg mt-2 fs-4">
                        Connect with friends and the world around you on Facebook.
                        </p>
                </div>
                <form className='shadow p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center' style={{width: '400px'}}>
                        <input 
                                type='text' 
                                placeholder='Email or phone number' 
                                id='login-username' 
                                className='border border-2 rounded w-100 p-2 m-2 login-input' 
                                value={tenDangNhap} onChange={(e) => setTenDangNhap(e.target.value)}/>
                        <input 
                                type='password' 
                                placeholder='Password' 
                                id='login-password'  
                                className='border border-2 rounded w-100 p-2 m-2 login-input' 
                                value={matKhau} onChange={(e) => setMatKhau(e.target.value)}/>
                        <button 
                                className='border border-0 rounded w-100 p-2 text-white' 
                                id='login-login' 
                                onClick={handleLogin}>Login</button>
                        <a src='#' id='login-forget'>Forgotten password ?</a>
                        <span className="line"></span>
                        <button 
                                className='border border-0 rounded w-100 p-2 text-white' 
                                style={{background: '#42b72a'}} 
                                id='login-signin' onClick={goToSignin}>Signin</button>
                </form>
                </div>
        )
}
export default Login


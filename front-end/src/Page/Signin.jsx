import React, { useState, useEffect } from "react";
import useNavigation from "../Other/navigation";
import "./../CSS/SigninCSS.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Signin() {
     const [birthday, setBirthday] = useState(null);
     const { goToLogin } = useNavigation(); // Sử dụng hook để điều hướng

     return (
          <div className="sigin">
               <div className="sigin_name">
                    <h1>facebook</h1>
               </div>
               <form className="sigin_form">
                    <div className="sigin_create">
                         <h1 className="">Tạo tài khoản mới</h1>
                         <p>Nhanh chóng và dễ dàng</p>
                    </div>

                    <div className="sigin_input  text-start">
                         <div className="sigin_input_name">
                              <input
                                   type="text"
                                   name="first_name"
                                   placeholder="Họ"
                              />
                              <input
                                   type="text"
                                   name="last_name"
                                   placeholder="Tên"
                              />
                         </div>

                         <div className="sigin_input text-start">
                              <DatePicker
                                   selected={birthday}
                                   onChange={(date) => setBirthday(date)}
                                   dateFormat="dd/MM/yyyy"
                                   showYearDropdown
                                   scrollableYearDropdown
                                   yearDropdownItemNumber={100}
                                   maxDate={new Date()}
                                   placeholderText="Chọn ngày sinh"
                                   className="date-picker"
                              />
                         </div>

                         <div className="sigin_input_info select_gender text-start">
                              <div className="sigin_input_selectGender">
                                   <label>
                                        Nam
                                        <input
                                             type="radio"
                                             name="gender"
                                             value="male"
                                        />
                                   </label>
                                   <label>
                                        Nữ
                                        <input
                                             type="radio"
                                             name="gender"
                                             value="female"
                                        />
                                   </label>
                              </div>
                         </div>

                         <div>
                              <input
                                   type="text"
                                   name="email"
                                   placeholder="Email hoặc số điện thoại"
                              />
                         </div>
                         <div>
                              <input
                                   type="password"
                                   name="password"
                                   placeholder="Nhập mật khẩu"
                              />
                         </div>
                         <div>
                              <input
                                   type="password"
                                   name="repassword"
                                   placeholder="Xác nhận lại mật khẩu"
                              />
                         </div>

                         <button
                              type="submit"
                              className="btn_create_new_account"
                         >
                              Đăng ký
                         </button>

                         <p className="sigin_describe_dn_1">
                              Bạn đã có tài khoản?{" "}
                              <button onClick={goToLogin} className="btn-link">
                                   Đăng nhập ngay
                              </button>
                         </p>
                    </div>
               </form>
          </div>
     );
}

export default Signin;

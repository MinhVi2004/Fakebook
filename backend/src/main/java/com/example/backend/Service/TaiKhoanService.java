package com.example.backend.Service;
import com.example.backend.DTO.TaiKhoanDTO;
import java.util.List;
public interface TaiKhoanService {
    TaiKhoanDTO createTaiKhoan(TaiKhoanDTO taiKhoanDTO);
    TaiKhoanDTO updateTaiKhoan(TaiKhoanDTO taiKhoanDTO);
    TaiKhoanDTO deleteTaiKhoan(int maTK);
    List<TaiKhoanDTO> getAllTaiKhoan();
    TaiKhoanDTO getTaiKhoanById(int maTK);
    TaiKhoanDTO checkLogin(String tenDangNhap, String matKhau);  
    String checkSignin(String tenDangNhap, String soDienThoai);
}

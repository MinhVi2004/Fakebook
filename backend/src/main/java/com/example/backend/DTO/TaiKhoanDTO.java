package com.example.backend.DTO;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TaiKhoanDTO {
    private int MaTK;
    private String TenDangNhap;
    private String MatKhau;
    private String HoTen;
    private String GioiTinh;
    private String SoDienThoai;
    private String NgaySinh;
    private String NgayTao;
    private String TrangThai;
    private String PhanQuyen;
}

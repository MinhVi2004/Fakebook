package com.example.backend.Mapper;

import com.example.backend.DTO.TaiKhoanDTO;
import com.example.backend.Entity.TaiKhoanEntity;

public class TaiKhoanMapper {
    public static TaiKhoanDTO mapToTaiKhoanDTO(TaiKhoanEntity taiKhoanEntity) {
        TaiKhoanDTO taiKhoanDTO = new TaiKhoanDTO();
        taiKhoanDTO.setMaTK(taiKhoanEntity.getMaTK());
        taiKhoanDTO.setTenDangNhap(taiKhoanEntity.getTenDangNhap());
        taiKhoanDTO.setMatKhau(taiKhoanEntity.getMatKhau());
        taiKhoanDTO.setHoTen(taiKhoanEntity.getHoTen());
        taiKhoanDTO.setSoDienThoai(taiKhoanEntity.getSoDienThoai());
        taiKhoanDTO.setNgaySinh(taiKhoanEntity.getNgaySinh());
        taiKhoanDTO.setEmail(taiKhoanEntity.getEmail());
        taiKhoanDTO.setNgayTao(taiKhoanEntity.getNgayTao());
        taiKhoanDTO.setTrangThai(taiKhoanEntity.getTrangThai());
        taiKhoanDTO.setPhanQuyen(taiKhoanEntity.getPhanQuyen());
        return taiKhoanDTO;
    }

    public static TaiKhoanEntity mapToTaiKhoanEntity(TaiKhoanDTO taiKhoanDTO) {
        TaiKhoanEntity taiKhoanEntity = new TaiKhoanEntity();
        taiKhoanEntity.setMaTK(taiKhoanDTO.getMaTK());
        taiKhoanEntity.setTenDangNhap(taiKhoanDTO.getTenDangNhap());
        taiKhoanEntity.setMatKhau(taiKhoanDTO.getMatKhau());
        taiKhoanEntity.setHoTen(taiKhoanDTO.getHoTen());
        taiKhoanEntity.setSoDienThoai(taiKhoanDTO.getSoDienThoai());
        taiKhoanEntity.setNgaySinh(taiKhoanDTO.getNgaySinh());
        taiKhoanEntity.setEmail(taiKhoanDTO.getEmail());
        taiKhoanEntity.setNgayTao(taiKhoanDTO.getNgayTao());
        taiKhoanEntity.setTrangThai(taiKhoanDTO.getTrangThai());
        taiKhoanEntity.setPhanQuyen(taiKhoanDTO.getPhanQuyen());
        return taiKhoanEntity;
    }
}

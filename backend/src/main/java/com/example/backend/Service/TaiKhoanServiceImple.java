package com.example.backend.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.backend.DTO.TaiKhoanDTO;
import com.example.backend.Entity.TaiKhoanEntity;
import com.example.backend.Mapper.TaiKhoanMapper;
import com.example.backend.Repository.TaiKhoanRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TaiKhoanServiceImple implements TaiKhoanService {
    
    private TaiKhoanRepository taiKhoanRepository;
    @Override
    public TaiKhoanDTO createTaiKhoan(TaiKhoanDTO taiKhoanDTO) {
        taiKhoanDTO.setNgaySinh(LocalDate.parse(taiKhoanDTO.getNgaySinh(), DateTimeFormatter.ofPattern("dd/MM/yyyy")).toString());
        taiKhoanDTO.setNgayTao(java.time.LocalDateTime.now().toString());
        taiKhoanDTO.setTrangThai("Bình Thường");
        taiKhoanDTO.setPhanQuyen("Người Dùng");

        TaiKhoanEntity taiKhoanEntity = TaiKhoanMapper.mapToTaiKhoanEntity(taiKhoanDTO);
        TaiKhoanEntity savedTaiKhoanEntity = taiKhoanRepository.save(taiKhoanEntity);

        return TaiKhoanMapper.mapToTaiKhoanDTO(savedTaiKhoanEntity);
    }
    @Override
    public TaiKhoanDTO updateTaiKhoan(TaiKhoanDTO taiKhoanDTO) {
        Optional<TaiKhoanEntity> optionalTaiKhoan = taiKhoanRepository.findById(taiKhoanDTO.getMaTK());
        if (optionalTaiKhoan.isPresent()) {
            TaiKhoanEntity existingTaiKhoan = optionalTaiKhoan.get();
            existingTaiKhoan.setTenDangNhap(taiKhoanDTO.getTenDangNhap());
            existingTaiKhoan.setMatKhau(taiKhoanDTO.getMatKhau());
            existingTaiKhoan.setHoTen(taiKhoanDTO.getHoTen());
            existingTaiKhoan.setSoDienThoai(taiKhoanDTO.getSoDienThoai());
            existingTaiKhoan.setNgaySinh(taiKhoanDTO.getNgaySinh());
            existingTaiKhoan.setEmail(taiKhoanDTO.getEmail());
            existingTaiKhoan.setTrangThai(taiKhoanDTO.getTrangThai());
            existingTaiKhoan.setPhanQuyen(taiKhoanDTO.getPhanQuyen());
            
            TaiKhoanEntity updatedTaiKhoan = taiKhoanRepository.save(existingTaiKhoan);
            return TaiKhoanMapper.mapToTaiKhoanDTO(updatedTaiKhoan);
        }
        return null;
    }
    @Override
    public TaiKhoanDTO deleteTaiKhoan(int maTK) {
        Optional<TaiKhoanEntity> optionalTaiKhoan = taiKhoanRepository.findById(maTK);
        if (optionalTaiKhoan.isPresent()) {
            taiKhoanRepository.deleteById(maTK);
            return TaiKhoanMapper.mapToTaiKhoanDTO(optionalTaiKhoan.get());
        }
        return null;
    }   
    @Override
    public List<TaiKhoanDTO> getAllTaiKhoan() {
        List<TaiKhoanEntity> entities = taiKhoanRepository.findAll();
        return entities.stream()
                .map(TaiKhoanMapper::mapToTaiKhoanDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TaiKhoanDTO getTaiKhoanById(int maTK) {
        Optional<TaiKhoanEntity> optionalTaiKhoan = taiKhoanRepository.findById(maTK);
        return optionalTaiKhoan.map(TaiKhoanMapper::mapToTaiKhoanDTO).orElse(null);
    }
    @Override
    public TaiKhoanDTO checkLogin(String tenDangNhap, String matKhau) {
        Optional<TaiKhoanEntity> optionalTaiKhoan = taiKhoanRepository.findByTenDangNhap(tenDangNhap);
    
        if (optionalTaiKhoan.isPresent()) {
            TaiKhoanEntity taiKhoanEntity = optionalTaiKhoan.get();
            
            // Kiểm tra mật khẩu
            if (taiKhoanEntity.getMatKhau().equals(matKhau)) {
                return TaiKhoanMapper.mapToTaiKhoanDTO(taiKhoanEntity);
            } else {
                return null;
            }
        }
        
        return null;
        }
}

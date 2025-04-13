package com.example.backend.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.DTO.TaiKhoanDTO;
import com.example.backend.Service.TaiKhoanService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@AllArgsConstructor
@RestController
@RequestMapping("/api/fakebook")
@CrossOrigin(origins = "http://localhost:3000") // Thêm dòng này react được phép truy cập
public class TaiKhoanController {

     private TaiKhoanService taiKhoanService;

     @PostMapping("/signup")
     public ResponseEntity<?> signup(@RequestBody TaiKhoanDTO taiKhoanDTO) {
          try {
               TaiKhoanDTO created = taiKhoanService.createTaiKhoan(taiKhoanDTO);
               Map<String, Object> response = new HashMap<>();
               response.put("status", "success");
               response.put("message", "Đăng ký thành công");
               response.put("data", created);
               return ResponseEntity.ok(response);
          } catch (RuntimeException ex) {
               Map<String, Object> error = new HashMap<>();
               error.put("status", "error");
               error.put("message", "Đăng ký thất bại: " + ex.getMessage());
               return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
          }
     }

     @PostMapping("/signin")
     public ResponseEntity<?> signin(@RequestBody TaiKhoanDTO loginRequest) {
          Map<String, Object> response = new HashMap<>();
          if (loginRequest.getTenDangNhap() == "" && loginRequest.getMatKhau() == "") {
               response.put("status", "error");
               response.put("message", "Thiếu thông tin đăng nhập");
               return ResponseEntity.badRequest().body(response);
          }
          if (loginRequest.getTenDangNhap() == "") {
               response.put("status", "error");
               response.put("message", "Vui lòng nhập tên đăng nhập");
               return ResponseEntity.badRequest().body(response);
          }
          if (loginRequest.getMatKhau() == "") {
               response.put("status", "error");
               response.put("message", "Vui lòng nhập mật khẩu");
               return ResponseEntity.badRequest().body(response);
          }
          TaiKhoanDTO taiKhoanDTO = taiKhoanService.checkSignin(loginRequest.getTenDangNhap(),
                    loginRequest.getMatKhau());
          if (taiKhoanDTO != null) {
               response.put("status", "success");
               response.put("message", "Đăng nhập thành công");
               response.put("data", taiKhoanDTO);
               return ResponseEntity.ok(response);
          } else {
               response.put("status", "error");
               response.put("message", "Sai tài khoản hoặc mật khẩu");
               return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
          }
     }
}

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 04, 2025 lúc 08:58 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `fakebook`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet`
--

CREATE TABLE `baiviet` (
  `MaBV` int(11) NOT NULL,
  `MaTK` int(11) NOT NULL,
  `NoiDung` text DEFAULT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet_dinhkem`
--

CREATE TABLE `baiviet_dinhkem` (
  `MaBV_DK` int(11) NOT NULL,
  `MaBV` int(11) NOT NULL,
  `LinkDK` varchar(255) NOT NULL,
  `LoaiDK` enum('image','video') NOT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banbe`
--

CREATE TABLE `banbe` (
  `MaBB` int(11) NOT NULL,
  `MaTK_1` int(11) NOT NULL,
  `MaTK_2` int(11) NOT NULL,
  `TrangThaiBB` enum('Chờ Chấp Nhận','Đã Đồng Ý','Không Đồng Ý','Đã Xóa') DEFAULT 'Chờ Chấp Nhận',
  `NgayTao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `MaBL` int(11) NOT NULL,
  `MaTK` int(11) NOT NULL,
  `MaBV` int(11) NOT NULL,
  `NoiDung` text NOT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `luotthich`
--

CREATE TABLE `luotthich` (
  `MaLT` int(11) NOT NULL,
  `MaTK` int(11) NOT NULL,
  `MaBV` int(11) NOT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MaTK` int(11) NOT NULL,
  `TenDangNhap` varchar(255) NOT NULL,
  `MatKhau` varchar(255) NOT NULL,
  `Avatar` varchar(255) DEFAULT NULL,
  `HoTen` varchar(255) NOT NULL,
  `SoDienThoai` varchar(255) DEFAULT NULL,
  `NgaySinh` date NOT NULL,
  `NgayTao` datetime NOT NULL,
  `TrangThai` enum('Bình Thường','Vô Hiệu Hóa','','') DEFAULT NULL,
  `PhanQuyen` enum('Người Dùng','Quản Trị Viên','','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`MaTK`, `TenDangNhap`, `MatKhau`, `Avatar`, `HoTen`, `SoDienThoai`, `NgaySinh`, `NgayTao`, `TrangThai`, `PhanQuyen`) VALUES
(9, 'minhvi2', 'minhvi', NULL, 'Minh Vi 2', '0912345677', '2025-04-03', '2025-03-23 23:32:23', 'Bình Thường', 'Người Dùng'),
(11, 'minhvi3', 'minhvi', NULL, 'Minh Vi 3', '0912345677', '2025-04-03', '2025-03-25 23:56:54', 'Bình Thường', 'Người Dùng'),
(12, 'minhvi5', 'minhvi', NULL, 'Minh Vi 5', '0912345679', '2025-04-03', '2025-03-26 07:50:14', 'Bình Thường', 'Người Dùng'),
(13, 'minhvi6', 'minhvi', NULL, 'Minh Vi 2', '0912345677', '2004-11-22', '2025-04-03 11:16:24', 'Bình Thường', 'Người Dùng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tinnhan`
--

CREATE TABLE `tinnhan` (
  `MaTN` int(11) NOT NULL,
  `MaNguoiGui` int(11) NOT NULL,
  `MaNguoiNhan` int(11) NOT NULL,
  `NoiDung` text NOT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`MaBV`),
  ADD KEY `MaTK` (`MaTK`);

--
-- Chỉ mục cho bảng `baiviet_dinhkem`
--
ALTER TABLE `baiviet_dinhkem`
  ADD PRIMARY KEY (`MaBV_DK`),
  ADD KEY `MaBV` (`MaBV`);

--
-- Chỉ mục cho bảng `banbe`
--
ALTER TABLE `banbe`
  ADD PRIMARY KEY (`MaBB`),
  ADD UNIQUE KEY `MaTK_1` (`MaTK_1`,`MaTK_2`),
  ADD KEY `MaTK_2` (`MaTK_2`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`MaBL`),
  ADD KEY `MaTK` (`MaTK`),
  ADD KEY `MaBV` (`MaBV`);

--
-- Chỉ mục cho bảng `luotthich`
--
ALTER TABLE `luotthich`
  ADD PRIMARY KEY (`MaLT`),
  ADD UNIQUE KEY `MaTK` (`MaTK`,`MaBV`),
  ADD KEY `MaBV` (`MaBV`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`MaTK`),
  ADD KEY `TenDangNhap` (`TenDangNhap`),
  ADD KEY `SoDienThoai` (`SoDienThoai`);

--
-- Chỉ mục cho bảng `tinnhan`
--
ALTER TABLE `tinnhan`
  ADD PRIMARY KEY (`MaTN`),
  ADD KEY `MaNguoiGui` (`MaNguoiGui`),
  ADD KEY `MaNguoiNhan` (`MaNguoiNhan`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `MaBV` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `baiviet_dinhkem`
--
ALTER TABLE `baiviet_dinhkem`
  MODIFY `MaBV_DK` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `banbe`
--
ALTER TABLE `banbe`
  MODIFY `MaBB` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `MaBL` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `luotthich`
--
ALTER TABLE `luotthich`
  MODIFY `MaLT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `MaTK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `tinnhan`
--
ALTER TABLE `tinnhan`
  MODIFY `MaTN` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD CONSTRAINT `baiviet_ibfk_1` FOREIGN KEY (`MaTK`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `baiviet_dinhkem`
--
ALTER TABLE `baiviet_dinhkem`
  ADD CONSTRAINT `baiviet_dinhkem_ibfk_1` FOREIGN KEY (`MaBV`) REFERENCES `baiviet` (`MaBV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `banbe`
--
ALTER TABLE `banbe`
  ADD CONSTRAINT `banbe_ibfk_1` FOREIGN KEY (`MaTK_1`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE,
  ADD CONSTRAINT `banbe_ibfk_2` FOREIGN KEY (`MaTK_2`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`MaTK`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE,
  ADD CONSTRAINT `binhluan_ibfk_2` FOREIGN KEY (`MaBV`) REFERENCES `baiviet` (`MaBV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `luotthich`
--
ALTER TABLE `luotthich`
  ADD CONSTRAINT `luotthich_ibfk_1` FOREIGN KEY (`MaTK`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE,
  ADD CONSTRAINT `luotthich_ibfk_2` FOREIGN KEY (`MaBV`) REFERENCES `baiviet` (`MaBV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tinnhan`
--
ALTER TABLE `tinnhan`
  ADD CONSTRAINT `tinnhan_ibfk_1` FOREIGN KEY (`MaNguoiGui`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE,
  ADD CONSTRAINT `tinnhan_ibfk_2` FOREIGN KEY (`MaNguoiNhan`) REFERENCES `taikhoan` (`MaTK`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

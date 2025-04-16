-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 14, 2025 lúc 01:16 PM
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
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MaTK` int(11) NOT NULL,
  `TenDangNhap` varchar(255) NOT NULL,
  `MatKhau` varchar(255) NOT NULL,
  `ProfilePic` varchar(255) DEFAULT NULL,
  `CoverPic` varchar(255) DEFAULT NULL,
  `HoTen` varchar(255) NOT NULL,
  `GioiTinh` varchar(255) NOT NULL,
  `SoDienThoai` varchar(255) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `NgaySinh` date NOT NULL,
  `NgayTao` datetime NOT NULL,
  `TrangThai` enum('Bình Thường','Vô Hiệu Hóa') DEFAULT NULL,
  `PhanQuyen` enum('Người Dùng','Quản Trị Viên') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`MaTK`, `TenDangNhap`, `MatKhau`, `ProfilePic`, `CoverPic`, `HoTen`, `GioiTinh`, `SoDienThoai`, `Email`, `NgaySinh`, `NgayTao`, `TrangThai`, `PhanQuyen`) VALUES
(9, 'minhvi2', 'minhvi', '13.jpg', '13.jpg', 'Minh Vi 2', 'Nam', '0912345677', '', '2025-04-03', '2025-03-23 23:32:23', 'Bình Thường', 'Quản Trị Viên'),
(17, 'minhvi123', 'minhvi', 'default.png', 'default.png', 'Dương Văn Minh Vi 123', 'Nam', '0772912452', '', '2004-11-21', '2025-04-05 15:16:27', 'Bình Thường', 'Người Dùng'),
(23, 'minhvi41', 'minhvi', NULL, NULL, 'Test12123123', 'Nam', '0772912450', '', '2004-11-22', '2025-04-05 17:03:47', 'Bình Thường', 'Người Dùng');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`MaTK`),
  ADD KEY `TenDangNhap` (`TenDangNhap`),
  ADD KEY `SoDienThoai` (`SoDienThoai`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `MaTK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "baiviet_dinhkem")
@Getter
@Setter
public class BaiVietDinhKemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaBV_DK")
    private int maBV_DK;

    @Column(name = "MaBV")
    private int maBV;

    @Column(name = "LinkDK")
    private String linkDK;

    @Column(name = "LoaiDK")
    private String loaiDK;

    @Column(name = "ThoiGian")
    private String thoiGian;
}

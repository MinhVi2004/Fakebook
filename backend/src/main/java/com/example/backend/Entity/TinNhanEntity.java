package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tinnhan")
@Getter
@Setter
public class TinNhanEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaTN")
    private int maTN;

    @Column(name = "MaNguoiGui")
    private int maNguoiGui;

    @Column(name = "MaNguoiNhan")
    private int maNguoiNhan;

    @Column(name = "NoiDung")
    private String noiDung;

    @Column(name = "ThoiGian")
    private String thoiGian;
}

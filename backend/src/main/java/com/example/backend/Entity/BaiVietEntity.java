package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "baiviet")
@Getter
@Setter
public class BaiVietEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaBV")
    private int maBV;

    @Column(name = "MaTK")
    private int maTK;

    @Column(name = "NoiDung")
    private String noiDung;

    @Column(name = "ThoiGian")
    private String thoiGian;
}

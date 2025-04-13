package com.example.backend.DTO;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TinNhanDTO {
    private int maTN;
    private int maNguoiGui;
    private int maNguoiNhan;
    private String noiDung;
    private String thoiGian;
}

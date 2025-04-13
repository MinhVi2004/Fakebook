package com.example.backend.Mapper;

import com.example.backend.DTO.TinNhanDTO;
import com.example.backend.Entity.TinNhanEntity;

public class TinNhanMapper {
     public static TinNhanDTO mapToTinNhanDTO(TinNhanEntity tinNhanEntity) {
          if (tinNhanEntity == null) {
               return null;
          }
          TinNhanDTO dto = new TinNhanDTO();
          dto.setMaTN(tinNhanEntity.getMaTN());
          dto.setMaNguoiGui(tinNhanEntity.getMaNguoiGui());
          dto.setMaNguoiNhan(tinNhanEntity.getMaNguoiNhan());
          dto.setNoiDung(tinNhanEntity.getNoiDung());
          dto.setThoiGian(tinNhanEntity.getThoiGian());
          return dto;
     }

     public static TinNhanEntity mapToTinNhanEntity(TinNhanDTO dto) {
          if (dto == null) {
               return null;
          }
          TinNhanEntity entity = new TinNhanEntity();
          entity.setMaTN(dto.getMaTN());
          entity.setMaNguoiGui(dto.getMaNguoiGui());
          entity.setMaNguoiNhan(dto.getMaNguoiNhan());
          entity.setNoiDung(dto.getNoiDung());
          entity.setThoiGian(dto.getThoiGian());
          return entity;
     }
}

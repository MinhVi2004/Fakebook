package com.example.backend.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Entity.TinNhanEntity;

@Repository
public interface TinNhanRepository extends JpaRepository<TinNhanEntity, Integer> {
     
     List<TinNhanEntity> findByMaNguoiGuiOrMaNguoiNhan(Integer maNguoi, Integer maNguoi2);

}

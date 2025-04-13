package com.example.backend.Service;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.DTO.TinNhanDTO;
import com.example.backend.Entity.TinNhanEntity;
import com.example.backend.Mapper.TinNhanMapper;
import com.example.backend.Repository.TinNhanRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TinNhanServiceImple implements TinNhanService {
     @Autowired
    private TinNhanRepository tinNhanRepository;

    // Lấy danh sách các tin nhắn của người dùng hiện tại
    @Override
    public List<TinNhanDTO> getChatItems(int maNguoi) {
        List<TinNhanEntity> entities = tinNhanRepository.findByMaNguoiGuiOrMaNguoiNhan(maNguoi, maNguoi);
        return entities.stream()
                .map(TinNhanMapper::mapToTinNhanDTO)  // Chuyển đổi từ Entity sang DTO
                .collect(Collectors.toList());
    }

    // Gửi tin nhắn và lưu vào cơ sở dữ liệu
    @Override
    public TinNhanDTO sendMessage(TinNhanDTO tinnhanDTO) {
        TinNhanEntity entity = TinNhanMapper.mapToTinNhanEntity(tinnhanDTO);  // Chuyển đổi từ DTO sang Entity
        TinNhanEntity savedEntity = tinNhanRepository.save(entity); // Lưu tin nhắn vào cơ sở dữ liệu
        return TinNhanMapper.mapToTinNhanDTO(savedEntity);  // Chuyển đổi từ Entity sang DTO
    }
}

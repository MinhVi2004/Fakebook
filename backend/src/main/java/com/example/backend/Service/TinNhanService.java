package com.example.backend.Service;

import com.example.backend.DTO.TinNhanDTO;

import java.util.List;

public interface TinNhanService {
    List<TinNhanDTO> getChatItems(int maNguoi);
    TinNhanDTO sendMessage(TinNhanDTO tinnhan);
}

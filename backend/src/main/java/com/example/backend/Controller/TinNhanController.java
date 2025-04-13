package com.example.backend.Controller;

import com.example.backend.DTO.TinNhanDTO;
import com.example.backend.Service.TinNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fakebook/tinnhan")
public class TinNhanController {

    @Autowired
    private TinNhanService tinNhanService;

    // API lấy danh sách các tin nhắn của người dùng
    @GetMapping("/{maNguoi}")
    public List<TinNhanDTO> getChatItems(@PathVariable int maNguoi) {
        return tinNhanService.getChatItems(maNguoi);
    }

    // API gửi tin nhắn
    @PostMapping("/send")
    public TinNhanDTO sendMessage(@RequestBody TinNhanDTO tinNhanDTO) {
        return tinNhanService.sendMessage(tinNhanDTO);
    }
}

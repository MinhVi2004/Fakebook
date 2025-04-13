package com.example.backend.Websocket.Controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.example.backend.DTO.ChatMessage;

@Controller
public class WebsocketController {
     
     @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat.sendMessage") // Gửi từ client
    public void sendMessage(@Payload ChatMessage chatMessage, Principal principal) {
        // Gửi đến user cụ thể (theo tên đăng nhập)
        messagingTemplate.convertAndSendToUser(
            chatMessage.getReceiver(), // username người nhận
            "/queue/messages",         // đuôi kênh
            chatMessage
        );
    }

}

package com.example.backend.Websocket;

import org.springframework.stereotype.Controller;

@Controller
public class Controller {
     
     public ChatMessage sendMessage(ChatMessage message) {
          return message;
     }

}

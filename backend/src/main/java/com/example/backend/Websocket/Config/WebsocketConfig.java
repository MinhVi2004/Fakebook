package com.example.backend.Websocket.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebsocketConfig implements WebSocketMessageBrokerConfigurer  {

     @Override
     public void configureMessageBroker(MessageBrokerRegistry config) {
          // Kênh nhận tin (client subscribe)
        config.enableSimpleBroker("/topic", "/queue"); 
        // Kênh gửi tin (client gửi lên)
        config.setApplicationDestinationPrefixes("/app"); 

        // Kênh riêng cho user
        config.setUserDestinationPrefix("/user"); 
     }

     @Override
     public void registerStompEndpoints(StompEndpointRegistry registry) {
          // Endpoint WebSocket, dùng SockJS để fallback nếu không hỗ trợ
          registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();
     }
     
     
}

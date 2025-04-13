import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

// Tạo Stomp client
const stompClient = new Client({
     webSocketFactory: () => new SockJS("http://localhost:8080/ws"), // endpoint từ Spring Boot
     reconnectDelay: 5000, // tự động reconnect sau 5s
     onConnect: () => {
          console.log("✅ WebSocket connected!");
     },
     onDisconnect: () => {
          console.log("❌ WebSocket disconnected!");
     },
});

stompClient.activate(); // Bắt đầu kết nối

export default stompClient;

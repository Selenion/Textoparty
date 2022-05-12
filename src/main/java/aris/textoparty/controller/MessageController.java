package aris.textoparty.controller;

import aris.textoparty.entity.SocketMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/content")
    @SendTo("/topic/messages")
    public SocketMessage socketMessage (String content) throws Exception {
        return new SocketMessage(content);
    }
}

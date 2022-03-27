package aris.textoparty.entity;

public class SyncMessage {

    private String content;
    private String clientId;

    public SyncMessage() {
    }

    public SyncMessage(String content, String clientId) {
        this.content = content;
        this.clientId = clientId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }
}

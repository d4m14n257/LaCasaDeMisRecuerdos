package com.client.service_client.model.dto;

import jakarta.validation.constraints.NotBlank;

public class IdDTO {
    @NotBlank(message = "Id is require")
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

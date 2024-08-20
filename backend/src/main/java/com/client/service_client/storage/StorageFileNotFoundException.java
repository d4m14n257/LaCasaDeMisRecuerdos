package com.client.service_client.storage;

public class StorageFileNotFoundException extends StorageException{
    public StorageFileNotFoundException(String message) {
		super(message);
	}

	public StorageFileNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}
}

ALTER TABLE File
    MODIFY COLUMN size BIGINT;

ALTER TABLE File
    ADD COLUMN hotel_id CHAR(12) NULL;

ALTER TABLE File
    ADD CONSTRAINT fk_hotel_file FOREIGN KEY (hotel_id) REFERENCES Hotel(id)
        ON DELETE CASCADE;
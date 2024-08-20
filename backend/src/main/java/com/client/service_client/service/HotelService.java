package com.client.service_client.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.client.service_client.model.Hotel;
import com.client.service_client.repository.HotelRepository;

@Service
public class HotelService {
    private final HotelRepository hotelRepository;

    public HotelService (HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public List<Hotel> getAllHoteles () {
        return hotelRepository.findAll();
    }

    @Transactional
    public void save (Hotel hotel) {
        hotelRepository.save(hotel);
    }

    @Transactional
    public void deleteById (String id) {
        hotelRepository.deleteById(id);
    }
}

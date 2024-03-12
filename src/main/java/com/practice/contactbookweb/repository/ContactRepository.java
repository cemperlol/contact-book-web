package com.practice.contactbookweb.repository;

import com.practice.contactbookweb.model.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactRepository {

    Contact save(Contact contact);

    Optional<Contact> findById(Long id);

    List<Contact> findAll();

    Contact update(Contact contact);

    void batchInsert(List<Contact> contacts);

    void deleteById(Long id);
}

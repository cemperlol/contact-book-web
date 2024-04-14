package com.practice.contactbookweb.service;

import com.practice.contactbookweb.model.Contact;

import java.util.List;

public interface ContactService {

    Contact save(Contact contact);

    Contact getById(Long id);

    List<Contact> getAll();

    Contact update(Contact contact);

    void batchAdd(List<Contact> contacts);

    void deleteById(Long id);
}

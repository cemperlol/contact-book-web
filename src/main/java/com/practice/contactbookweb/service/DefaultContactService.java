package com.practice.contactbookweb.service;

import com.practice.contactbookweb.exception.ContactNotFoundException;
import com.practice.contactbookweb.model.Contact;
import com.practice.contactbookweb.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DefaultContactService implements ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public DefaultContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }


    @Override
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact getById(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new ContactNotFoundException("There's no such contact with id=" + id.toString()));
    }

    @Override
    public List<Contact> getAll() {
        return contactRepository.findAll().stream().sorted((c1, c2) -> (int)(c1.getId() - c2.getId())).toList();
    }

    @Override
    public Contact update(Contact contact) {
        return contactRepository.update(contact);
    }

    @Override
    public void batchAdd(List<Contact> contacts) {
        contactRepository.batchInsert(contacts);
    }

    @Override
    public void deleteById(Long id) {
        contactRepository.deleteById(id);
    }
}

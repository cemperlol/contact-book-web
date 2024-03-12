package com.practice.contactbookweb.repository;

import com.practice.contactbookweb.model.Contact;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class JooqContactRepository implements ContactRepository {

    private final DSLContext dslContext;

    @Override
    public Contact save(Contact contact) {
        contact.setId(System.currentTimeMillis());

        return contact;
    }

    @Override
    public Optional<Contact> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Contact> findAll() {
        return null;
    }

    @Override
    public Contact update(Contact contact) {
        return null;
    }

    @Override
    public void batchInsert(List<Contact> contacts) {

    }

    @Override
    public void deleteById(Long id) {

    }
}

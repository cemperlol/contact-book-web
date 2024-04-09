package com.practice.contactbookweb.repository;

import com.practice.contactbookweb.Tables;
import com.practice.contactbookweb.exception.ContactNotFoundException;
import com.practice.contactbookweb.model.Contact;
import com.practice.contactbookweb.tables.records.ContactsRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.jooq.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class JooqContactRepository implements ContactRepository {

    private final DSLContext dslContext;

    @Override
    public Contact save(Contact contact) {
        contact.setId(System.currentTimeMillis());
        ContactsRecord contactsRecord = dslContext.newRecord(Tables.CONTACTS, contact);

        contactsRecord.store();

        return contact;
    }

    @Override
    public Optional<Contact> findById(Long id) {
        return dslContext.selectFrom(Tables.CONTACTS)
                .where(Tables.CONTACTS.ID.eq(id))
                .fetchOptional()
                .map(tableRecord -> tableRecord.into(Contact.class));
    }

    @Override
    public List<Contact> findAll() {
        return dslContext.selectFrom(Tables.CONTACTS)
                .fetchInto(Contact.class);
    }

    @Override
    public Contact update(Contact contact) {
        Optional<ContactsRecord> updatedRecordIfExists = dslContext.update(Tables.CONTACTS)
                .set(dslContext.newRecord(Tables.CONTACTS, contact))
                .where(Tables.CONTACTS.ID.eq(contact.getId()))
                .returning()
                .fetchOptional();

        return updatedRecordIfExists.map(contactsRecord -> contactsRecord.into(Contact.class))
                .orElseThrow(() -> new ContactNotFoundException("Contact with id=" + contact.getId()
                        + " was not found"));
    }

    @Override
    public void batchInsert(List<Contact> contacts) {
        List<Query> insertQueries = new ArrayList<>();

        for (Contact contact : contacts) {
            insertQueries.add(
                    dslContext.insertInto(
                            Tables.CONTACTS,
                            Tables.CONTACTS.ID,
                            Tables.CONTACTS.FIRST_NAME,
                            Tables.CONTACTS.LAST_NAME,
                            Tables.CONTACTS.EMAIL,
                            Tables.CONTACTS.PHONE_NUMBER
                    ).values(
                            contact.getId(),
                            contact.getFirstName(),
                            contact.getLastName(),
                            contact.getEmail(),
                            contact.getPhoneNumber()
                    )
            );
        }

        dslContext.batch(insertQueries).execute();
    }

    @Override
    public void deleteById(Long id) {
        dslContext.deleteFrom(Tables.CONTACTS)
                .where(Tables.CONTACTS.ID.eq(id))
                .execute();
    }
}

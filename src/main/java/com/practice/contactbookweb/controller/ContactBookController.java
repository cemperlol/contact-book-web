package com.practice.contactbookweb.controller;

import com.practice.contactbookweb.model.Contact;
import com.practice.contactbookweb.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactBookController {

    private final ContactService contactService;

    @Autowired
    public ContactBookController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("contacts", contactService.getAll());
        if (!model.containsAttribute("contact")) {
            model.addAttribute("contact", new Contact());
        }

        return "index";
    }

    @PostMapping("/create")
    public String create(@ModelAttribute Contact contact) {
        contactService.save(contact);

        return "redirect:/";
    }

    @PostMapping("/edit")
    public String edit(@ModelAttribute Contact contact) {
        contactService.update(contact);

        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String deleteContactById(@PathVariable Long id) {
        contactService.deleteById(id);

        return "redirect:/";
    }
}

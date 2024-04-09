package com.practice.contactbookweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactBookController {

    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }

    @PostMapping("/add")
    public String add(Model model) {

    }
}

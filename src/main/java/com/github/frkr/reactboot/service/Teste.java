package com.github.frkr.reactboot.service;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rs")
public class Teste {

    @RequestMapping(value = "teste", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String teste() throws Exception {
        return "Funciona";
    }
}

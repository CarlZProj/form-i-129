package formi129.backend.controller;

import formi129.backend.domain.Form;
import formi129.backend.dto.FormDTO;
import formi129.backend.service.FormService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@Slf4j
@RequestMapping("/form")
public class FormController {

    @Autowired
    FormService formService;

    @CrossOrigin
    @GetMapping("{id}")
    public Form getFormById(@PathVariable UUID id) {
        return formService.getFormById(id);
    }

    @CrossOrigin
    @PostMapping("save")
    public Form addForm(@RequestBody FormDTO form) {
        return formService.addForm(form);
    }

    @CrossOrigin
    @PutMapping("{id}")
    public Form updateForm(@PathVariable UUID id, @RequestBody Form form) {
        return formService.updateForm(id, form);
    }
}

package formi129.backend.service;

import formi129.backend.domain.Form;
import formi129.backend.dto.FormDTO;
import formi129.backend.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.Optional;
import java.util.UUID;

@Service
public class FormService {

    @Autowired
    FormRepository formRepository;

    public Form getFormById(UUID id) {
        Optional<Form> form = formRepository.findByTheId(id);

        if(form.isPresent())
            return form.get();

        return null;
    }

    public Form addForm(FormDTO form) {
        // TODO: use DTO to Entity mapper
        Form newForm = new Form();
        newForm.setId(UUID.randomUUID());
        newForm.setRegistrationNumber(form.getRegistrationNumber());
        newForm.setCountryOfBirth(form.getCountryOfBirth());
        newForm.setProvinceOfBirth(form.getProvinceOfBirth());
        newForm.setCountryOfCitizenshipOrNationality(form.getCountryOfCitizenshipOrNationality());
        newForm.setDateOfLastArrival(form.getDateOfLastArrival());
        newForm.setArrivalDepartureRecordNumber(form.getArrivalDepartureRecordNumber());
        newForm.setDateOfLastArrival(form.getDateOfLastArrival());
        newForm.setArrivalDepartureRecordNumber(form.getArrivalDepartureRecordNumber());
        newForm.setPassportOrTravelDocumentNumber(form.getPassportOrTravelDocumentNumber());
        newForm.setDatePassportOrTravelDocumentIssued(form.getDatePassportOrTravelDocumentIssued());
        newForm.setDatePassportOrTravelDocumentExpires(form.getDatePassportOrTravelDocumentExpires());
        newForm.setPassportOrTravelDocumentCountryOfIssuance(form.getPassportOrTravelDocumentCountryOfIssuance());
        newForm.setCurrentNonimmigrantStatus(form.getCurrentNonimmigrantStatus());
        newForm.setDateStatusExpires(form.getDateStatusExpires());
        newForm.setSevis(form.getSevis());
        newForm.setEad(form.getEad());
        newForm.setStreetNumberAndName(form.getStreetNumberAndName());
        newForm.setLocation(form.getLocation());
        newForm.setNumber(form.getNumber());
        newForm.setCity(form.getCity());
        newForm.setState(form.getState());
        newForm.setZipCode(form.getZipCode());

        return formRepository.save(newForm);
    }

    public Form updateForm(UUID id, Form form) {
        Optional<Form> updateForm = formRepository.findByTheId(id);

        if(updateForm.isPresent()) {
            form.setId(updateForm.get().getId());
            return formRepository.save(form);
        }

        return null;
    }

}

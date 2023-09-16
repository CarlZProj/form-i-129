package formi129.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.text.DateFormat;
import java.util.Date;
import java.util.Optional;

@Getter
@Setter
public class FormDTO {
    private String registrationNumber;

    private String countryOfBirth;

    private String provinceOfBirth;

    private String countryOfCitizenshipOrNationality;

    private Date dateOfLastArrival;

    // TODO: must be 11 digits
    private String arrivalDepartureRecordNumber;

    private String passportOrTravelDocumentNumber;

    private Date datePassportOrTravelDocumentIssued;

    private Date datePassportOrTravelDocumentExpires;

    private String passportOrTravelDocumentCountryOfIssuance;

    private String currentNonimmigrantStatus;

    private Date dateStatusExpires;

    private String sevis;

    private String ead;

    private String streetNumberAndName;

    // TODO: make enum apt, ste, flr
    private String location;

    private Integer number;

    private String city;

    private String state;

    private String zipCode;


}

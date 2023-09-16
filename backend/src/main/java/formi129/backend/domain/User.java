package formi129.backend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "formuser")
public class User {

    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;

    private String username;

    // TODO: make encrypted
    private String password;
}

package formi129.backend.repository;

import formi129.backend.domain.Form;
import formi129.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface FormRepository extends JpaRepository<Form, String> {

    @Query(value = "SELECT * FROM form WHERE id = :id", nativeQuery = true)
    Optional<Form> findByTheId(UUID id);
}

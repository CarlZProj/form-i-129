package formi129.backend.repository;

import formi129.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    @Query(value = "SELECT * FROM formuser WHERE username = :username and password = :password", nativeQuery = true)
    List<User> findByLoginCredentials(String username, String password);
}

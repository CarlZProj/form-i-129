package formi129.backend.service;

import formi129.backend.domain.User;
import formi129.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User getUserOnLogin(String username, String password) {
        // TODO: use Optional instead
        List<User> user = userRepository.findByLoginCredentials(username, password);

        if(user.size() > 0)
            return user.get(0);

        return null;
    }

    public User addUser(User userDTO) {
        User user = new User();
        user.setId(UUID.randomUUID());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());

        // TODO: handle error
        User newUser = userRepository.save(user);
        return newUser;
    }
}

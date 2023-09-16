package formi129.backend.controller;

import formi129.backend.domain.User;
import formi129.backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/{username}/{password}")
    public User getUserByLogin(@PathVariable String username, @PathVariable String password) {
        return userService.getUserOnLogin(username, password);
    }

    @PostMapping("/save")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
}

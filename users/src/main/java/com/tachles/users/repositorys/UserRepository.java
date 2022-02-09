package com.tachles.users.repositorys;

import com.tachles.users.models.UserM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserM, Long> {

      UserM findByUserName(String userName);
}

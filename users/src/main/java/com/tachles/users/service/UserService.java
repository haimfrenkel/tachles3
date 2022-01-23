package com.tachles.users.service;

import com.tachles.users.models.PersonalInformation;
import com.tachles.users.models.User;
import com.tachles.users.repositorys.UserRepository;
import org.apache.poi.hssf.record.aggregates.*;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.apache.poi.EncryptedDocumentException;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    User user;

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> importExcelFile(@RequestParam("file") MultipartFile files)throws IOException {
        List<User> users = new ArrayList<>();
        XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream());
        // Read student data form excel file sheet1.
        XSSFSheet worksheet = workbook.getSheetAt(0);
        for (int index = 0; index < worksheet.getPhysicalNumberOfRows(); index++) {
            if (index > 0) {
                XSSFRow row = worksheet.getRow(index);
                User user = new User();
                user.userName =  getCellValue(row, 0);
            }
        }



        public User getOneByID(long id) {
        System.out.println("id:"+id);
        return userRepository.findById(id).orElseThrow();
    }

    public ArrayList<User> getAll(){
        System.out.println("user");
        return (ArrayList<User>) userRepository.findAll();
    }
    public ResponseEntity<?> deleteUser(long id) {
        System.out.println("delete User "+id);
        User user = getOneByID(id);
        userRepository.delete(user);
        return ResponseEntity.ok().build();
        
    }
}

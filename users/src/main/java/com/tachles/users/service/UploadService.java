package com.tachles.users.service;


import com.tachles.users.models.*;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.sql.SQLOutput;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
public class UploadService {
    public static String TYPE = "text/csv";
    static String[] HEADERs = {"Id", "Title", "Description", "Published"};
    public static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yy");

    public static boolean hasCSVFormat(MultipartFile file) {
        return TYPE.equals(file.getContentType());
    }

    public static List<User> csvToUsers(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<User> Users = new ArrayList<User>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            for (CSVRecord csvRecord : csvRecords) {
                User user = new User();
                user.setUserName(csvRecord.get("userName"));
                user.setDateOfMarriage(LocalDate.parse(csvRecord.get("dateOfMarriage"), formatter));
                user.setShtibel(csvRecord.get("shtibel"));
                user.setMen(new PersonalInformation());
                user.getMen().setName(new Name());
                user.getMen().getName().setStartName(csvRecord.get("startName"));
                user.getMen().getName().setFirstName(csvRecord.get("firstName"));
                user.getMen().getName().setLastName(csvRecord.get("lastName"));
                user.getMen().getName().setEndName(csvRecord.get("endName"));
                user.getMen().setFatherName(csvRecord.get("fatherName"));
                user.getMen().setGrandfatherName(csvRecord.get("grandfatherName"));
                user.getMen().setGreatGrandfatherName(csvRecord.get("greatGrandfatherName"));
                user.getMen().setDOB(LocalDate.parse(csvRecord.get("DOB"), formatter));
                user.getMen().setEmail(csvRecord.get("email"));
                user.getMen().setMaritalStatus(csvRecord.get("maritalStatus"));
                user.getMen().setPhones(new ArrayList<Phone>());
                user.getMen().getPhones().add(new Phone(Long.parseLong(csvRecord.get("number")), Boolean.parseBoolean(csvRecord.get("whatsapp")), user.getMen()));
                user.setWomen(new PersonalInformation());
                user.getWomen().setName(new Name());
                user.getWomen().getName().setStartName(csvRecord.get("startName"));
                user.getWomen().getName().setFirstName(csvRecord.get("firstName"));
                user.getWomen().getName().setLastName(csvRecord.get("lastName"));
                user.getWomen().getName().setEndName(csvRecord.get("endName"));
                user.getWomen().setFatherName(csvRecord.get("fatherName"));
                user.getWomen().setGrandfatherName(csvRecord.get("grandfatherName"));
                user.getWomen().setGreatGrandfatherName(csvRecord.get("greatGrandfatherName"));
                user.getWomen().setDOB(LocalDate.parse(csvRecord.get("DOB"), formatter));
                user.getWomen().setEmail(csvRecord.get("email"));
                user.getWomen().setMaritalStatus(csvRecord.get("maritalStatus"));
                user.getWomen().setPhones(new ArrayList<Phone>());
                user.getWomen().getPhones().add(new Phone(Long.parseLong(csvRecord.get("number")), Boolean.parseBoolean(csvRecord.get("whatsapp")), user.getWomen()));
                user.setAddress(new Address());
                user.getAddress().setState(csvRecord.get("state"));
                user.getAddress().setCity(csvRecord.get("city"));
                user.getAddress().setStreet(csvRecord.get("street"));
                user.getAddress().setBuildingNumber(Integer.parseInt(csvRecord.get("buildingNumber")));
                user.getAddress().setApartment(Integer.parseInt(csvRecord.get("apartment")));
                user.setBankAccount(new BankAccount());
                user.getBankAccount().setBankNo(Integer.parseInt(csvRecord.get("bankNo")));
                user.getBankAccount().setBankName(csvRecord.get("bankName"));
                user.getBankAccount().setBranchNo(Integer.parseInt(csvRecord.get("branchNo")));
                user.getBankAccount().setAccountNo(Integer.parseInt(csvRecord.get("accountNo")));
                Users.add(user);
            }
            return Users;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}

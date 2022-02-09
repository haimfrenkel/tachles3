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
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class UploadService {
    public static String TYPE = "text/csv";
    static String[] HEADERs = {"Id", "Title", "Description", "Published"};
    public static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yy");

    public static boolean hasCSVFormat(MultipartFile file) {
        return TYPE.equals(file.getContentType());
    }

    public static List<UserM> csvToUsers(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<UserM> Users = new ArrayList<UserM>();
            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            for (CSVRecord csvRecord : csvRecords) {
                UserM user = new UserM();
                user.setUserName(csvRecord.get("שם משתמש"));
                user.setDateOfMarriage(LocalDate.parse(csvRecord.get("תאריך נישואין"), formatter));
                user.setShtibel(csvRecord.get("שטיבל"));
                user.setMen(new PersonalInformation());
                user.getMen().setName(new Name());
                user.getMen().getName().setStartName(csvRecord.get("כינוי התחלה"));
                user.getMen().getName().setFirstName(csvRecord.get("שם פרטי"));
                user.getMen().getName().setLastName(csvRecord.get("שם משפחה"));
                user.getMen().getName().setEndName(csvRecord.get("כינוי סוף"));
                user.getMen().setFatherName(csvRecord.get("שם האב"));
                user.getMen().setGrandfatherName(csvRecord.get("שם הסב"));
                user.getMen().setGreatGrandfatherName(csvRecord.get("שם אבי הסב"));
                user.getMen().setDOB(LocalDate.parse(csvRecord.get("תאריך לידה"), formatter));
                user.getMen().setEmail(csvRecord.get("אמייל"));
                user.getMen().setMaritalStatus(csvRecord.get("סטטוס נישואין"));
                user.getMen().setPhones(new ArrayList<Phone>());
                user.getMen().getPhones().add(new Phone(Long.parseLong(csvRecord.get("מספר טלפון")), Boolean.parseBoolean(csvRecord.get("whatsapp")), user.getMen()));
                user.setWomen(new PersonalInformation());
                user.getWomen().setName(new Name());
                user.getWomen().getName().setStartName(csvRecord.get("כינוי התחלה 1"));
                user.getWomen().getName().setFirstName(csvRecord.get("שם פרטי 1"));
                user.getWomen().getName().setLastName(csvRecord.get("שם משפחה 1"));
                user.getWomen().getName().setEndName(csvRecord.get("כינוי סוף 1"));
                user.getWomen().setFatherName(csvRecord.get("שם האב 1"));
                user.getWomen().setGrandfatherName(csvRecord.get("שם הסב 1"));
                user.getWomen().setGreatGrandfatherName(csvRecord.get("שם אבי הסב 1"));
                user.getWomen().setDOB(LocalDate.parse(csvRecord.get("תאריך לידה 1"), formatter));
                user.getWomen().setEmail(csvRecord.get("אמייל 1"));
                user.getWomen().setMaritalStatus(csvRecord.get("סטטוס נישואין 1"));
                user.getWomen().setPhones(new ArrayList<Phone>());
                user.getWomen().getPhones().add(new Phone(Long.parseLong(csvRecord.get("מספר טלפון 1")), Boolean.parseBoolean(csvRecord.get("whatsapp 1")), user.getMen()));
                user.setAddress(new Address());
                user.getAddress().setState(csvRecord.get("מדינה"));
                user.getAddress().setCity(csvRecord.get("עיר"));
                user.getAddress().setStreet(csvRecord.get("רחוב"));
                user.getAddress().setBuildingNumber(Integer.parseInt(csvRecord.get("מספר בניין")));
                user.getAddress().setApartment(Integer.parseInt(csvRecord.get("מספר דירה")));
                user.getAddress().setZipCode(Integer.parseInt(csvRecord.get("מיקוד")));
                user.setBankAccount(new BankAccount());
                user.getBankAccount().setBankNo(Integer.parseInt(csvRecord.get("מספר בנק")));
                user.getBankAccount().setBankName(csvRecord.get("שם הבנק"));
                user.getBankAccount().setBranchNo(Integer.parseInt(csvRecord.get("מספר סניף")));
                user.getBankAccount().setAccountNo(Integer.parseInt(csvRecord.get("מספר חשבון")));
                Users.add(user);
            }
            return Users;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}

const express = require('express');
const cors = require('cors');
const mySQL = require('mysql');
const app = express();


app.use(cors());
app.use(express.json());

const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'SSBPandey'
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/create', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO student (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/update/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE student SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/student/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";
    
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Invalid email or password" });
        }
        
        if (data.length > 0) {
            return res.status(200).json({ success: true, message: "Login Successfully" });
        } else {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    });
});

////2013-15/////////
app.get('/studentthirteen', (req, res) => {
    const sql = "SELECT * FROM studentthirteen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createthirteen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studentthirteen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studentthirteen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studentthirteen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studentthirteen/:id', (req, res) => {
  const sql = "DELETE FROM studentthirteen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});

////2013-2015//////

////////2014-2016/////////////
app.get('/studentforteen', (req, res) => {
    const sql = "SELECT * FROM studentforteen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createforteen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studentforteen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studentforteen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studentforteen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studentforteen/:id', (req, res) => {
  const sql = "DELETE FROM studentforteen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
/////////////////////2014-2016///////////

///////2015-17/////////////////

app.get('/studentfifteen', (req, res) => {
    const sql = "SELECT * FROM studentfifteen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createfifteen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studentfifteen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studentfifteen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studentfifteen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studentfifteen/:id', (req, res) => {
  const sql = "DELETE FROM studentfifteen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
///////////////////////2015-17/////////////


///////2016-18/////////////////

app.get('/studentsixteen', (req, res) => {
    const sql = "SELECT * FROM studentsixteen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createsixteen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studentsixteen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studentsixteen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studentsixteen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studentsixteen/:id', (req, res) => {
  const sql = "DELETE FROM studentsixteen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
///////////////////////2016-18/////////////


///////2017-19/////////////////

app.get('/studentseventeen', (req, res) => {
    const sql = "SELECT * FROM studentseventeen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createseventeen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studentseventeen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studentseventeen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studentseventeen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studentseventeen/:id', (req, res) => {
  const sql = "DELETE FROM studentseventeen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
///////////////////////2017-19/////////////

///////2018-20/////////////////

app.get('/studenteighteen', (req, res) => {
    const sql = "SELECT * FROM studenteighteen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createeighteen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studenteighteen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studenteighteen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studenteighteen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studenteighteen/:id', (req, res) => {
  const sql = "DELETE FROM studenteighteen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
///////////////////////2018-20/////////////

///////2019-21/////////////////

app.get('/studentnineteen', (req, res) => {
    const sql = "SELECT * FROM studentnineteen";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createnineteen', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studentnineteen (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studentnineteen/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studentnineteen SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studentnineteen/:id', (req, res) => {
  const sql = "DELETE FROM studentnineteen WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
///////////////////////2019-21/////////////

///////2020-22/////////////////
app.get('/studenttwenty', (req, res) => {
    const sql = "SELECT * FROM studenttwenty";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createtwenty', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studenttwenty (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studenttwenty/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studenttwenty SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studenttwenty/:id', (req, res) => {
  const sql = "DELETE FROM studenttwenty WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
////////////2020-22////////////////////

///////2021-23/////////////////
app.get('/studenttwentyone', (req, res) => {
    const sql = "SELECT * FROM studenttwentyone";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createtwentyone', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studenttwentyone (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studenttwentyone/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studenttwentyone SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studenttwentyone/:id', (req, res) => {
  const sql = "DELETE FROM studenttwentyone WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
////////////2021-23///////////////////////

///////2022-24/////////////////
app.get('/studenttwentytwo', (req, res) => {
    const sql = "SELECT * FROM studenttwentytwo";
    db.query(sql, (err, data) => {
       if(err) return res.json("Error")
       return res.json(data)
     })
    })

app.post('/createtwentytwo', (req, res) => {
    //   const sql = "INSERT INTO student (`shno`, `batch`, `rollno`, `name`, `dob`, `adharno`, `address`, `mobileno`, `email`, `qualification`, `yopass`, `marks`, `category`, `occupation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sql = "INSERT INTO studenttwentytwo (`RollNo`, `Name`, `Dob`, `Gender`, `FatherName`, `MotherName`, `Address`,`AdharNo`,`PanNo`,`Telephone`, `Email`, `Category`,`Qualification`,`Marks`,`Subject1`,`Subject2`,`YearOfPass`,`CurrentJob`,`TC`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
      ];
  
      db.query(sql, values, (err, data) => {
          if (err) {
              console.error("Error executing SQL:", err);
              return res.status(500).json({ error: "Error occurred while inserting data" });
          }
          console.log("Data inserted successfully:", data);
          return res.status(200).json({ success: true, message: "Data inserted successfully" });
      });
  });

  app.put('/studenttwentytwo/:id', (req, res) => {
    // const sql = "UPDATE student SET `shno`=?, `batch`=?, `rollno`=?, `name`=?, `dob`=?, `adharno`=?, `address`=?, `mobileno`=?, `email`=?, `qualification`=?, `yopass`=?, `marks`=?, `category`=?, `occupation`=? WHERE `ID`=?";
    const sql = "UPDATE studenttwentytwo SET `RollNo`=?,`Name`=?,`Dob`=?,`Gender`=?,`FatherName`=?,`MotherName`=?,`Address`=?,`AdharNo`=?,`PanNo`=?,`Telephone`=?,`Email`=?,`Category`=?,`Qualification`=?,`Marks`=?,`Subject1`=?,`Subject2`=?,`YearOfPass`=?,`CurrentJob`=?,`TC`=? WHERE `ID`=?";
    const values = [
        req.body.rollno,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.fathername,
        req.body.mothername,
        req.body.address,
        req.body.adharno,
        req.body.panno,
        req.body.telephone,
        req.body.email,
        req.body.category,
        req.body.qualification,
        req.body.marks,
        req.body.subject1,
        req.body.subject2,
        req.body.yopass,
        req.body.currentjob,
        req.body.tc
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Error occurred while updating data" });
        }
        console.log("Data updated successfully:", data);
        return res.status(200).json({ success: true, message: "Data updated successfully" });
    });
});

  
app.delete('/studenttwentytwo/:id', (req, res) => {
  const sql = "DELETE FROM studenttwentytwo WHERE `ID`=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error("Error executing SQL:", err);
          return res.status(500).json({ error: "Error occurred while updating data" });
      }
      console.log("Data updated successfully:", data);
      return res.status(200).json({ success: true, message: "Data updated successfully" });
  });
});
////////////2022-24////////////////////////////////////

app.listen(8081, () => {
        console.log('Server is running on port 8081')
})

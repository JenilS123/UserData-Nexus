const express = require("express");
const router = express.Router();
const { FormData, ContactData } = require("../model/schema");
const bcrypt = require("bcrypt");
const authenticaton = require("../middleware/authenticaton");

router.post("/register", async (req, res) => {
  const { names, email, age, phone, address, password } = req.body;
  if (!names || !email || !age || !phone || !address || !password) {
    return res.status(422).json({ error: "Please fill the value" });
  }
  try {
    const userExist = await FormData.findOne({ email: email });
    if (userExist) {
      return res.status(201).json({ error: "Email already exist" });
    }
    await FormData.create({
      names,
      email,
      age,
      phone,
      address,
      password: bcrypt.hashSync(password, 12),
    });
    res.status(201).json({ message: "Register Successfully" });
  } catch (error) {
    res.status(400).json({ error: "Register Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "fill the email and passwaord" });
    }
    const user = await FormData.findOne({ email: email });

    if (user) {
      const userLogin = bcrypt.compareSync(password, user.password);

      // console.log(res.getHeaders());

      if (userLogin) {
        const token = await user.genarateToken();
        res
          .status(201)
          .cookie("jwtToken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
          })
          .json({ msg: "Login Successfull" });
      } else {
        res.status(400).json({ error: "Login not match" });
      }
    } else {
      res.status(400).json({ error: "Login credencial" });
    }
  } catch (error) {
    res.status(400).json({ error: "login error error" });
  }
});


router.post("/contact", async (req, res) => {
  const { name, emails, subject, textArea } = req.body;
  try {
    const existingContact = await ContactData.findOne({ emails });

    if (existingContact) {
      if (
        existingContact.subject === subject ||
        existingContact.textArea === textArea
      ) {
        return res.status(202).json("Please send different data");
      } else {
        // Update existing contact with new data (using PATCH request logic) also i can use router.put request on this line
        existingContact.set({subject,textArea}) 
        const updatedContact = await existingContact.save();
        return res.status(200).json(updatedContact);
      }
    } else {
      // Create new contact if no existing contact found
      const newContact = await ContactData.create({
        name,
        emails,
        subject,
        textArea,
      });
      return res.status(200).json(newContact);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Contact Server Error" });
  }
});



router.get("/service", authenticaton, (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (error) {
    console.log("service backend error ", error);
  }
});
router.get("/service", authenticaton, (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (error) {
    console.log("service backend error ", error);
  }
});
router.get("/profile", authenticaton, (req, res) => {
  try {
    res.json(req.rootUser);
  } catch (error) {
    console.log("profile backend error ", error);
  }
});
router.get("/about", authenticaton, (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (error) {
    console.log("about backend error ", error);
  }
});
router.get("/contact", authenticaton, (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (error) {
    console.log("contact backend error ", error);
  }
});

router.post("/logout",authenticaton, async (req, res) => {
  try {
    const { rootUser, token } = req;

    // Remove the token from the user's tokens array
    rootUser.tokens = rootUser.tokens.filter((t) => t.token !== token);
    await rootUser.save();

    res.clearCookie("jwtToken").json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Logout error", error);
    res.status(500).json({ error: "Failed to logout" });
  }
});



module.exports = router;

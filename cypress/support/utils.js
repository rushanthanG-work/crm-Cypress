export function generateRandomLead(baseLead) {
  const randomStr = Math.floor(1000 + Math.random() * 9000); // 4-digit random number

  const randomFirstName = `John${randomStr}`;
  const randomLastName = `Smith${randomStr}`;
  const randomEmail = `john${randomStr}@example.com`;
  const randomNineDigits = Math.floor(100000000 + Math.random() * 900000000);
  const randomPhone = `94${randomNineDigits}`;

  return {
    ...baseLead, // keep all other fields from fixture
    firstname: randomFirstName,
    lastname: randomLastName,
    Email: randomEmail,
    PhoneNumber: randomPhone,
  };
}

export function generateEditedLead(baseLead) {
  const randomStr = Math.floor(1000 + Math.random() * 9000); // 4-digit random
  const randomEmailNumber = Math.floor(1000 + Math.random() * 9000); // for email uniqueness
  const randomPhone = `94${Math.floor(700000000 + Math.random() * 299999999)}`; // 11-digit phone starting with 94

  return {
    ...baseLead,
    Edited_firstname: `Edited_${baseLead.Edited_firstname}${randomStr}`,
    Edited_lastname: `Edited_${baseLead.Edited_lastname}${randomStr}`,
    Edited_Email: `Edited${randomEmailNumber}@testing.com`,
    Edited_JobTitle: `Edited_${baseLead.Edited_JobTitle}${randomStr}`,
    Edited_PhoneNumber: randomPhone,
    Edited_Address: baseLead.Edited_Address, // you can randomize if needed
    Project: baseLead.Project,
    Edited_Campaign: baseLead.Edited_Campaign,
    Edited_Source: baseLead.Edited_Source,
  };
}

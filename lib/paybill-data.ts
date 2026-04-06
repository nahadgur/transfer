export type PaybillEntry = {
  name: string;
  paybill?: string;
  till?: string;
  accountFormat?: string;
  category: string;
  notes?: string;
};

export const paybillData: PaybillEntry[] = [
  // ── Banks ──
  { name: 'Equity Bank', paybill: '247247', category: 'Banks', accountFormat: 'Account number', notes: 'Eazzy Banking deposits' },
  { name: 'KCB Bank', paybill: '522522', category: 'Banks', accountFormat: 'Account number', notes: 'KCB M-Pesa & account deposits' },
  { name: 'Co-operative Bank', paybill: '400200', category: 'Banks', accountFormat: 'Account number' },
  { name: 'NCBA Bank', paybill: '880100', category: 'Banks', accountFormat: 'Account number', notes: 'Loop & bank account deposits' },
  { name: 'Absa Bank Kenya', paybill: '303030', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Diamond Trust Bank (DTB)', paybill: '516600', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Stanbic Bank', paybill: '600100', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Family Bank', paybill: '222111', category: 'Banks', accountFormat: 'Account number' },
  { name: 'I&M Bank', paybill: '542542', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Prime Bank', paybill: '985050', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Sidian Bank', paybill: '444200', category: 'Banks', accountFormat: 'Account number' },
  { name: 'HF Group (Housing Finance)', paybill: '100600', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Gulf African Bank', paybill: '985100', category: 'Banks', accountFormat: 'Account number' },
  { name: 'National Bank of Kenya (NBK)', paybill: '400400', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Credit Bank', paybill: '550550', category: 'Banks', accountFormat: 'Account number' },
  { name: 'Spire Bank', paybill: '490490', category: 'Banks', accountFormat: 'Account number' },

  // ── Utilities ──
  { name: 'KPLC Prepaid (Buy Token)', paybill: '888880', category: 'Utilities', accountFormat: 'Meter number', notes: 'Enter your prepaid meter number' },
  { name: 'KPLC Postpaid (Pay Bill)', paybill: '888880', category: 'Utilities', accountFormat: 'Account number', notes: 'Enter your postpaid account number' },
  { name: 'Nairobi City Water (NCWSC)', paybill: '444400', category: 'Utilities', accountFormat: 'Account number' },
  { name: 'Mombasa Water', paybill: '888100', category: 'Utilities', accountFormat: 'Account number' },
  { name: 'Kisumu Water (KIWASCO)', paybill: '445200', category: 'Utilities', accountFormat: 'Account number' },
  { name: 'Nakuru Water', paybill: '446600', category: 'Utilities', accountFormat: 'Account number' },
  { name: 'Kenya Power (Arrears)', paybill: '888880', category: 'Utilities', accountFormat: 'Account number', notes: 'Use "arrears" as account suffix if prompted' },
  { name: 'Stima Sacco', paybill: '802300', category: 'Utilities', accountFormat: 'Account number' },

  // ── Government & Regulatory ──
  { name: 'NHIF (Health Insurance)', paybill: '200222', category: 'Government', accountFormat: 'ID number or member number', notes: 'National Health Insurance Fund' },
  { name: 'NSSF (Pension)', paybill: '333300', category: 'Government', accountFormat: 'Member number', notes: 'National Social Security Fund' },
  { name: 'KRA (Tax Payments)', paybill: '572572', category: 'Government', accountFormat: 'Payment Registration Number (PRN)', notes: 'Kenya Revenue Authority' },
  { name: 'NTSA (Driving Licence & Logbook)', paybill: '108', category: 'Government', accountFormat: 'ID number', notes: 'National Transport & Safety Authority' },
  { name: 'eCitizen (Government Services)', paybill: '206206', category: 'Government', accountFormat: 'eCitizen payment code', notes: 'Passports, birth certificates, etc.' },
  { name: 'Huduma Centres', paybill: '206206', category: 'Government', accountFormat: 'Service code', notes: 'Multiple government services' },
  { name: 'Nairobi City County (Business Permits)', paybill: '247000', category: 'Government', accountFormat: 'Bill reference number' },
  { name: 'HELB (Student Loan Repayment)', paybill: '200400', category: 'Government', accountFormat: 'National ID number', notes: 'Higher Education Loans Board' },
  { name: 'Kenya Courts (Fines)', paybill: '400400', category: 'Government', accountFormat: 'Case number' },

  // ── Telecoms ──
  { name: 'Safaricom (Postpaid Bill)', paybill: '100200', category: 'Telecoms', accountFormat: 'Phone number', notes: 'Monthly postpaid bill' },
  { name: 'Airtel Kenya (Airtime)', paybill: '220220', category: 'Telecoms', accountFormat: 'Airtel number', notes: 'Buy Airtel airtime' },
  { name: 'Airtel Money Wallet', paybill: '220220', category: 'Telecoms', accountFormat: 'Airtel phone number' },
  { name: 'Faiba (JTL Fiber)', paybill: '251251', category: 'Telecoms', accountFormat: 'Account number', notes: 'Faiba 4G & home fiber' },
  { name: 'Telkom Kenya', paybill: '412412', category: 'Telecoms', accountFormat: 'Account number' },
  { name: 'Zuku (Wananchi Group)', paybill: '303070', category: 'Telecoms', accountFormat: 'Account number', notes: 'Internet & TV' },
  { name: 'DSTV', paybill: '345345', category: 'Telecoms', accountFormat: 'Smartcard number', notes: 'Pay monthly subscription' },
  { name: 'GOtv', paybill: '345678', category: 'Telecoms', accountFormat: 'IUC number' },
  { name: 'Startimes', paybill: '290087', category: 'Telecoms', accountFormat: 'Smartcard number' },

  // ── Insurance ──
  { name: 'Jubilee Insurance', paybill: '220052', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'Britam Insurance', paybill: '272727', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'UAP Old Mutual', paybill: '256256', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'CIC Insurance', paybill: '510300', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'AAR Insurance', paybill: '576576', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'Madison Insurance', paybill: '501501', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'APA Insurance', paybill: '222333', category: 'Insurance', accountFormat: 'Policy number' },
  { name: 'ICEA Lion', paybill: '504504', category: 'Insurance', accountFormat: 'Policy number' },

  // ── Schools & Universities ──
  { name: 'University of Nairobi', paybill: '220202', category: 'Schools', accountFormat: 'Student/Admission number' },
  { name: 'Kenyatta University', paybill: '222555', category: 'Schools', accountFormat: 'Admission number' },
  { name: 'Strathmore University', paybill: '263263', category: 'Schools', accountFormat: 'Student number' },
  { name: 'USIU Africa', paybill: '256100', category: 'Schools', accountFormat: 'Student ID' },
  { name: 'JKUAT', paybill: '580580', category: 'Schools', accountFormat: 'Admission number' },
  { name: 'Daystar University', paybill: '329329', category: 'Schools', accountFormat: 'Student number' },
  { name: 'Moi University', paybill: '201202', category: 'Schools', accountFormat: 'Admission number' },
  { name: 'KCSE Exam Fees (KNEC)', paybill: '200200', category: 'Schools', accountFormat: 'Centre code', notes: 'Kenya National Examinations Council' },

  // ── Hospitals ──
  { name: 'Aga Khan Hospital Nairobi', paybill: '303233', category: 'Hospitals', accountFormat: 'Patient/Bill number' },
  { name: 'MP Shah Hospital', paybill: '247027', category: 'Hospitals', accountFormat: 'Account number' },
  { name: 'Gertrude\'s Children Hospital', paybill: '500600', category: 'Hospitals', accountFormat: 'Patient number' },
  { name: 'Nairobi Hospital', paybill: '345600', category: 'Hospitals', accountFormat: 'Account number' },
  { name: 'Kenyatta National Hospital (KNH)', paybill: '510400', category: 'Hospitals', accountFormat: 'Patient number' },
  { name: 'Mater Hospital', paybill: '605606', category: 'Hospitals', accountFormat: 'Patient number' },

  // ── SACCOs & Microfinance ──
  { name: 'Mwalimu SACCO', paybill: '400400', category: 'SACCOs', accountFormat: 'Member number' },
  { name: 'Stima SACCO', paybill: '802300', category: 'SACCOs', accountFormat: 'Member number' },
  { name: 'Kenya Police SACCO', paybill: '595900', category: 'SACCOs', accountFormat: 'Member number' },
  { name: 'Unaitas SACCO', paybill: '400700', category: 'SACCOs', accountFormat: 'Account number' },
  { name: 'Faulu Microfinance', paybill: '555200', category: 'SACCOs', accountFormat: 'Account number' },
  { name: 'KWFT (Women Finance Trust)', paybill: '377377', category: 'SACCOs', accountFormat: 'Account number' },

  // ── Real Estate & Rent ──
  { name: 'National Housing Corporation (NHC)', paybill: '303303', category: 'Real Estate', accountFormat: 'Tenant number' },
  { name: 'Suraya Property Group', paybill: '888200', category: 'Real Estate', accountFormat: 'Account reference' },

  // ── Betting & Gaming ──
  { name: 'SportPesa', paybill: '290680', category: 'Betting', accountFormat: 'Account number', notes: 'Deposit only' },
  { name: 'Betika', paybill: '290290', category: 'Betting', accountFormat: 'Phone number', notes: 'Deposit only' },
  { name: 'Odibets', paybill: '290071', category: 'Betting', accountFormat: 'Phone number', notes: 'Deposit only' },
];

export const paybillCategories = [
  'All',
  'Banks',
  'Utilities',
  'Government',
  'Telecoms',
  'Insurance',
  'Schools',
  'Hospitals',
  'SACCOs',
  'Real Estate',
  'Betting',
];

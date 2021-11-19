import Bill from "../models/Bill";

// Create a new Bill
export const createBill = async (req, res, next) => {
  const { date } = req.body;
  try {
    const newBill = new Bill({
      date,
    });

    const billSaved = await newBill.save();

    res.status(201).json(billSaved);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// View Bill
export const getBill = async (req, res) => {
  const bills = await Bill.find();
  res.json(bills);
};

// View Bill by Id
export const getBillById = async (req, res) => {
  const bill = await Bill.findById(req.params.billId);
  res.status(200).json(bill);
};

// Update Bill
export const updateBillById = async (req, res) => {
  const updateBill = await Bill.findByIdAndUpdate(req.params.billId, req.body, {
    new: true,
  });
  re.status(200).json(updateBill);
};

//Delete Bill by id
export const deleteBillById = async (req, res) => {
  const { billId } = req.params;
  await Bill.findByIdAndDelete(billId);

  //code 200 is ok too
  re.status(204).json();
};

import BillingDetail from "../models/BillingDetail";

// Create a new Billing Details
export const createBillingDetail = async (req, res) => {
  const { quantity, price } = req.body;
  try {
    const newBillingDetail = new BranchOffice({
      quantity,
      price,
    });

    const billingDetailSaved = await newBillingDetail.save();

    res.status(201).json(billingDetailSaved);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// View Billing Details
export const getBillingDetails = async (req, res) => {
  const billingDetails = await BillingDetail.find();
  re.json(billingDetails);
};

// View Billing Details By Id
export const getBillingDetailsById = async (req, res) => {
  const billingDetails = await BillingDetail.findById(
    req.params.billingDetailId
  );
  res.status(200).json(billingDetails);
};

// Update Billing Details By Id
export const updateBillingDetailsById = async (req, res) => {
  const updateBillingDetail = await BillingDetail.findByIdAndUpdate(
    req.params.billingDetailsId,
    req.body,
    {
      new: true,
    }
  );
  re.status(200).json(updateBillingDetail);
};

// Delete Billing Details By Id
export const deleteBillingDetailsById = async (req, res) => {
  const { billingDetailsId } = req.params;
  await BillingDetail.findByIdAndDelete(billingDetailsId);

  // code 200 is ok too
  res.status(204).json();
};

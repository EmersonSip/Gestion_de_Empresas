import BranchOffice from "../models/BranchOffice";

// Create
export const createBranchOffice = async (req, res) => {
  const { name, direction, phone, mail, openingHours, closingHours } = req.body;
  try {
    const newBranchOffice = new BranchOffice({
      name,
      direction,
      phone,
      mail,
      openingHours,
      closingHours,
    });

    const branchOfficeSaved = await newBranchOffice.save();

    res.status(201).json(branchOfficeSaved);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// View
export const getBranchOffice = async (req, res) => {
  const branchOffices = await BranchOffice.find();
  res.json(branchOffices);
};

// View by Id
export const getBranchOfficeById = async (req, res) => {
  const branchOffice = await BranchOffice.findById(req.params.branchOfficeId);
  res.status(200).json(branchOffice);
};

// Update by Id
export const updateBranchOfficeById = async (req, res) => {
  const updateBranchOffice = await BranchOffice.findByIdAndUpdate(
    req.params.branchOfficeId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateBranchOffice);
};

// Delete by Id
export const deleteBranchOfficeById = async (req, res) => {
  const { branchOfficeId } = req.params;
  await BranchOffice.findByIdAndDelete(branchOfficeId);

  // code 200 is ok too
  res.status(204).json();
};

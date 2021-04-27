import api from "../api";

class CompaniesServices {
  static listAllCompanies = (cpnjNumber) =>
    api.get(
      `hiring/backoffice/company/listWithClosedContracts?filterString=` +
        cpnjNumber +
        `&limit=1`
    );

  static checkCNPJ = (companyId) =>
    api.get("hiring/backoffice/company/" + companyId);
}

export default CompaniesServices;
